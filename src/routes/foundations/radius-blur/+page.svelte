<script lang="ts">
  const radii = [
    { token: '--radius-100',  value: '2px',    label: 'radius-100'  },
    { token: '--radius-200',  value: '4px',    label: 'radius-200'  },
    { token: '--radius-400',  value: '8px',    label: 'radius-400'  },
    { token: '--radius-full', value: '9999px', label: 'radius-full' },
  ];
  const blurs = [
    { token: '--blur-100', value: '10px', label: 'blur-100' },
    { token: '--blur-200', value: '20px', label: 'blur-200' },
    { token: '--blur-300', value: '30px', label: 'blur-300' },
    { token: '--blur-400', value: '42px', label: 'blur-400' },
  ];
</script>

<div class="ds-page">
  <h1 class="ds-page__title">Radius &amp; Blur</h1>
  <p class="ds-page__desc">4 radius levels and 4 blur levels used in surfaces and the header.</p>

  <div class="ds-section">
    <h2 class="ds-section__title">Border radius</h2>
    <div class="radius-grid">
      {#each radii as r}
        <div class="radius-item">
          <div class="radius-box" style="border-radius: var({r.token})"></div>
          <code class="radius-label">{r.token}</code>
          <span class="radius-value">{r.value}</span>
        </div>
      {/each}
    </div>
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">Blur</h2>
    <p class="blur-note">Used via <code>backdrop-filter: blur(var(--blur-*))</code> on floating surfaces.</p>
    <div class="blur-grid">
      {#each blurs as b}
        <div class="blur-item">
          <div class="blur-demo">
            <div class="blur-bg"></div>
            <div class="blur-overlay" style="backdrop-filter: blur(var({b.token}))"></div>
          </div>
          <code class="blur-label">{b.token}</code>
          <span class="blur-value">{b.value}</span>
        </div>
      {/each}
    </div>
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

  .radius-grid { display: flex; gap: var(--space-3); flex-wrap: wrap; }
  .radius-item { display: flex; flex-direction: column; align-items: center; gap: var(--space-05); }
  .radius-box  { width: 80px; height: 80px; background: var(--bg-base-2); border: 1px solid var(--border-default); }
  .radius-label { font-family: var(--font-mono); font-size: var(--nano); color: var(--text-default); }
  .radius-value { font-size: var(--nano); color: var(--text-subtle); }

  .blur-note { font-size: var(--nano); color: var(--text-subtle); margin: 0 0 var(--space-1) 0;
    code { font-family: var(--font-mono); } }
  .blur-grid  { display: flex; gap: var(--space-3); flex-wrap: wrap; }
  .blur-item  { display: flex; flex-direction: column; align-items: center; gap: var(--space-05); }
  .blur-demo  {
    width: 80px; height: 80px; border-radius: var(--radius-200);
    overflow: hidden; position: relative; border: 1px solid var(--border-default);
  }
  .blur-bg {
    position: absolute; inset: 0;
    background: repeating-linear-gradient(
      45deg,
      var(--bg-base-2) 0px, var(--bg-base-2) 6px,
      var(--bg-brand) 6px, var(--bg-brand) 12px
    );
    opacity: 0.3;
  }
  .blur-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.05); }
  .blur-label { font-family: var(--font-mono); font-size: var(--nano); color: var(--text-default); }
  .blur-value { font-size: var(--nano); color: var(--text-subtle); }
</style>
