import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import PaymentForm from 'components/PaymentForm'
import Showcase from 'components/Showcase'
import { Session } from 'next-auth'
import Base from 'templates/Base'
import * as S from './styles'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle?: string
  session: Session
} & CartListProps

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY)

const Cart = ({
  session,
  recommendedGames,
  recommendedHighlight,
  recommendedTitle
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />

          <Elements stripe={stripe}>
            <PaymentForm session={session} />
          </Elements>
        </S.Content>

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle || 'You may like these games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
        color="white"
      />
    </Base>
  )
}

export default Cart
