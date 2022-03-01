<script lang="ts">
  import Sidebar from '$lib/sidebar'
  import Topbar from '$lib/topbar'
</script>

<Topbar />
<div class="container">
  <Sidebar>
    <slot />
  </Sidebar>
</div>
