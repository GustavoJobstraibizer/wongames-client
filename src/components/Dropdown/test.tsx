import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'
import Dropdown from '.'

describe('Dropdown', () => {
  beforeEach(() => {
    render(<Dropdown title="Click here">Content</Dropdown>)
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

  it('should handle open/close dropdown when clicking on overlay', () => {
    const content = screen.getByText(/content/i)
    const overlay = content?.nextElementSibling
    const cartButton = screen.getByText(/click here/i)

    userEvent.click(cartButton)

    expect(overlay).toHaveStyle({ opacity: 1 })
    expect(overlay).toHaveAttribute('aria-hidden', 'false')

    userEvent.click(overlay!)

    expect(overlay).toHaveStyle({ opacity: 0 })
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
  })

  it('should handle open/close dropdown when keyup escape', () => {
    const content = screen.getByText(/content/i)
    const overlay = content?.nextElementSibling
    const cartButton = screen.getByText(/click here/i)

    userEvent.click(cartButton)

    expect(overlay).toHaveStyle({ opacity: 1 })
    expect(overlay).toHaveAttribute('aria-hidden', 'false')

    fireEvent.keyUp(document, { key: 'Escape' })

    expect(overlay).toHaveStyle({ opacity: 0 })
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
  })
})
