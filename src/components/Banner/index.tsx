import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Image from 'next/image'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary'
}: BannerProps) => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </S.ImageWrapper>

      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />

        <Button as="a" href={buttonLink} target="_blank" size="large">
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  )
}

export default Banner
