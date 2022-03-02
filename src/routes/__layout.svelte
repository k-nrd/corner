<script lang="ts">
  import '../app.css'
  import Sidebar from '$lib/sidebar'
  import Topbar from '$lib/topbar'
</script>

<Topbar />
<main class="pt-16 text-slate-900">
  <Sidebar/>
  <slot />
</main>
