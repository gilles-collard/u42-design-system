<script lang="ts">
  const tokens = [
    { token: '--space-05', rem: '0.5rem',  px: '8px'   },
    { token: '--space-1',  rem: '1rem',    px: '16px'  },
    { token: '--space-2',  rem: '2rem',    px: '32px'  },
    { token: '--space-3',  rem: '3rem',    px: '48px'  },
    { token: '--space-4',  rem: '4rem',    px: '64px'  },
    { token: '--space-5',  rem: '5rem',    px: '80px'  },
    { token: '--space-6',  rem: '6rem',    px: '96px'  },
    { token: '--space-7',  rem: '7rem',    px: '112px' },
    { token: '--space-8',  rem: '8rem',    px: '128px' },
    { token: '--space-9',  rem: '9rem',    px: '144px' },
    { token: '--space-10', rem: '10rem',   px: '160px' },
    { token: '--space-11', rem: '11rem',   px: '176px' },
    { token: '--space-12', rem: '12rem',   px: '192px' },
    { token: '--space-13', rem: '13rem',   px: '208px' },
    { token: '--space-14', rem: '14rem',   px: '224px' },
    { token: '--space-15', rem: '15rem',   px: '240px' },
    { token: '--space-16', rem: '16rem',   px: '256px' },
  ];
</script>

<div class="ds-page">
  <h1 class="ds-page__title">Spacing</h1>
  <p class="ds-page__desc">Base 16 px rem. 17 levels from --space-05 to --space-16.</p>

  <div class="ds-section">
    <h2 class="ds-section__title">Tokens</h2>
    {#each tokens as t}
      <div class="space-row">
        <code class="space-token">{t.token}</code>
        <div class="space-bar-wrap">
          <div class="space-bar" style="width: var({t.token})"></div>
        </div>
        <span class="space-value">{t.rem} / {t.px}</span>
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

  .space-row {
    display: grid; grid-template-columns: 8rem 1fr 7rem;
    align-items: center; gap: var(--space-1);
    padding: 0.5rem 0; border-bottom: 1px solid var(--border-default);
    &:last-child { border-bottom: none; }
  }
  .space-token    { font-family: var(--font-mono); font-size: var(--nano); color: var(--text-subtle); }
  .space-bar-wrap { overflow: hidden; }
  .space-bar      { height: 0.75rem; background: var(--bg-brand); border-radius: var(--radius-100); max-width: 100%; }
  .space-value    { font-family: var(--font-mono); font-size: var(--nano); color: var(--text-faint); text-align: right; }
</style>
