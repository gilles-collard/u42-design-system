<script lang="ts">
  const scale = [
    { token: '--hero',     sample: 'Design for people'                              },
    { token: '--h1',       sample: 'Design for people'                              },
    { token: '--h2',       sample: 'Design for people'                              },
    { token: '--h3',       sample: 'Design for people'                              },
    { token: '--h4',       sample: 'Design for people'                              },
    { token: '--h5',       sample: 'Design for people'                              },
    { token: '--h6',       sample: 'Design for people'                              },
    { token: '--p',        sample: 'The quick brown fox jumps over the lazy dog.'   },
    { token: '--small',    sample: 'The quick brown fox jumps over the lazy dog.'   },
    { token: '--smaller',  sample: 'The quick brown fox jumps over the lazy dog.'   },
    { token: '--smallest', sample: 'The quick brown fox jumps over the lazy dog.'   },
    { token: '--nano',     sample: 'The quick brown fox jumps over the lazy dog.'   },
  ];

  const families = [
    { token: '--font-sans',  name: 'Inter',             sample: 'The quick brown fox jumps over the lazy dog.' },
    { token: '--font-serif', name: 'Libre Baskerville',  sample: 'The quick brown fox jumps over the lazy dog.' },
    { token: '--font-mono',  name: 'Source Code Pro',    sample: 'const system = { design: true };'             },
  ];

  const weights = [
    { token: '--weight-thin',        value: 100, label: 'Thin'        },
    { token: '--weight-extra-light', value: 200, label: 'Extra Light' },
    { token: '--weight-light',       value: 300, label: 'Light'       },
    { token: '--weight-regular',     value: 400, label: 'Regular'     },
    { token: '--weight-medium',      value: 500, label: 'Medium'      },
    { token: '--weight-semibold',    value: 600, label: 'Semibold'    },
    { token: '--weight-bold',        value: 700, label: 'Bold'        },
    { token: '--weight-extra-bold',  value: 800, label: 'Extra Bold'  },
    { token: '--weight-black',       value: 900, label: 'Black'       },
  ];
</script>

<div class="ds-page">
  <h1 class="ds-page__title">Typography</h1>
  <p class="ds-page__desc">Fluid scale (clamp) / Inter / Libre Baskerville / Source Code Pro.</p>

  <div class="ds-section">
    <h2 class="ds-section__title">Type scale</h2>
    {#each scale as s}
      <div class="scale-row">
        <code class="scale-token">{s.token}</code>
        <span class="scale-sample" style="font-size: var({s.token})">{s.sample}</span>
      </div>
    {/each}
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">Families</h2>
    {#each families as f}
      <div class="family-row">
        <div class="family-meta">
          <code class="family-token">{f.token}</code>
          <span class="family-name">{f.name}</span>
        </div>
        <span class="family-sample" style="font-family: var({f.token})">{f.sample}</span>
      </div>
    {/each}
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">Weights</h2>
    {#each weights as w}
      <div class="weight-row">
        <code class="weight-token">{w.token}</code>
        <span class="weight-sample" style="font-weight: var({w.token})">{w.label} - The quick brown fox</span>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .ds-page { max-width: 900px; }
  .ds-page__title { font-size: var(--h2); letter-spacing: var(--tracking-tight); margin: 0 0 var(--space-05) 0; }
  .ds-page__desc  { font-size: var(--small); color: var(--text-subtle); margin: 0 0 var(--space-4) 0; }
  .ds-section     { margin-bottom: var(--space-4); }
  .ds-section__title {
    font-size: var(--h5); font-weight: var(--weight-medium);
    margin: 0 0 var(--space-1) 0; padding-bottom: var(--space-05);
    border-bottom: 1px solid var(--border-default);
  }

  .scale-row {
    display: grid; grid-template-columns: 7rem 1fr;
    align-items: baseline; gap: var(--space-1);
    padding: var(--space-05) 0; border-bottom: 1px solid var(--border-default);
    &:last-child { border-bottom: none; } overflow: hidden;
  }
  .scale-token { font-family: var(--font-mono); font-size: var(--nano); color: var(--text-subtle); flex-shrink: 0; }
  .scale-sample { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.2; }

  .family-row {
    padding: var(--space-1) 0; border-bottom: 1px solid var(--border-default);
    &:last-child { border-bottom: none; }
  }
  .family-meta { display: flex; align-items: center; gap: var(--space-1); margin-bottom: 0.25rem; }
  .family-token { font-family: var(--font-mono); font-size: var(--nano); color: var(--text-subtle); }
  .family-name  { font-size: var(--nano); color: var(--text-faint); }
  .family-sample { font-size: var(--p); display: block; }

  .weight-row {
    display: grid; grid-template-columns: 12rem 1fr;
    align-items: center; gap: var(--space-1);
    padding: 0.5rem 0; border-bottom: 1px solid var(--border-default);
    &:last-child { border-bottom: none; }
  }
  .weight-token  { font-family: var(--font-mono); font-size: var(--nano); color: var(--text-subtle); }
  .weight-sample { font-size: var(--small); }
</style>
