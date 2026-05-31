<script lang="ts">
  const rows = [
    { name: 'Card sorting',    role: 'tester', status: 'published', uri: 'card_sorting.u42.space' },
    { name: 'Mental model',    role: 'tester', status: 'published', uri: 'mental_model.u42.space'  },
    { name: 'Interview guide', role: 'tester', status: 'draft',     uri: 'interview.u42.space'     },
    { name: 'Mindmap',         role: 'tester', status: 'draft',     uri: 'mindmap.u42.space'       },
  ];
</script>

<div class="ds-page">
  <h1 class="ds-page__title">Table</h1>
  <p class="ds-page__desc">.table component - CSS grid, status dot, navigation arrow.</p>

  <div class="ds-section">
    <h2 class="ds-section__title">Example</h2>
    <div class="table">
      <div class="table__row table__row--header">
        <span>Name</span><span>URI</span><span>Status</span><span></span><span></span>
      </div>
      {#each rows as row}
        <a href="/components/table" class="table__row">
          <div class="table__id-name">
            <div class="table__identity">
              <span class="table__name">{row.name}</span>
              <span class="table__role">{row.role}</span>
            </div>
          </div>
          <span class="table__uri">{row.uri}</span>
          <div class="table__status">
            <span class="table__dot" class:table__dot--draft={row.status === 'draft'}></span>
            <span class="table__status-label">{row.status}</span>
          </div>
          <span></span>
          <span class="table__arrow">→</span>
        </a>
      {/each}
    </div>
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">Disabled row</h2>
    <div class="table">
      <a href="/components/table" class="table__row table__row--disabled">
        <div class="table__id-name">
          <div class="table__identity">
            <span class="table__name">Coming soon</span>
            <span class="table__role">tester</span>
          </div>
        </div>
        <span class="table__uri">n/a</span>
        <div class="table__status">
          <span class="table__dot"></span>
          <span class="table__status-label">closed</span>
        </div>
        <span></span>
        <span class="table__arrow">→</span>
      </a>
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
  .table__row--header {
    font-size: var(--nano); color: var(--text-subtle);
    font-weight: var(--weight-medium); padding-block: 0.5rem;
    border-bottom: 1px solid var(--border-default);
  }
  .table__dot--draft   { background: var(--bg-warning) !important; }
  .table__name         { font-size: var(--smallest); color: var(--text-default); }
  .table__role         { font-size: var(--nano); color: var(--text-subtle); }
  .table__uri          { font-size: var(--nano); color: var(--text-subtle); font-family: var(--font-mono); }
  .table__status-label { font-size: var(--nano); color: var(--text-subtle); }
</style>
