<script lang="ts">
  const sections = [
    {
      group: 'Foundations',
      items: [
        { href: '/foundations/colors',      label: 'Colors',       desc: 'Semantic tokens and primitive palette' },
        { href: '/foundations/typography',  label: 'Typography',   desc: 'Scale, families, weights'              },
        { href: '/foundations/spacing',     label: 'Spacing',      desc: 'Tokens --space-* base 16 px'           },
        { href: '/foundations/radius-blur', label: 'Radius & Blur',desc: 'Border radius and blur levels'         },
      ],
    },
    {
      group: 'Components',
      items: [
        { href: '/components/button',    label: 'Button',    desc: 'Primary, ghost, destructive'       },
        { href: '/components/table',     label: 'Table',     desc: 'CSS grid list with status dot'     },
        { href: '/components/tags',      label: 'Tags',      desc: 'Semantic badges'                   },
        { href: '/components/accordion', label: 'Accordion', desc: 'Expandable content'                },
        { href: '/components/cards',     label: 'Cards',     desc: 'Surfaces with title and content'   },
        { href: '/components/dialog',    label: 'Dialog',    desc: 'Modal window'                      },
      ],
    },
    {
      group: 'Examples',
      items: [
        { href: '/examples/test-card',   label: 'Test card',   desc: 'UX test card composition'    },
        { href: '/examples/empty-state', label: 'Empty state', desc: 'Zero data screen pattern'    },
        { href: '/examples/settings',    label: 'Settings',    desc: 'Settings form with sections' },
      ],
    },
  ];
</script>

<div class="home">
  <h1 class="home__title">u42 Design System</h1>
  <p class="home__desc">
    Figma tokens / SCSS components / SvelteKit -
    <a href="https://www.figma.com/design/fHev06Fqr0ucJZG2KSSLhM/U42-Design-System"
       target="_blank" rel="noopener">Figma source</a>
  </p>

  {#each sections as section}
    <section class="home__group">
      <h2 class="home__group-title">{section.group}</h2>
      <div class="home__grid">
        {#each section.items as item}
          <a href={item.href} class="home__card">
            <span class="home__card-label">{item.label}</span>
            <span class="home__card-desc">{item.desc}</span>
          </a>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style lang="scss">
  .home { max-width: 860px; }

  .home__title {
    font-size: var(--h1);
    letter-spacing: var(--tracking-tight);
    margin: 0 0 var(--space-1) 0;
  }

  .home__desc {
    font-size: var(--p);
    color: var(--text-subtle);
    margin: 0 0 var(--space-4) 0;
    a { color: var(--text-default); &:hover { color: var(--text-subtle); } }
  }

  .home__group { margin-bottom: var(--space-4); }

  .home__group-title {
    font-size: var(--h5);
    font-weight: var(--weight-medium);
    color: var(--text-subtle);
    margin: 0 0 var(--space-1) 0;
    padding-bottom: var(--space-05);
    border-bottom: 1px solid var(--border-default);
  }

  .home__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    border: 1px solid var(--border-default);
    border-radius: var(--radius-400);
    overflow: hidden;
    gap: 1px;
    background: var(--border-default);
  }

  .home__card {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: var(--space-1);
    text-decoration: none;
    background: var(--bg-base);
    transition: background var(--duration-fast) var(--easing-default);
    &:hover { background: var(--bg-base-2); }
  }

  .home__card-label {
    font-size: var(--smallest);
    color: var(--text-default);
    font-weight: var(--weight-medium);
  }

  .home__card-desc {
    font-size: var(--nano);
    color: var(--text-subtle);
  }
</style>
