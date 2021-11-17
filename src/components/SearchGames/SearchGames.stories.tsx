import { Meta, Story } from '@storybook/react'
import SearchGames from '.'

export default {
  title: 'SearchGames',
  component: SearchGames,
  args: {},
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story = (args) => (
  <div style={{ maxWidth: '50rem', margin: '0 auto', padding: '2rem' }}>
    <SearchGames {...args} />
  </div>
)
