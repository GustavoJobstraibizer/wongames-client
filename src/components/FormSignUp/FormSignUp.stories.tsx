import { Meta, Story } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp,
  args: {}
} as Meta

export const Basic: Story = (args) => (
  <div style={{ width: 300, margin: '0 auto' }}>
    <FormSignUp {...args} />
  </div>
)
