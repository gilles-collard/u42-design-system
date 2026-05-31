<script lang="ts">
  let dialogEl: HTMLDialogElement;

  function openDialog() { dialogEl.showModal(); }
  function closeDialog() { dialogEl.close(); }
</script>

<div class="ds-page">
  <h1 class="ds-page__title">Dialog</h1>
  <p class="ds-page__desc">Modal window via the native &lt;dialog&gt; element with showModal().</p>

  <div class="ds-section">
    <h2 class="ds-section__title">Example</h2>
    <div class="demo-zone">
      <button class="btn btn--primary" onclick={openDialog}>Open dialog</button>
    </div>
  </div>
</div>

<dialog class="dialog" bind:this={dialogEl}>
  <header class="dialog__header">
    <h2 class="dialog__title">Confirm deletion</h2>
    <button class="btn btn--ghost btn--sm" onclick={closeDialog} aria-label="Close">x</button>
  </header>
  <div class="dialog__body">
    <p>This action cannot be undone. Are you sure you want to delete this test and all its sessions?</p>
  </div>
  <footer class="dialog__footer">
    <button class="btn" onclick={closeDialog}>Cancel</button>
    <button class="btn btn--destructive" onclick={closeDialog}>Delete</button>
  </footer>
</dialog>

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
  .demo-zone {
    padding: var(--space-2); background: var(--bg-base-2); border-radius: var(--radius-400);
  }

  .dialog {
    background: var(--bg-base-2);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-400);
    padding: 0;
    width: 100%; max-width: 480px;
    color: var(--text-default);

    &::backdrop {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(var(--blur-100));
    }
  }

  .dialog__header {
    display: flex; align-items: center; justify-content: space-between;
    padding: var(--space-1); border-bottom: 1px solid var(--border-default);
  }
  .dialog__title {
    font-size: var(--h5); font-weight: var(--weight-medium); margin: 0;
  }
  .dialog__body {
    padding: var(--space-1); font-size: var(--smallest);
    color: var(--text-subtle); line-height: var(--leading-base);
    p { margin: 0; }
  }
  .dialog__footer {
    display: flex; justify-content: flex-end; gap: var(--space-05);
    padding: var(--space-1); border-top: 1px solid var(--border-default);
  }
</style>
