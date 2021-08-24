import { Meta, Story } from '@storybook/react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Basic: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        value="action"
        label="Action"
        labelFor="action"
        id="action"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        value="adventure"
        label="Adventure"
        labelFor="adventure"
        id="adventure"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        value="strategy"
        label="Strategy"
        labelFor="strategy"
        id="strategy"
        {...args}
      />
    </div>
  </>
)
