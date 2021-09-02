import { Meta, Story } from '@storybook/react'
import Game from '.'

export default {
  title: 'Game',
  component: Game,
  args: {}
} as Meta

export const Basic: Story = (args) => <Game {...args} />
