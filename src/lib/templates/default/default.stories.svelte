<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Default from './default.svelte'
</script>

<Meta
  title="4. Templates/Default"
  component={Default}
/>

<Template let:args>
  <div style="height: 100vh;">
    <Default
      {...args}
    />
  </div>
</Template>

<Story name="Main"/>
