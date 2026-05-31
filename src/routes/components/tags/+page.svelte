<div class="ds-page">
  <h1 class="ds-page__title">Tags</h1>
  <p class="ds-page__desc">Semantic badges - 5 states.</p>

  <div class="ds-section">
    <h2 class="ds-section__title">Semantic</h2>
    <div class="tag-row">
      <span class="tag">Default</span>
      <span class="tag tag--positive">Published</span>
      <span class="tag tag--warning">Draft</span>
      <span class="tag tag--danger">Closed</span>
      <span class="tag tag--neutral">Archived</span>
    </div>
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">Tokens</h2>
    <table class="token-table">
      <thead><tr><th>Variant</th><th>Border</th><th>Color</th></tr></thead>
      <tbody>
        <tr><td>default</td>  <td><code>--border-default</code></td>  <td><code>--text-default</code></td></tr>
        <tr><td>positive</td> <td><code>--border-positive</code></td> <td><code>--text-positive</code></td></tr>
        <tr><td>warning</td>  <td><code>--border-warning</code></td>  <td><code>--text-warning</code></td></tr>
        <tr><td>danger</td>   <td><code>--border-danger</code></td>   <td><code>--text-danger</code></td></tr>
        <tr><td>neutral</td>  <td><code>--border-strong</code></td>   <td><code>--text-subtle</code></td></tr>
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
  .tag-row {
    display: flex; gap: var(--space-05); flex-wrap: wrap;
    padding: var(--space-2); background: var(--bg-base-2); border-radius: var(--radius-400);
  }
  .tag {
    display: inline-flex; align-items: center;
    padding: 0.2rem 0.625rem; border-radius: var(--radius-full);
    font-size: var(--nano); font-family: var(--font-sans);
    border: 1px solid var(--border-default);
    color: var(--text-default); background: var(--bg-base-3);
    letter-spacing: var(--tracking-wide);
  }
  .tag--positive { border-color: var(--border-positive); color: var(--text-positive); background: transparent; }
  .tag--warning  { border-color: var(--border-warning);  color: var(--text-warning);  background: transparent; }
  .tag--danger   { border-color: var(--border-danger);   color: var(--text-danger);   background: transparent; }
  .tag--neutral  { border-color: var(--border-strong);   color: var(--text-subtle);   background: transparent; }
</style>
