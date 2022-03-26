<script>
  import Title from '$lib/atoms/title'
  import Button from '$lib/atoms/button'
</script>

<div class="hero">
  <div class="hero__contents">
    <div class="hero__contents__item">
      <Title text="I’m" />
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 24px;
    gap: 8px;
  }

  .hero__contents__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .hero__contents__item__text {
    display: flex;
  }

  .hero__contents__item__button {
    margin: 16px 8px 0 8px;
  }
</style>
