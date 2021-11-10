import CartButton from 'components/CartButton'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import WishlistButton from 'components/WishlistButton'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from 'utils/formatPrice'
import * as S from './styles'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const GameCard = ({
  id,
  slug,
  img,
  title,
  developer,
  price,
  promotionalPrice,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary'
}: GameCardProps) => {
  return (
    <S.Wrapper data-cy="game-card">
      <Link href={`game/${slug}`} passHref>
        <S.ImageBox>
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
        </S.ImageBox>
      </Link>

      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <S.Content>
        <Link href={`game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>

        <S.FavButton>
          <WishlistButton id={id} />
        </S.FavButton>

        <S.BuyBox>
          {!!promotionalPrice && (
            <S.Price isPromotional data-testid="promotional-price">
              {formatPrice(price)}
            </S.Price>
          )}
          <S.Price data-testid="price">
            {formatPrice(promotionalPrice || price)}
          </S.Price>

          <CartButton id={id} />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
