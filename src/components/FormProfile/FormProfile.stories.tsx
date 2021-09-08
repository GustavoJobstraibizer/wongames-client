import { Meta, Story } from '@storybook/react'
import FormProfile from '.'

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
  args: {}
} as Meta

export const Basic: Story = (args) => (
  <div style={{ maxWidth: 860, margin: '0 auto' }}>
    <FormProfile {...args} />
  </div>
)
