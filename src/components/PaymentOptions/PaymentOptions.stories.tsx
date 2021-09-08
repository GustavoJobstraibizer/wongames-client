import { Meta, Story } from '@storybook/react'
import PaymentOptions, { PaymentOptionsProps } from '.'
import cardsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  argTypes: {
    cards: {
      type: ''
    },
    handlePayment: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<PaymentOptionsProps> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)
