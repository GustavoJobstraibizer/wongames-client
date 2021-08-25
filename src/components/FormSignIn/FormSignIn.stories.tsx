import { Meta, Story } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  args: {}
} as Meta

export const Basic: Story = (args) => (
  <div style={{ width: 300, margin: '0 auto' }}>
    <FormSignIn {...args} />
  </div>
)
