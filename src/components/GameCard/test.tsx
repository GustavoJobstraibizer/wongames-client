import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-utils'
import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://via.placeholder.com/300x140',
  price: 'R$ 230,00'
}

describe('GameCard', () => {
  it('should render GameCard component', () => {
    renderWithTheme(<GameCard {...props} />)

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

    expect(price.innerHTML).toEqual(props.price)

    expect(screen.getByTestId('button-add')).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByTestId('price')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByTestId('price')).toHaveStyle({
      'background-color': '#3CD3C1'
    })

    expect(screen.getByTestId('price').innerHTML).toEqual(props.price)
  })

  it('should render promotional price', () => {
    const promoPrice = 'R$ 200,99'

    renderWithTheme(<GameCard {...props} promotionalPrice={promoPrice} />)

    const promotionalPrice = screen.getByText(promoPrice)
    const price = screen.getByText(props.price)

    expect(promotionalPrice).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(promotionalPrice?.innerHTML).toEqual(promoPrice)

    expect(price).toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(promotionalPrice).toHaveStyle({
      'background-color': '#3CD3C1'
    })

    expect(price?.innerHTML).toEqual(props.price)
  })

  it('should render a line through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(
      screen.getByLabelText(/remover da lista de desejos/i)
    ).toBeInTheDocument()
  })

  it('should call onFavorite when favorite is clicked', () => {
    const onFavorite = jest.fn()

    renderWithTheme(<GameCard {...props} onFavorite={onFavorite} />)

    const favoriteButton = screen.getByTestId('favorite-button')

    fireEvent.click(favoriteButton)

    expect(onFavorite).toHaveBeenCalledTimes(1)
  })

  it('should render with a Ribbon', () => {
    renderWithTheme(
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
