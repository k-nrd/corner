<script>
  const topics = [
    'js/ts',
    'elixir',
    'fp'
  ]
</script>

<header class="py-4 fixed top-0 left-0 right-0 h-16 bg-slate-900 text-white">
  {#each topics as topic}
    <div class="column">{topic}</div>
  {/each}
</header>
