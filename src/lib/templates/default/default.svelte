<script>
  import Navbar from '$lib/sections/navbar'
  import Footer from '$lib/sections/footer'
</script>

<Navbar/>
<main>
  <slot></slot>
</main>
<Footer />

<style>
  main {
    width: 100%;
    height: 100%;
    background-color: var(--darker-gray);
  }
</style>
