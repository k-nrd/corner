<script lang="ts">
  import '../app.css'
  import Sidebar from '$lib/sidebar'
  import Topbar from '$lib/topbar'
</script>

<Topbar />
<main class="text-slate-900">
  <Sidebar/>
  <slot />
</main>

<style>
  main {
    padding-top: var(--topbar-height);
  }
</style>
