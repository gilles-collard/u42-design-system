<script lang="ts">
  import type { Pathname } from '$app/types';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import favicon from '$lib/assets/favicon.svg';
  import Minimap from '$lib/Minimap.svelte';
  import '../../style/styles.scss';

  let { children } = $props();

  let theme = $state<'dark' | 'light'>('dark');

  $effect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  });

  function toggleTheme() {
    if (theme === 'dark') {
      document.documentElement.classList.add('theme-slow');
      theme = 'light';
      setTimeout(() => document.documentElement.classList.remove('theme-slow'), 13000);
    } else {
      theme = 'dark';
    }
  }

  const nav = [
    {
      label: 'Foundations',
      links: [
        { href: '/foundations/colors',      label: 'Colors'        },
        { href: '/foundations/typography',  label: 'Typography'    },
        { href: '/foundations/spacing',     label: 'Spacing'       },
        { href: '/foundations/radius-blur', label: 'Radius & Blur' },
      ],
    },
    {
      label: 'Components',
      links: [
        { href: '/components/button',    label: 'Button'    },
        { href: '/components/table',     label: 'Table'     },
        { href: '/components/tags',      label: 'Tags'      },
        { href: '/components/accordion', label: 'Accordion' },
        { href: '/components/cards',     label: 'Cards'     },
        { href: '/components/dialog',    label: 'Dialog'    },
      ],
    },
    {
      label: 'Examples',
      links: [
        { href: '/examples/test-card',   label: 'Test card'   },
        { href: '/examples/empty-state', label: 'Empty state' },
        { href: '/examples/settings',    label: 'Settings'    },
      ],
    },
  ];
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="book">
  <header class="book__header">
    <a href="/" class="book__logo">u42 <span>DS</span></a>
    <button
      class="book__theme-btn btn btn--ghost btn--sm"
      onclick={toggleTheme}
      aria-label="Toggle theme"
    >{theme === 'dark' ? 'Light' : 'Dark'}</button>
  </header>

  <nav class="book__sidebar" aria-label="Design system navigation">
    {#each nav as section}
      <div class="book__nav-section">
        <p class="book__nav-label">{section.label}</p>
        {#each section.links as link}
          <a
            href={link.href}
            class="book__nav-link"
            aria-current={page.url.pathname === link.href ? 'page' : undefined}
          >{link.label}</a>
        {/each}
      </div>
    {/each}
  </nav>

  <main class="book__main">
    {@render children()}
  </main>
</div>

<Minimap />

<div style="display:none">
  {#each locales as locale (locale)}
    <a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
  {/each}
</div>

<style lang="scss">
  :global(*, *::before, *::after) { box-sizing: border-box; }
  :global(body) { margin: 0; background: var(--bg-base); }

  /* Slow dark-to-light theme transition (12 s) */
  :global(html.theme-slow),
  :global(html.theme-slow *),
  :global(html.theme-slow *::before),
  :global(html.theme-slow *::after) {
    transition:
      background-color 12s ease,
      background       12s ease,
      color            12s ease,
      border-color     12s ease !important;
  }

  .book {
    display: grid;
    grid-template-areas: "header header" "sidebar main";
    grid-template-rows: var(--header-height) 1fr;
    grid-template-columns: 220px 1fr;
    min-height: 100vh;
  }

  .book__header {
    grid-area: header;
    position: sticky;
    top: 0;
    z-index: var(--z-overlay);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: var(--space-2);
    border-bottom: 1px solid var(--border-default);
    background: var(--bg-base);
    backdrop-filter: blur(var(--blur-400));
  }

  .book__logo {
    font-family: var(--font-mono);
    font-size: var(--smallest);
    text-decoration: none;
    color: var(--text-default);
    letter-spacing: var(--tracking-wide);
    font-weight: var(--weight-semibold);
    span { color: var(--text-subtle); }
  }

  .book__sidebar {
    grid-area: sidebar;
    position: sticky;
    top: var(--header-height);
    height: calc(100vh - var(--header-height));
    overflow-y: auto;
    padding: var(--space-2) var(--space-1);
    border-right: 1px solid var(--border-default);
  }

  .book__main {
    grid-area: main;
    padding: var(--space-3) var(--space-4);
  }

  .book__nav-section { margin-bottom: var(--space-2); }

  .book__nav-label {
    font-size: var(--nano);
    color: var(--text-subtle);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    margin: 0 0 var(--space-05) 0;
    padding-left: var(--space-05);
  }

  .book__nav-link {
    display: block;
    padding: 0.375rem var(--space-05);
    border-radius: var(--radius-200);
    text-decoration: none;
    color: var(--text-subtle);
    font-size: var(--smallest);
    transition:
      color       var(--duration-fast) var(--easing-default),
      background  var(--duration-fast) var(--easing-default);

    &:hover { color: var(--text-default); }
    &[aria-current="page"] {
      color: var(--text-default);
      background: var(--bg-base-2);
    }
  }
</style>
