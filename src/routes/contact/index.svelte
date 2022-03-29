<script>
  import Title from '$lib/atoms/title'
  import Card from '$lib/atoms/card'
  import Input from '$lib/atoms/input'
  import TextArea from '$lib/atoms/text-area'
</script>

<div class="container">
  <div class="title">
    <Title 
      text="Send me a"
    />
    <div class="space"></div>
    <Title 
      text="message"
      highlight
    />
  </div>
  <div class="subtitle">
    I'll be in touch with you shortly.
  </div>
  <div class="form">
    <Card>
      <Input 
        type="text"
        label="Your name"
        placeholder="Name"
      />
      <Input 
        type="text"
        label="Your email"
        placeholder="example@email.com"
      />
      <TextArea 
        label="Your message"
        placeholder="Hey..."
      />
    </Card>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 24px var(--gutter-x);
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .subtitle {
    margin-top: 24px;
    text-justify: center;
    color: var(--white);
    text-align: center;
    font-size: 15px;
  }

  .space {
    width: var(--gutter-x);
  }

  .form {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 24px;
  }

  @media (min-width: 576px) {
    .container {
      padding: 64px var(--gutter-x);
    }

    .form {
      margin-top: 48px;
    }
  }
</style>
