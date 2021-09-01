import { Meta, Story } from '@storybook/react'
import Gallery, { GalleryProps } from '.'
import galleryMock from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: { items: galleryMock },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
