import { Meta, Story } from '@storybook/react'
import items from 'components/CartList/mock'
import CartDropdown, { CartDropdownProps } from '.'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items,
    total: 'R$ 300,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: '90%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)

export const empty: Story<CartDropdownProps> = () => (
  <div style={{ maxWidth: '90%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
)
