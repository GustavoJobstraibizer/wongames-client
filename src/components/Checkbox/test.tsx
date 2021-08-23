import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/test-utils'
import Checkbox from '.'

describe('Checkbox', () => {
  it('should render Checkbox component', () => {
    renderWithTheme(<Checkbox label="action" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/action/i)).toBeInTheDocument()
    expect(screen.getByText(/action/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByRole('label')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="check label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/check label/i)).toHaveStyle({ color: '#030517' })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="check label" labelFor="check" onCheck={onCheck} />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should uncheck when dispatch onCheck and isChecked is passed', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox
        label="check label"
        labelFor="check"
        onCheck={onCheck}
        isChecked
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be acessible with tab', async () => {
    renderWithTheme(<Checkbox label="check label" labelFor="check" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    await waitFor(() => {
      expect(screen.getByRole('checkbox')).toHaveFocus()
    })
  })
})
