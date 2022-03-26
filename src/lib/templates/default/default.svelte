<script lang="ts">
  import { BehaviorSubject, map } from 'rxjs'
  import Navbar from '$lib/sections/navbar'
  import Footer from '$lib/sections/footer'
  import Overlay from '$lib/sections/overlay'

  const pages = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const overlay = new BehaviorSubject (false)

  const icon = overlay.pipe (
    map ((v) => v ? 'x' : 'list')
  )

  const onToggle = () =>
    overlay.next (!$overlay)
</script>

<main>
  <Navbar 
    {pages} 
    {onToggle}
    icon={$icon}
  />
  {#if $overlay}
    <Overlay {pages} />
  {:else}
    <div class="page">
      <slot></slot>
    </div>
    <Footer />
  {/if}
</main>

<style>
  main, .page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--darker-gray);
  }
</style>
