<script>
  import Navbar from '$lib/sections/navbar'
  import Footer from '$lib/sections/footer'
</script>

<main>
  <Navbar/>
  <div class="page">
    <slot></slot>
  </div>
  <Footer />
</main>

<style>
  main, .page {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: var(--darker-gray);
  }
</style>
