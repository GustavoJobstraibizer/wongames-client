import { Email } from '@styled-icons/material-outlined'
import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'
import TextField from '.'

describe('TextField', () => {
  it('should render with label', () => {
    render(<TextField label="Name" name="name" />)

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText(/name/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<TextField placeholder="Enter your name here" />)

    expect(
      screen.getByPlaceholderText(/Enter your name here/i)
    ).toBeInTheDocument()
  })

  it('should render with initial value', () => {
    render(<TextField initialValue="Hello" />)

    expect(screen.getByRole('textbox')).toHaveValue('Hello')
  })

  it('should change the value when user typing', async () => {
    const onInputChange = jest.fn()
    const valueTyping = 'Jhon doe'

    render(<TextField label="Name" name="name" onInputChange={onInputChange} />)

    const textBox = screen.getByRole('textbox')

    expect(textBox).toBeInTheDocument()

    userEvent.type(textBox, valueTyping)

    await waitFor(() => {
      expect(textBox).toHaveValue(valueTyping)
      expect(onInputChange).toHaveBeenCalledTimes(valueTyping.length)
    })

    expect(onInputChange).toHaveBeenCalledWith(valueTyping)
  })

  it('should accessible by tab', () => {
    render(<TextField label="Name" name="name" />)

    const textBox = screen.getByLabelText('Name')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(textBox).toHaveFocus()
    expect(textBox.parentElement).toHaveStyleRule(
      'box-shadow',
      `0 0 0.5rem ${theme.colors.primary}`,
      { modifier: ':focus-within' }
    )
  })

  it('should render with icon', () => {
    render(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      order: 0
    })
  })

  it('should render with icon to the right', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      order: 1
    })
  })

  it('should render with disabled input and not allowing to typing', async () => {
    const onInputChange = jest.fn()

    render(<TextField disabled />)

    const text = 'test'
    const textBox = screen.getByRole('textbox')

    expect(textBox).toBeDisabled()
    expect(textBox).toHaveStyle({ cursor: 'not-allowed' })

    userEvent.type(textBox, text)

    await waitFor(() => {
      expect(textBox).not.toHaveValue(text)
    })

    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('should not accessible by tab when disabled', () => {
    render(<TextField disabled />)

    const textBox = screen.getByRole('textbox')

    expect(textBox).toBeDisabled()

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(textBox).not.toHaveFocus()
  })

  it('should render with error message', () => {
    const { container } = render(
      <TextField error="Something went wrong" label="E-mail" name="email" />
    )

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox').parentElement).toHaveStyle({
      'border-color': '#FF6347'
    })
    expect(screen.getByText(/e-mail/i)).toHaveStyle({
      color: '#FF6347'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
