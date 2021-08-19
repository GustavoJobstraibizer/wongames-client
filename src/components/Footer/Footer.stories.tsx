import { Meta, Story } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {}
} as Meta

export const Basic: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
)
