<script lang="ts">
  import { scale } from 'svelte/transition'
  import { cubicIn } from 'svelte/easing'
  import Logo from '../../atoms/logo'

  export let pages = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  let hovered: string | null = null
  const setHovered = (value: string | null) => {
    hovered = value
  }
</script>

<header class="navbar">
  <div class="navbar__logo">
    <Logo />
  </div>
  <div class="navbar__items">
    {#each pages as { label, href }}
      <div 
        class="navbar__items__item" 
        on:mouseenter={() => setHovered (label)}
        on:mouseleave={() => setHovered (null)}
      >
        <a class="navbar__items__item__link" {href}>{label}</a>
        {#if hovered === label}
          <div 
            class="navbar__items__item__indicator"
            transition:scale={{ duration: 400, easing: cubicIn }}
          ></div>
        {/if}
      </div>
    {/each}
  </div>
</header>

<style>
  header {
    width: 100%;
    background-color: var(--darker-gray);
    border-bottom: 1px solid var(--gray);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 50px;
  }

  .navbar__items {
    display: flex;
    gap: 40px;
  }

  .navbar__items__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px 0px;
    min-width: 30px;
    height: 24px;
    flex-grow: 1;
  }

  .navbar__items__item__link {
    color: var(--white);
    text-decoration: none;
    outline: none;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.5px;
  }

  .navbar__items__item__indicator {
    min-height: 2px;
    border-radius: 4px;
    margin-top: 2px;
    width: 100%;
    background-image: var(--blue-gradient);
  }
</style>
