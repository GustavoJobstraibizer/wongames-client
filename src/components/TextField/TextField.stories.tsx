import { Meta, Story } from '@storybook/react'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'Name',
    labelFor: 'name',
    id: 'name',
    placeholder: 'Enter your name...'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Basic: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: '30rem', padding: '20px' }}>
    <TextField {...args} />
  </div>
)

export const withIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: '30rem', padding: '20px' }}>
    <TextField {...args} />
  </div>
)

withIcon.args = {
  icon: <EmailOutline />
}

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: '30rem', padding: '20px' }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  error: 'Something went wrong...',
  icon: <EmailOutline />
}
