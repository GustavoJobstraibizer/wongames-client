import { Meta, Story } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {},
  argTypes: {
    children: { type: 'string' },
    icon: {
      type: ''
    }
  }
} as Meta

export const Basic: Story = (args) => <Button {...args} />

Basic.args = {
  children: 'Default'
}

export const WithIcon: Story = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const asLink: Story = (args) => (
  <Button
    as="a"
    size="large"
    target="_blank"
    href="https://reactavancado.com.br"
    {...args}
  >
    React Avançado
  </Button>
)
