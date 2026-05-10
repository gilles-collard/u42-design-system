/// <reference types="vitest/config" />
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [sveltekit(), paraglideVitePlugin({
    project: './project.inlang',
    outdir: './src/lib/paraglide'
  })],
  resolve: {
    alias: {
      '@ds': path.resolve(dirname, './style'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(dirname, './style')],
        silenceDeprecations: ['import'],
      },
    },
  },
  test: {
    expect: {
      requireAssertions: true
    },
    projects: [{
      extends: './vite.config.ts',
      test: {
        name: 'client',
        browser: {
          enabled: true,
          provider: playwright(),
          instances: [{ browser: 'chromium', headless: true }]
        },
        include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
        exclude: ['src/lib/server/**']
      }
    }, {
      extends: './vite.config.ts',
      test: {
        name: 'server',
        environment: 'node',
        include: ['src/**/*.{test,spec}.{js,ts}'],
        exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
      }
    }, {
      extends: true,
      plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{ browser: 'chromium' }]
        }
      }
    }]
  }
});
