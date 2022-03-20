<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Navbar from './navbar.svelte'
</script>

<Meta
  title="3. Sections/Navbar"
  component={Navbar}
/>

<Template let:args>
  <div style="width: 100%; height: 100vh; background-color: var(--darker-gray);">
    <Navbar {...args} />
  </div>
</Template>

<Story name="Desktop" />
