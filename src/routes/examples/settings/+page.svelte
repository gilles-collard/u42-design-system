<div class="ds-page">
  <h1 class="ds-page__title">Settings</h1>
  <p class="ds-page__desc">Settings form with labelled sections, inputs and action buttons.</p>

  <div class="ds-section">
    <h2 class="ds-section__title">Profile</h2>
    <form class="settings-form" onsubmit={(e) => e.preventDefault()}>
      <div class="field">
        <label class="field__label" for="name">Display name</label>
        <input class="field__input" id="name" type="text" value="Gi" autocomplete="name" />
      </div>
      <div class="field">
        <label class="field__label" for="email">Email</label>
        <input class="field__input" id="email" type="email" value="g56d.art@gmail.com" autocomplete="email" />
        <span class="field__hint">Used for magic link login across all u42 modules.</span>
      </div>
      <div class="field-actions">
        <button class="btn btn--primary" type="submit">Save changes</button>
        <button class="btn btn--ghost" type="button">Cancel</button>
      </div>
    </form>
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">Notifications</h2>
    <form class="settings-form" onsubmit={(e) => e.preventDefault()}>
      <div class="toggle-row">
        <div class="toggle-row__info">
          <span class="toggle-row__label">Session completed</span>
          <span class="toggle-row__desc">Email when a participant finishes a test.</span>
        </div>
        <label class="toggle">
          <input type="checkbox" checked />
          <span class="toggle__track"><span class="toggle__thumb"></span></span>
        </label>
      </div>
      <div class="toggle-row">
        <div class="toggle-row__info">
          <span class="toggle-row__label">Weekly digest</span>
          <span class="toggle-row__desc">Summary of all activity each Monday.</span>
        </div>
        <label class="toggle">
          <input type="checkbox" />
          <span class="toggle__track"><span class="toggle__thumb"></span></span>
        </label>
      </div>
    </form>
  </div>

  <div class="ds-section">
    <h2 class="ds-section__title">Danger zone</h2>
    <div class="danger-zone">
      <div class="danger-zone__info">
        <span class="danger-zone__label">Delete account</span>
        <span class="danger-zone__desc">Permanently delete your account and all associated data.</span>
      </div>
      <button class="btn btn--destructive btn--sm">Delete account</button>
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
  .settings-form { display: flex; flex-direction: column; gap: var(--space-2); max-width: 480px; }

  .field { display: flex; flex-direction: column; gap: 0.375rem; }
  .field__label { font-size: var(--smallest); font-weight: var(--weight-medium); color: var(--text-default); }
  .field__input {
    height: 2.5rem; padding: 0 var(--space-1);
    background: var(--bg-base-2); border: 1px solid var(--border-default);
    border-radius: var(--radius-400); color: var(--text-default);
    font-family: var(--font-sans); font-size: var(--smallest);
    transition: border-color var(--duration-fast) var(--easing-default);
    &:focus { outline: none; border-color: var(--border-brand); }
  }
  .field__hint { font-size: var(--nano); color: var(--text-subtle); }
  .field-actions { display: flex; gap: var(--space-05); }

  .toggle-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: var(--space-1) 0; border-bottom: 1px solid var(--border-default);
    &:last-child { border-bottom: none; }
    gap: var(--space-2);
  }
  .toggle-row__info { display: flex; flex-direction: column; gap: 2px; }
  .toggle-row__label { font-size: var(--smallest); font-weight: var(--weight-medium); color: var(--text-default); }
  .toggle-row__desc  { font-size: var(--nano); color: var(--text-subtle); }

  .toggle { position: relative; cursor: pointer; }
  .toggle input { position: absolute; opacity: 0; width: 0; height: 0; }
  .toggle__track {
    display: block; width: 2.5rem; height: 1.375rem;
    background: var(--bg-neutral); border-radius: var(--radius-full);
    transition: background var(--duration-fast) var(--easing-default);
  }
  .toggle input:checked + .toggle__track { background: var(--bg-brand); }
  .toggle__thumb {
    position: absolute; top: 2px; left: 2px;
    width: 1.125rem; height: 1.125rem;
    background: var(--gray-0); border-radius: var(--radius-full);
    transition: left var(--duration-fast) var(--easing-default);
  }
  .toggle input:checked ~ .toggle__track .toggle__thumb { left: calc(2.5rem - 1.125rem - 2px); }

  .danger-zone {
    display: flex; align-items: center; justify-content: space-between;
    padding: var(--space-1);
    border: 1px solid var(--border-danger);
    border-radius: var(--radius-400); gap: var(--space-2);
  }
  .danger-zone__info { display: flex; flex-direction: column; gap: 2px; }
  .danger-zone__label { font-size: var(--smallest); font-weight: var(--weight-medium); color: var(--text-danger); }
  .danger-zone__desc  { font-size: var(--nano); color: var(--text-subtle); }
</style>
