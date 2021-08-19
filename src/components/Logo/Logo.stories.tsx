import { Meta, Story } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {}
} as Meta

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />
