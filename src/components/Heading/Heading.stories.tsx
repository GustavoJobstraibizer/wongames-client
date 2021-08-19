import { Meta, Story } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {}
} as Meta

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />

Basic.args = { children: 'Most Populars' }
