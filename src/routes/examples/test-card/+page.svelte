<div class="ds-page">
  <h1 class="ds-page__title">Test card</h1>
  <p class="ds-page__desc">UX test card combining .card, tags, status dot and button.</p>

  <div class="ds-section">
    <h2 class="ds-section__title">Example</h2>
    <div class="cards-grid">
      <div class="test-card">
        <div class="test-card__head">
          <span class="test-card__name">Card sorting — Homepage</span>
          <span class="tag tag--positive">Published</span>
        </div>
        <p class="test-card__desc">Understand how participants organize the main navigation into mental groups.</p>
        <div class="test-card__meta">
          <span class="meta-item"><span class="meta-label">Sessions</span><span class="meta-value">24</span></span>
          <span class="meta-item"><span class="meta-label">Completed</span><span class="meta-value">18</span></span>
          <span class="meta-item"><span class="meta-label">Categories</span><span class="meta-value">5</span></span>
        </div>
        <div class="test-card__foot">
          <div class="table__status">
            <span class="table__dot"></span>
            <span class="table__status-label">Active</span>
          </div>
          <a href="/examples/test-card" class="btn btn--sm">View results</a>
        </div>
      </div>

      <div class="test-card">
        <div class="test-card__head">
          <span class="test-card__name">Mental model — Onboarding</span>
          <span class="tag tag--warning">Draft</span>
        </div>
        <p class="test-card__desc">Map user needs during the first 30 days against the current onboarding flow.</p>
        <div class="test-card__meta">
          <span class="meta-item"><span class="meta-label">Sessions</span><span class="meta-value">0</span></span>
          <span class="meta-item"><span class="meta-label">Completed</span><span class="meta-value">0</span></span>
          <span class="meta-item"><span class="meta-label">Segments</span><span class="meta-value">3</span></span>
        </div>
        <div class="test-card__foot">
          <div class="table__status">
            <span class="table__dot" style="background: var(--bg-warning)"></span>
            <span class="table__status-label">Draft</span>
          </div>
          <button class="btn btn--primary btn--sm">Publish</button>
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
  .cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: var(--space-1); }

  .test-card {
    display: flex; flex-direction: column; gap: var(--space-1);
    padding: var(--space-1);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-400);
    background: var(--bg-base-2);
    transition: border-color var(--duration-fast) var(--easing-default);
    &:hover { border-color: var(--border-strong); }
  }

  .test-card__head {
    display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-05);
  }

  .test-card__name {
    font-size: var(--smallest); font-weight: var(--weight-medium); color: var(--text-default);
  }

  .test-card__desc {
    font-size: var(--nano); color: var(--text-subtle); line-height: var(--leading-base);
    margin: 0;
  }

  .test-card__meta {
    display: flex; gap: var(--space-1);
    padding: var(--space-05) 0;
    border-top: 1px solid var(--border-default);
    border-bottom: 1px solid var(--border-default);
  }

  .meta-item { display: flex; flex-direction: column; gap: 2px; }
  .meta-label { font-size: var(--nano); color: var(--text-faint); text-transform: uppercase; letter-spacing: var(--tracking-wide); }
  .meta-value { font-size: var(--smallest); color: var(--text-default); font-weight: var(--weight-medium); font-family: var(--font-mono); }

  .test-card__foot { display: flex; align-items: center; justify-content: space-between; }

  .tag {
    display: inline-flex; align-items: center; padding: 0.2rem 0.5rem;
    border-radius: var(--radius-full); font-size: var(--nano);
    border: 1px solid var(--border-default); color: var(--text-default);
    letter-spacing: var(--tracking-wide); white-space: nowrap;
  }
  .tag--positive { border-color: var(--border-positive); color: var(--text-positive); }
  .tag--warning  { border-color: var(--border-warning);  color: var(--text-warning);  }
</style>
