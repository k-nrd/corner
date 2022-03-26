<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Footer from './footer.svelte'
</script>

<Meta
  title="3. Sections/Navbar"
  component={Footer}
  argTypes={{
    onToggle: { action: 'onToggle' },
  }}
/>

<Template let:args>
  <div style="width: 100%; height: 100vh; background-color: var(--darker-gray);">
    <Footer {...args} />
  </div>
</Template>

<Story name="Main" />
