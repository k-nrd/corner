<script lang="ts">
  export let label: string
  export let placeholder: string
</script>

<label>
  {label}
  <textarea
    {placeholder}
  ></textarea>
</label>

<style>
  label {
    display: flex;
    flex-direction: column;
    color: var(--white);
    width: 100%;
    gap: 8px;
    font-size: 14px;
  }

  textarea {
    background-color: var(--dark-gray);
    border: 1px solid var(--gray);
    border-radius: 8px;
    padding: var(--gutter-x);
    height: 150px;
  }

  textarea::placeholder {
    color: var(--gray);
  }
</style>
