import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/test-utils'
import Dropdown from '.'

describe('Dropdown', () => {
  beforeEach(() => {
    renderWithTheme(<Dropdown title="Click here">Content</Dropdown>)
  })

  it('should render Dropdown component', () => {
    expect(screen.getByText(/click here/i)).toBeInTheDocument()

    expect(screen.queryByText(/content/i)).toHaveAttribute(
      'aria-hidden',
      'true'
    )
  })

  it('should show the Content when click on the Title', () => {
    const title = screen.getByText(/click here/i)
    const content = screen.getByText(/content/i)

    userEvent.click(title)
    expect(content).toHaveStyle({ opacity: 1 })
    expect(content).toHaveAttribute('aria-hidden', 'false')

    userEvent.click(title)

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content).toHaveAttribute('aria-hidden', 'true')
  })
})
