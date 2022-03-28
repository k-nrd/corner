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
    <Title 
      text="."
    />
  </div>
  <div class="subtitle">
    I'll be in touch with you shortly.
  </div>
  <Card --card-width="450px">
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

<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 64px 0;
  }

  .title {
    display: flex;
  }

  .subtitle {
    margin-top: var(--gutter-x);
    color: var(--white);
  }

  .space {
    width: var(--gutter-x);
  }
</style>
