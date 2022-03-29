<script lang="ts">
  export let text = ''
  export let highlight = false
</script>

<h1 class:highlight>
  {text}
</h1>

<style>
  h1 {
    font-family: 'Inter';
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0.25px;
    color: var(--white);
    margin: 0;
    padding: 0;
    white-space: nowrap;
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 60px;
    }
  }

  .highlight {
    background-image: var(--blue-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
</style>
