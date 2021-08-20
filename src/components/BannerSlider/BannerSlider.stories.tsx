import { Meta, Story } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x500.jpg',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season.</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x500.jpg',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season.</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x500.jpg',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season.</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
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
