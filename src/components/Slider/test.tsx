import 'match-media-mock'
import { render, screen } from 'utils/test-utils'
import Slider from '.'

describe('Slider', () => {
  it('should render children as Slider item', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 2, infinite: false }}>
        <span>Item 1</span>
        <span>Item 2</span>
      </Slider>
    )

    const itemOne = screen.getByText(/item 1/i)
    const itemTwo = screen.getByText(/item 2/i)

    expect(itemOne).toBeInTheDocument()
    expect(itemOne.parentElement?.parentElement).toHaveClass('slick-slide')

    expect(itemTwo).toBeInTheDocument()
    expect(itemTwo.parentElement?.parentElement).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})
