import { Meta, Story } from '@storybook/react'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {}
} as Meta

export const Basic: Story<EmptyProps> = (args) => <Empty {...args} />

Basic.args = {
  title: 'A simple title',
  description: 'A simple description',
  hasLink: true
}
