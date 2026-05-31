<div class="ds-page">
  <h1 class="ds-page__title">Cards</h1>
  <p class="ds-page__desc">.card surface - title, description, footer.</p>

  <div class="ds-section">
    <h2 class="ds-section__title">Example</h2>
    <div class="cards-grid">
      <div class="card">
        <h3 class="card__title">Card sorting</h3>
        <p class="card__desc">UX method to understand how users mentally organize information into groups and categories.</p>
        <div class="card__footer">
          <span>u42.space</span>
          <span>published</span>
        </div>
      </div>
      <div class="card">
        <h3 class="card__title">Mental model</h3>
        <p class="card__desc">Graphical representation of alignment between user needs and product features.</p>
        <div class="card__footer">
          <span>u42.space</span>
          <span>draft</span>
        </div>
      </div>
      <div class="card">
        <h3 class="card__title">Interview guide</h3>
        <p class="card__desc">Tool for creating structured questionnaires to conduct effective user interviews.</p>
        <div class="card__footer">
          <span>u42.space</span>
          <span>draft</span>
        </div>
      </div>
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
  .token-table {
    width: 100%; font-size: var(--smallest); border-collapse: collapse;
    th, td { text-align: left; padding: 0.5rem var(--space-1); border-bottom: 1px solid var(--border-default); }
    th { color: var(--text-subtle); font-weight: var(--weight-medium); }
    code { font-family: var(--font-mono); font-size: var(--nano); }
  }
  .cards-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: var(--space-1);
  }
</style>
