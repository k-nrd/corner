<script lang="ts">
  export let pages = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]
</script>

<div class="overlay">
  {#each pages as { label, href }}
    <div class="overlay__item">
      <a {href} class="overlay__item__link">{ label }</a>
    </div>
  {/each}
</div>

<style>
  .overlay {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 0 16px;
  }

  .overlay__item {
    margin: 24px 0;
  }

  .overlay__item__link {
    font-size: 15px;
    color: var(--white);
    text-decoration: none;
  }
</style>
