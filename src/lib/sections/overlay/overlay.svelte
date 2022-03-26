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
    padding: 0 24px;
  }

  .overlay__item {
    padding: 8px 0;
    margin: 24px 0;
  }

  .overlay__item__link {
    font-weight: 400;
    color: var(--white);
    text-decoration: none;
    letter-spacing: 0.5px;
    line-height:28px;
  }
</style>
