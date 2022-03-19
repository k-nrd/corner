<script lang="ts">
  export let secondary = false
  export let text = 'Click me'
  export let icon: string | null = null
</script>

<button class="button" class:primary={!secondary} class:secondary>
  {#if icon}
    <div class="button__icon">
      <i class={icon}></i>
    </div>
  {/if}
  <div class="button__text">{ text }</div>
</button>

<style>
  .button {
    width: 100%;
    min-height: 46px;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }

  .button.primary {
    color: var(--white);
    background: var(--blue-gradient);
  }

  .button.secondary {
    color: var(--white);
    background: transparent;
    border: 1px solid var(--white);
  }

  .button.primary:hover {
    background: 
      linear-gradient(var(--white), var(--white)) padding-box,
      var(--blue-gradient) border-box;
    border: 1px solid transparent;
  }

  .button.secondary:hover {
    background: var(--white);
    color: var(--darker-gray);
    border: none;
  }

  .button.primary:hover .button__text {
    background-image: var(--blue-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
</style>
