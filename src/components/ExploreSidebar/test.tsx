import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'
import { render, screen } from 'utils/test-utils'
import ExploreSidebar from '.'
import itemsMock from './mock'
import { Overlay } from './styles'

describe('ExploreSidebar', () => {
  it('should render headings', () => {
    render(<ExploreSidebar items={itemsMock} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    render(<ExploreSidebar items={itemsMock} onFilter={jest.fn} />)
    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  })

  it('should render filter button', () => {
    render(<ExploreSidebar items={itemsMock} onFilter={jest.fn} />)
    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values when passed', () => {
    render(
      <ExploreSidebar
        items={itemsMock}
        onFilter={jest.fn}
        initialValues={{
          platforms: ['windows', 'linux'],
          sort_by: 'low-to-high'
        }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', () => {
    const onFilter = jest.fn()

    render(
      <ExploreSidebar
        items={itemsMock}
        initialValues={{
          platforms: ['windows', 'linux'],
          sort_by: 'low-to-high'
        }}
        onFilter={onFilter}
      />
    )

    expect(onFilter).toHaveBeenCalledWith({
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high'
    })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={itemsMock} onFilter={onFilter} />)

    userEvent.click(screen.getByRole('checkbox', { name: /windows/i }))
    userEvent.click(screen.getByRole('checkbox', { name: /linux/i }))
    userEvent.click(screen.getByRole('radio', { name: /low to high/i }))

    expect(onFilter).toHaveBeenCalledTimes(4)

    expect(onFilter).toHaveBeenCalledWith({
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high'
    })
  })

  it('should alternate between radio options onFilter', () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={itemsMock} onFilter={onFilter} />)

    userEvent.click(screen.getByRole('radio', { name: /hight to low/i }))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toHaveBeenCalledWith({
      sort_by: 'high-to-low'
    })
    userEvent.click(screen.getByRole('radio', { name: /low to high/i }))

    expect(onFilter).toHaveBeenCalledWith({
      sort_by: 'low-to-high'
    })
  })

  it('should open/close sidebar when filtering on mobile', () => {
    const { container } = render(
      <ExploreSidebar items={itemsMock} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width: 768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/close filters/i))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
