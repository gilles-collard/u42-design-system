<div class="ds-page">
  <h1 class="ds-page__title">Button</h1>
  <p class="ds-page__desc">.btn component - 4 variants, sm size, disabled state.</p>

  <div class="ds-section">
    <h2 class="ds-section__title">Variants</h2>
    <div class="btn-row">
      <button class="btn">Default</button>
      <button class="btn btn--primary">Primary</button>
      <button class="btn btn--ghost">Ghost</button>
      <button class="btn btn--destructive">Destructive</button>
    </div>
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">Sizes</h2>
    <div class="btn-row">
      <button class="btn">Default</button>
      <button class="btn btn--sm">Small</button>
    </div>
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">States</h2>
    <div class="btn-row">
      <button class="btn" disabled>Disabled</button>
      <button class="btn btn--primary" disabled>Primary disabled</button>
    </div>
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">As link</h2>
    <div class="btn-row">
      <a href="/components/button" class="btn">Anchor btn</a>
      <a href="/components/button" class="btn btn--primary">Anchor primary</a>
    </div>
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">Tokens</h2>
    <table class="token-table">
      <thead><tr><th>Property</th><th>Token</th></tr></thead>
      <tbody>
        <tr><td>border-radius</td>         <td><code>--radius-400</code></td></tr>
        <tr><td>border</td>                <td><code>--border-default</code></td></tr>
        <tr><td>background</td>            <td><code>--bg-base-2</code></td></tr>
        <tr><td>color</td>                 <td><code>--text-default</code></td></tr>
        <tr><td>hover background</td>      <td><code>--bg-base-3</code></td></tr>
        <tr><td>primary background</td>    <td><code>--bg-brand</code></td></tr>
        <tr><td>primary color</td>         <td><code>--text-on-brand</code></td></tr>
        <tr><td>destructive background</td><td><code>--bg-danger</code></td></tr>
      </tbody>
    </table>
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
  .token-table {
    width: 100%; font-size: var(--smallest); border-collapse: collapse;
    th, td { text-align: left; padding: 0.5rem var(--space-1); border-bottom: 1px solid var(--border-default); }
    th { color: var(--text-subtle); font-weight: var(--weight-medium); }
    code { font-family: var(--font-mono); font-size: var(--nano); }
  }
  .btn-row {
    display: flex; align-items: center; gap: var(--space-1); flex-wrap: wrap;
    padding: var(--space-2); background: var(--bg-base-2); border-radius: var(--radius-400);
  }
</style>
