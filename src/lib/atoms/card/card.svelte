<div class="card">
  <slot/>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-gray);
    border: 1px solid var(--gray);
    border-radius: 8px;
    padding: var(--gutter-x);
    gap: calc(var(--gutter-x) * 2);
    max-width: 450px;
    width: 100%;
  }
</style>
