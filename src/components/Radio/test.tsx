import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'
import Radio from '.'

describe('Radio', () => {
  it('should render with label white', () => {
    const { container } = render(
      <Radio label="Radio" labelFor="check" value="first" />
    )

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with label black', () => {
    render(
      <Radio label="Radio" labelFor="check" value="first" labelColor="black" />
    )

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

  it('should render without label', () => {
    render(<Radio value="first" />)

    const label = screen.queryByRole('label')
    expect(label).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label changes', async () => {
    const onCheck = jest.fn()

    render(
      <Radio
        label="check label"
        labelFor="check"
        value="first"
        onCheck={onCheck}
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('radio'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith('first')
  })

  it('should be acessible with tab', async () => {
    render(<Radio label="check label" labelFor="check" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    await waitFor(() => {
      expect(screen.getByRole('radio')).toHaveFocus()
    })
  })
})
