import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
  onFavorite?: () => void
}

const GameCard = ({
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
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

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
              {price}
            </S.Price>
          )}
          <S.Price data-testid="price">{promotionalPrice || price}</S.Price>
          <Button
            data-testid="button-add"
            icon={<AddShoppingCart />}
            size="small"
          />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
