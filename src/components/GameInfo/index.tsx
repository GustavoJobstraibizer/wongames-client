import { FavoriteBorder } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import CartButton from 'components/CartButton'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import { formatPrice } from 'utils/formatPrice'
import * as S from './styles'

export type GameInfoProps = {
  id: string
  title?: string
  description?: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <CartButton id={id} size="large" hasText />

        <Button size="large" icon={<FavoriteBorder />} minimal>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
