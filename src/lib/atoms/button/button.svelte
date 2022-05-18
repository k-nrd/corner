<script lang="ts">
  export let secondary = false
  export let text = 'Click me'
  export let icon: string | null = null
  export let iconPosition: 'left' | 'right' = 'left'
  export let background: 'white' | 'darker-gray' = 'white'
  export let size: 'md' | 'lg' = 'md'
  export let onClick: ((e: MouseEvent | null | undefined) => void) | null | undefined = null

  $: iconClass = icon != null ? `bi bi-${icon as string}` : null
</script>

<button 
  class="button"
  class:primary={!secondary} 
  class:secondary
  class:lg={size === 'lg'}
  class:background-white={!secondary && background === 'white'}
  class:background-darker-gray={!secondary && background === 'darker-gray'}
  on:click={onClick}
>
  {#if iconClass && iconPosition === 'left'}
    <div class="button__icon left">
      <i class={iconClass}></i>
    </div>
  {/if}
  <div class="button__text">{ text }</div>
  {#if iconClass && iconPosition === 'right'}
    <div class="button__icon right">
      <i class={iconClass}></i>
    </div>
  {/if}
</button>

<style>
  .button {
    width: 100%;
    height: 45px;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .lg {
    width: 160px;
    padding: 0 20px;
  }

  @media (min-width: 576px) {
    .lg {
      width: 180px;
    }
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
    border: 1px solid transparent;
    height: 44px;
  }

  .button.primary.background-white:hover {
    background: 
      linear-gradient(var(--white), var(--white)) padding-box,
      var(--blue-gradient) border-box;
  }

  .button.primary.background-darker-gray:hover {
    background: 
      linear-gradient(var(--darker-gray), var(--darker-gray)) padding-box,
      var(--blue-gradient) border-box;
  }

  .button.secondary:hover {
    background: var(--white);
    color: var(--darker-gray);
    border: none;
  }

  .button.primary:hover div {
    background-image: var(--blue-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .button__text {
    margin-top: 2px;
  }

  .button__icon {
    margin-top: 3px;
    font-size: 18px;
  }

  .button__icon.left {
    margin-right: 10px;
  }

  .button__icon.right {
    margin-left: 10px;
  }
</style>
