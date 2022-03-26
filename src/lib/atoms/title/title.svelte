<script lang="ts">
  export let text = ''
  export let highlight = false
</script>

<h1 class:highlight>
  {text}
</h1>

<style>
  h1 {
    font-size: 34px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0.25px;
    color: var(--white);
    margin: 0;
    padding: 0;
  }

  .highlight {
    background-image: var(--blue-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
</style>
