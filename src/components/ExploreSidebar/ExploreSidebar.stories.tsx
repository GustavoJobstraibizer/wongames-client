import { Meta, Story } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from '.'
import itemsMock from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: itemsMock,
    onFilter: () => console.log('filter')
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    items: {
      type: ''
    },
    initialValues: {
      type: ''
    }
  }
} as Meta

export const Basic: Story<ExploreSidebarProps> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <ExploreSidebar {...args} />
  </div>
)

WithInitialValues.args = {
  initialValues: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
}
