<script lang="ts">
  import '../app.css'
  import Default from '$lib/templates/default'
</script>

<Default>
  <slot />
</Default>

<style>
  :global(html) {
    --gutter-x: 8px;
    --white: #FFF;
    --darker-gray: #0E0E0F;
    --dark-gray: #131517;
    --medium-gray: #26292D;
    --gray: #626262;
    --blue: #17FFc6;
    --dark-blue: #0138F7;
    --blue-gradient: linear-gradient(45deg, var(--blue), var(--dark-blue));
  }

  @media (min-width: 576px) {
    :global(html) {
      --gutter-x: 16px;
    }
  }
</style>
