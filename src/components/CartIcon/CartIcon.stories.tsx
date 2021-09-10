import { Meta, Story } from '@storybook/react'
import CartIcon, { CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story = (args) => <CartIcon {...args} />

export const withItems: Story<CartIconProps> = (args) => <CartIcon {...args} />

withItems.args = {
  quantity: 10
}
