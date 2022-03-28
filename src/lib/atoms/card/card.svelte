<div class="card">
  <slot/>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: var(--card-width, 100%);
    background-color: var(--dark-gray);
    border: 1px solid var(--gray);
    border-radius: 8px;
    padding: var(--gutter-x);
  }
</style>
