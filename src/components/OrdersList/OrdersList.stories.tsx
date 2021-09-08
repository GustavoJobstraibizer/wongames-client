import { Meta, Story } from '@storybook/react'
import OrdersList, { OrdersListProps } from '.'
import ordersMock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: ordersMock
  }
} as Meta

export const Basic: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 600, margin: '0 auto' }}>
    <OrdersList {...args} />
  </div>
)
