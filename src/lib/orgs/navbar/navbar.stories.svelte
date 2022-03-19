<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Navbar from './navbar.svelte'
</script>

<Meta
  title="Example/Navbar"
  component={Navbar}
  argTypes={{
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  }}
/>

<Template let:args>
  <Navbar
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
