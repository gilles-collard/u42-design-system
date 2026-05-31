<div class="ds-page">
  <h1 class="ds-page__title">Accordion</h1>
  <p class="ds-page__desc">Expandable content via the native &lt;details&gt; element.</p>

  <div class="ds-section">
    <h2 class="ds-section__title">Example</h2>
    <div class="accordion">
      <details class="accordion__item">
        <summary class="accordion__trigger">What is card sorting?</summary>
        <div class="accordion__body">
          <p>Card sorting is a UX method that helps understand how users mentally organize information.
          Participants group thematic cards according to their own logic.</p>
        </div>
      </details>
      <details class="accordion__item">
        <summary class="accordion__trigger">How does the mental model work?</summary>
        <div class="accordion__body">
          <p>Indi Young's mental model graphically represents the alignment between user needs
          (top section) and product features (bottom section).</p>
        </div>
      </details>
      <details class="accordion__item" open>
        <summary class="accordion__trigger">Who can participate in tests?</summary>
        <div class="accordion__body">
          <p>Participants access the test via a unique link - no account required. Testers create
          tests from their u42.space account.</p>
        </div>
      </details>
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
  .accordion {
    border: 1px solid var(--border-default);
    border-radius: var(--radius-400); overflow: hidden;
  }
  .accordion__item {
    border-bottom: 1px solid var(--border-default);
    &:last-child { border-bottom: none; }
  }
  .accordion__trigger {
    display: flex; align-items: center; justify-content: space-between;
    padding: var(--space-1); cursor: pointer;
    font-size: var(--smallest); font-weight: var(--weight-medium);
    color: var(--text-default); background: var(--bg-base);
    list-style: none; user-select: none;
    transition: background var(--duration-fast) var(--easing-default);

    &::-webkit-details-marker { display: none; }
    &::after {
      content: '+'; font-size: var(--small); color: var(--text-subtle);
      transition: transform var(--duration-fast) var(--easing-default);
    }
    &:hover { background: var(--bg-base-2); }
  }
  /* Open state: trigger same lighter bg as body */
  details[open] > .accordion__trigger {
    background: var(--bg-base-2);
    &::after { transform: rotate(45deg); }
  }
  .accordion__body {
    padding: var(--space-1); font-size: var(--smallest);
    color: var(--text-subtle); background: var(--bg-base-2);
    line-height: var(--leading-base);
    p { margin: 0; }
  }
</style>
