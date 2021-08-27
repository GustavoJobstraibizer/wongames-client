import { Meta, Story } from '@storybook/react'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import Showcase, { ShowcaseProps } from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  args: {},
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Basic.args = {
  title: 'Free Games',
  highlight: highlightMock,
  games: gamesMock
}

export const withoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

withoutHighlight.args = {
  title: 'Free Games',
  games: gamesMock
}

export const withoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

withoutGames.args = {
  title: 'Free Games',
  highlight: highlightMock
}
