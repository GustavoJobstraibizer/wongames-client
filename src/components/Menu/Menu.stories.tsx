import { Meta, Story } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  args: {}
} as Meta

export const Basic: Story<MenuProps> = (args) => <Menu {...args} />

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
