<script>
  import Title from '$lib/atoms/title'
  import Button from '$lib/atoms/button'

  const toGithub = () => {
    location.href = 'https://github.com/g-konrad'
  }
</script>

<div class="hero">
  <div class="hero__contents">
    <div class="hero__contents__item">
      <Title text="I'm" />
      <div class="hero__contents__item__text">
        <Title text="Gustavo Konrad" highlight />
        <Title text="." />
      </div>
    </div>
    <div class="hero__contents__item">
      <Title text="Web developer." />
    </div>
    <div class="hero__contents__item">
      <div class="hero__contents__item__button">
        <Button 
          text="GitHub" 
          icon="github" 
          background="darker-gray"
          size="lg"
          onClick={toGithub}
        />
      </div>
      <div class="hero__contents__item__button">
        <Button
          text="Resume" 
          icon="download"
          size="lg"
          secondary 
        />
      </div>
    </div>
  </div>
</div>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
  }
  
  .hero__contents {
    gap: calc(var(--gutter-x) * 2);
  }

  .hero__contents__item {
    gap: var(--gutter-x);
  }

  .hero__contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 var(--gutter-x);
  }

  .hero__contents__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .hero__contents__item__text {
    display: flex;
  }

  .hero__contents__item__button {
    margin: calc(var(--gutter-x) * 0.5) 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 576px) {
    .hero__contents {
      gap: var(--gutter-x);
    }

    .hero__contents__item__button {
      width: auto;
    }
  }
</style>
