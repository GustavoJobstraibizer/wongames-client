import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import Ribbon from '.'

describe('Ribbon', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>best selling</Ribbon>)

    expect(screen.getByText(/best selling/i)).toBeInTheDocument()
  })

  it('should render with primary color when color not passed', () => {
    renderWithTheme(<Ribbon>best selling</Ribbon>)

    expect(screen.getByText(/best selling/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">best selling</Ribbon>)

    expect(screen.getByText(/best selling/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with normal size as default', () => {
    renderWithTheme(<Ribbon>best selling</Ribbon>)

    expect(screen.getByText(/best selling/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with small size', () => {
    renderWithTheme(<Ribbon size="small">best selling</Ribbon>)

    expect(screen.getByText(/best selling/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
