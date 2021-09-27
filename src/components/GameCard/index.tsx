import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import CartButton from 'components/CartButton'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
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
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
  onFavorite?: () => void
}

const GameCard = ({
  id,
  slug,
  img,
  title,
  developer,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary',
  onFavorite
}: GameCardProps) => {
  return (
    <S.Wrapper>
      <Link href={`game/${slug}`} passHref>
        <S.ImageBox>
          <img src={img} alt={title} />
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

        <S.FavButton
          role="button"
          data-testid="favorite-button"
          onClick={onFavorite}
        >
          {favorite && <Favorite aria-label="Remover  da lista de desejos" />}
          {!favorite && (
            <FavoriteBorder aria-label="Adicionar a lista de desejos" />
          )}
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
