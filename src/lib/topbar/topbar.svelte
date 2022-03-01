<script>
  const topics = [
    'js/ts',
    'elixir',
    'fp'
  ]
</script>

<div class="topbar row">
  <div class="topbar__items column row">
    {#each topics as topic}
      <div class="one column">{topic}</div>
    {/each}
  </div>
</div>

<style>
  .topbar {
    height: 5rem;
    background-color: var(--black);
    color: var(--white);
  }
</style>
