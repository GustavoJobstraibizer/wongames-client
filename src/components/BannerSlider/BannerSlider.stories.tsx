import { Meta, Story } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'
import banners from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { banners },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
