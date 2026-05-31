<script lang="ts">
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';

  interface Section {
    top: number;
    height: number;
    label: string;
    level: number;
  }

  const TRACK_H = 240;

  let scrollY  = $state(0);
  let docH     = $state(1);
  let winH     = $state(600);
  let sections = $state<Section[]>([]);

  let vpTop = $derived((scrollY / docH) * TRACK_H);
  let vpH   = $derived(Math.max(16, (winH / docH) * TRACK_H));

  function collect() {
    docH = document.documentElement.scrollHeight;
    const heads = Array.from(
      document.querySelectorAll<HTMLElement>('.book__main h1, .book__main h2.ds-section__title')
    );
    sections = heads.map((h, i) => {
      const next = heads[i + 1];
      const top  = h.getBoundingClientRect().top + window.scrollY;
      const nextTop = next
        ? next.getBoundingClientRect().top + window.scrollY
        : docH;
      return {
        top,
        height: Math.max(0, nextTop - top),
        label: h.textContent?.trim() ?? '',
        level: parseInt(h.tagName[1]),
      };
    });
  }

  function update() {
    scrollY = window.scrollY;
    winH    = window.innerHeight;
    docH    = document.documentElement.scrollHeight;
  }

  onMount(() => {
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', () => { update(); collect(); }, { passive: true });
    update();
    setTimeout(collect, 200);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  });

  afterNavigate(() => { update(); setTimeout(collect, 200); });

  function jump(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientY - rect.top) / TRACK_H));
    window.scrollTo({ top: ratio * docH, behavior: 'smooth' });
  }
</script>

<aside class="minimap" aria-hidden="true">
  <div
    class="minimap__track"
    style="height:{TRACK_H}px"
    role="presentation"
    onclick={jump}
  >
    {#each sections as s}
      <div
        class="minimap__section minimap__section--{s.level}"
        style="top:{(s.top / docH) * TRACK_H}px; height:{Math.max(2, (s.height / docH) * TRACK_H)}px"
        title={s.label}
      ></div>
    {/each}

    <div
      class="minimap__viewport"
      style="top:{vpTop}px; height:{vpH}px"
    ></div>
  </div>
</aside>

<style lang="scss">
  .minimap {
    position: fixed;
    right: 1rem;
    top: calc(var(--header-height) + 2rem);
    z-index: var(--z-raised);
    width: 60px;
    user-select: none;
    pointer-events: auto;
  }

  .minimap__track {
    position: relative;
    background: var(--bg-base-3);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-200);
    overflow: hidden;
    cursor: pointer;
    opacity: 0.55;
    transition: opacity var(--duration-fast) var(--easing-default);

    &:hover { opacity: 1; }
  }

  .minimap__section {
    position: absolute;
    left: 6px;
    right: 6px;
    border-radius: 1px;

    &--1 { background: var(--text-subtle); }
    &--2 {
      background: var(--border-strong);
      left: 10px;
    }
  }

  .minimap__viewport {
    position: absolute;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.07);
    border-top: 1px solid var(--border-brand);
    border-bottom: 1px solid var(--border-brand);
    pointer-events: none;
  }
</style>
