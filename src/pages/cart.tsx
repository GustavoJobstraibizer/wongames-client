import itemsMock from 'components/CartList/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'
import Cart, { CartProps } from 'templates/Cart'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: hightlightMock,
      items: itemsMock,
      total: 'R$ 400,00',
      cards: cardsMock
    }
  }
}
