import { Meta, Story } from '@storybook/react'
import SkeletonLoader, { SkeletonLoaderProps } from '.'

export default {
  title: 'SkeletonLoader',
  component: SkeletonLoader,
  args: {
    quantity: 5
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<SkeletonLoaderProps> = (args) => (
  <div style={{ padding: '20px' }}>
    <SkeletonLoader {...args} />
  </div>
)
