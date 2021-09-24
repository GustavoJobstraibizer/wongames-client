import { render, screen } from 'utils/test-utils'
import GameItem, { GameItemProps, PaymentInfoProps } from '.'

const props: GameItemProps = {
  img: 'https://via.placeholder.com/180',
  title: 'Red Dead Redemption 2',
  price: 'R$ 250,00'
}

describe('GameItem', () => {
  it('should render GameItem component', () => {
    render(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: /red dead redemption 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://my-game.com'

    render(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo: PaymentInfoProps = {
      flag: 'mastercard',
      number: '**** **** **** 4562',
      img: '/img/master-card.png',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:30'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
