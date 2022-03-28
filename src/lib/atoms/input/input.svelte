<script lang="ts">
  export let type = 'text'
  export let label: string
  export let placeholder: string
</script>

<label>
  {label}
  <input {type} placeholder={placeholder ?? ''}/>
</label>

<style>
  label {
    display: flex;
    flex-direction: column;
    color: var(--white);
    gap: 8px;
    width: 100%;
  }

  input {
    background-color: var(--dark-gray);
    border: 1px solid var(--gray);
    border-radius: 8px;
    color: var(--white);
    height: 45px;
    padding: var(--gutter-x);
  }

  input::placeholder {
    color: var(--gray);
  }
</style>
