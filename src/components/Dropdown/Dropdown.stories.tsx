import { Meta, Story } from '@storybook/react'
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<DropdownProps> = (args) => <Dropdown {...args} />

Basic.args = {
  title: 'Click here',
  children: 'content'
}
