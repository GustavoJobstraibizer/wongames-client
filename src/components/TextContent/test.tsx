import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import TextContent from '.'

const props = {
  title: 'Description',
  content: `<h1>Body</h1>`
}

describe('TextContent', () => {
  it('should render TextContent component', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /body/i })).toBeInTheDocument()
  })

  it('should render TextContent without title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /body/i })).toBeInTheDocument()
  })

  it('should render The title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    })?.parentElement

    expect(wrapper).toHaveStyle({ color: '#FAFAFA' })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})
