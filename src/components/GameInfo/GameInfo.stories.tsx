import { Meta, Story } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'
import mockInfoGame from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: mockInfoGame,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: '0 auto' }}>
    <GameInfo {...args} />
  </div>
)
