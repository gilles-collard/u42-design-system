<div class="ds-page">
  <h1 class="ds-page__title">Empty state</h1>
  <p class="ds-page__desc">Zero data screen - used when a list or section has no content yet.</p>

  <div class="ds-section">
    <h2 class="ds-section__title">No tests yet</h2>
    <div class="empty">
      <div class="empty__icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" stroke-width="1.5"/>
          <path d="M14 20h12M20 14v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <h3 class="empty__title">No tests yet</h3>
      <p class="empty__desc">Create your first UX test to start collecting insights from your users.</p>
      <button class="btn btn--primary">Create a test</button>
    </div>
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">No results found</h2>
    <div class="empty">
      <div class="empty__icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="10" stroke="currentColor" stroke-width="1.5"/>
          <path d="M25.5 25.5L33 33" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M14 18h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <h3 class="empty__title">No results found</h3>
      <p class="empty__desc">Try adjusting your search or filters to find what you are looking for.</p>
      <button class="btn">Clear filters</button>
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
  .empty {
    display: flex; flex-direction: column; align-items: center; text-align: center;
    padding: var(--space-5) var(--space-4);
    border: 1px dashed var(--border-default);
    border-radius: var(--radius-400);
    gap: var(--space-1);
  }

  .empty__icon { color: var(--icon-subtle); }

  .empty__title {
    font-size: var(--h5); font-weight: var(--weight-medium);
    color: var(--text-default); margin: 0;
  }

  .empty__desc {
    font-size: var(--smallest); color: var(--text-subtle);
    max-width: 360px; margin: 0; line-height: var(--leading-base);
  }
</style>
