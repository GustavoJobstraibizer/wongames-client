import { screen } from '@testing-library/react'
import 'session.mock'
import { render } from 'utils/test-utils'
import GameCard from '.'

const props = {
  id: '1',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://via.placeholder.com/300x140',
  price: 230,
  slug: 'population-zero'
}

describe('GameCard', () => {
  it('should render GameCard component', () => {
    render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /population zero/i })
    ).toHaveAttribute('src', props.img)

    const price = screen.getByTestId('price')

    expect(price.innerHTML).toEqual('$230.00')

    expect(screen.getByLabelText(/add to cart/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
  })

  it('should render price in label', () => {
    render(<GameCard {...props} />)

    expect(screen.getByTestId('price')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByTestId('price')).toHaveStyle({
      'background-color': '#3CD3C1'
    })

    expect(screen.getByTestId('price').innerHTML).toEqual('$230.00')
  })

  it('should render promotional price', () => {
    const promoPrice = 200.99

    render(<GameCard {...props} promotionalPrice={promoPrice} />)

    const promotionalPrice = screen.getByText('$200.99')
    const price = screen.getByText('$230.00')

    expect(promotionalPrice).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(promotionalPrice?.innerHTML).toEqual('$200.99')

    expect(price).toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(promotionalPrice).toHaveStyle({
      'background-color': '#3CD3C1'
    })

    expect(price?.innerHTML).toEqual('$230.00')
  })

  it('should render with a Ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="20% off"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
