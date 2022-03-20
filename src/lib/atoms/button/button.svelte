<script lang="ts">
  export let secondary = false
  export let text = 'Click me'
  export let icon: string | null = null
  export let iconPosition: 'left' | 'right' = 'left'
  export let background: 'white' | 'darker-gray' = 'white'
</script>

<button 
  class="button"
  class:primary={!secondary} 
  class:secondary
  class:background-white={!secondary && background === 'white'}
  class:background-darker-gray={!secondary && background === 'darker-gray'}
>
  {#if icon && iconPosition === 'left'}
    <div class="button__icon left">
      <i class={icon}></i>
    </div>
  {/if}
  <div class="button__text">{ text }</div>
  {#if icon && iconPosition === 'right'}
    <div class="button__icon right">
      <i class={icon}></i>
    </div>
  {/if}
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
    display: flex;
    justify-content: center;
    align-items: center;
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

  .button__icon {
    font-size: 18px;
  }

  .button__icon.left {
    margin-right: 10px;
  }

  .button__icon.right {
    margin-left: 10px;
  }
</style>
