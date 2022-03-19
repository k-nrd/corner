<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Default from './default.svelte'
</script>

<Meta
  title="Example/Page"
  component={Default}
  argTypes={{
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  }}
/>

<Template let:args>
  <Default
    {...args}
    on:login={args.onLogin}
    on:logout={args.onLogout}
    on:createAccount={args.onCreateAccount}
  />
</Template>

<Story
  name="LoggedIn"
  args={{
    user: {},
  }}
/>

<Story name="LoggedOut" args={{}} />
