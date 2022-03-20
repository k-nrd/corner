
<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Logo from './logo.svelte'
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="2. Atoms/Logo"
  component={Logo}
/>

<Template let:args>
  <div style="width: 300px; height: 300px; display: flex; justify-content: center; align-items: center; background-color: var(--darker-gray);">
    <Logo {...args} />
  </div>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Logo"
/>
