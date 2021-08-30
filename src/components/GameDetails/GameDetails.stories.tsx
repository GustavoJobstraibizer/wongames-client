import { Meta, Story } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'
import gameMock from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: gameMock,
  argTypes: {
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative', 'Action']
      }
    },
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'mac', 'linux']
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
