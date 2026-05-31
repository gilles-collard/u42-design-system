<script lang="ts">
  const semantic = [
    {
      group: 'Background',
      tokens: [
        { name: '--bg-base',      desc: 'Default surface'       },
        { name: '--bg-base-2',    desc: 'Raised surface'        },
        { name: '--bg-base-3',    desc: 'Overlay surface'       },
        { name: '--bg-neutral',   desc: 'Neutral'               },
        { name: '--bg-neutral-2', desc: 'Secondary neutral'     },
        { name: '--bg-brand',     desc: 'Brand'                 },
        { name: '--bg-brand-2',   desc: 'Secondary brand'       },
        { name: '--bg-positive',  desc: 'Positive / success'    },
        { name: '--bg-warning',   desc: 'Warning'               },
        { name: '--bg-danger',    desc: 'Danger / error'        },
        { name: '--bg-disabled',  desc: 'Disabled'              },
      ],
    },
    {
      group: 'Text',
      tokens: [
        { name: '--text-default',  desc: 'Default text'         },
        { name: '--text-subtle',   desc: 'Secondary text'       },
        { name: '--text-faint',    desc: 'Tertiary text'        },
        { name: '--text-disabled', desc: 'Disabled text'        },
        { name: '--text-on-brand', desc: 'On brand background'  },
        { name: '--text-positive', desc: 'Positive'             },
        { name: '--text-warning',  desc: 'Warning'              },
        { name: '--text-danger',   desc: 'Danger'               },
      ],
    },
    {
      group: 'Border',
      tokens: [
        { name: '--border-default',  desc: 'Default border'     },
        { name: '--border-subtle',   desc: 'Subtle border'      },
        { name: '--border-strong',   desc: 'Strong border'      },
        { name: '--border-brand',    desc: 'Brand border'       },
        { name: '--border-positive', desc: 'Positive'           },
        { name: '--border-warning',  desc: 'Warning'            },
        { name: '--border-danger',   desc: 'Danger'             },
        { name: '--border-disabled', desc: 'Disabled'           },
      ],
    },
    {
      group: 'Icon',
      tokens: [
        { name: '--icon-default',  desc: 'Default icon'         },
        { name: '--icon-subtle',   desc: 'Secondary icon'       },
        { name: '--icon-neutral',  desc: 'Neutral icon'         },
        { name: '--icon-brand',    desc: 'Brand icon'           },
        { name: '--icon-positive', desc: 'Positive'             },
        { name: '--icon-warning',  desc: 'Warning'              },
        { name: '--icon-danger',   desc: 'Danger'               },
      ],
    },
  ];

  const palettes = [
    { name: 'Gray',   prefix: '--gray-',   stops: [0,40,70,100,190,280,370,460,550,630,720,810,880,910,940,970,1000] },
    { name: 'Green',  prefix: '--green-',  stops: [100,200,300,400,500,600,700,800,900,1000] },
    { name: 'Red',    prefix: '--red-',    stops: [100,200,300,400,500,600,700,800,900,1000] },
    { name: 'Yellow', prefix: '--yellow-', stops: [100,200,300,400,500,600,700,800,900,1000] },
    { name: 'Blue',   prefix: '--blue-',   stops: [100,200,300,400,500,600,700,800,900,1000] },
    { name: 'Pink',   prefix: '--pink-',   stops: [100,200,300,400,500,600,700,800,900,1000] },
    { name: 'Slate',  prefix: '--slate-',  stops: [100,200,300,400,500,600,700,800,900,1000] },
  ];
</script>

<div class="ds-page">
  <h1 class="ds-page__title">Colors</h1>
  <p class="ds-page__desc">Semantic tokens from the Figma Color collection - dark (default) and light modes.</p>

  {#each semantic as section}
    <div class="ds-section">
      <h2 class="ds-section__title">{section.group}</h2>
      <div class="token-list">
        {#each section.tokens as t}
          <div class="token-row">
            <span class="token-swatch" style="background: var({t.name}); border-color: var(--border-default)"></span>
            <code class="token-name">{t.name}</code>
            <span class="token-desc">{t.desc}</span>
          </div>
        {/each}
      </div>
    </div>
  {/each}

  <div class="ds-section">
    <h2 class="ds-section__title">Primitive palette</h2>
    {#each palettes as palette}
      <div class="palette">
        <span class="palette__name">{palette.name}</span>
        <div class="palette__strip">
          {#each palette.stops as stop}
            <span
              class="palette__stop"
              style="background: var({palette.prefix + stop})"
              title="{palette.prefix + stop}"
            ></span>
          {/each}
        </div>
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

  .token-list { display: flex; flex-direction: column; }
  .token-row {
    display: grid;
    grid-template-columns: 2rem 18rem 1fr;
    align-items: center;
    gap: var(--space-1);
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-default);
    &:last-child { border-bottom: none; }
  }
  .token-swatch {
    width: 2rem; height: 2rem;
    border-radius: var(--radius-200); border: 1px solid; display: block; flex-shrink: 0;
  }
  .token-name { font-family: var(--font-mono); font-size: var(--nano); color: var(--text-default); }
  .token-desc { font-size: var(--nano); color: var(--text-subtle); }

  .palette {
    display: flex; align-items: center; gap: var(--space-1); margin-bottom: 0.75rem;
  }
  .palette__name {
    font-size: var(--nano); font-family: var(--font-mono);
    color: var(--text-subtle); width: 3.5rem; flex-shrink: 0;
  }
  .palette__strip {
    display: flex; flex: 1; height: 2rem;
    border-radius: var(--radius-200); overflow: hidden;
    border: 1px solid var(--border-default);
  }
  .palette__stop { flex: 1; }
</style>
