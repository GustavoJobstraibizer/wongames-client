import { Meta, Story } from '@storybook/react'
import MediaMatch, { MediaMatchProps } from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  args: {}
} as Meta

export const Desktop: Story<MediaMatchProps> = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
)
export const Mobile: Story<MediaMatchProps> = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
)

Mobile.parameters = { viewport: { defaultViewport: 'mobile1' } }
