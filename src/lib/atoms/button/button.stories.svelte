<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Button from './button.svelte'
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="2. Atoms/Button"
  component={Button}
  argTypes={{
    text: { control: 'text' },
    onClick: { action: 'onClick' },
    secondary: { control: 'boolean' },
    icon: {
      control: { type: 'select' },
      options: [
        'download',
        'arrow-right',
      ],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    background: {
      control: { type: 'select' },
      options: [
        'white',
        'darker-gray',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template id="Primary" let:args>
  <div style="width: 150px">
    <Button {...args} />
  </div>
</Template>

<Template id="Secondary" let:args>
  <div style="width: 300px; height: 300px; display: flex; justify-content: center; align-items: center; background-color: var(--darker-gray);">
    <div style="width: 150px">
      <Button {...args} />
    </div>
  </div>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Primary"
  template="Primary"
  args={{
    text: 'Button',
  }}
/>

<Story
  name="Secondary"
  template="Secondary"
  args={{
    text: 'Button',
    secondary: true,
  }}
/>
