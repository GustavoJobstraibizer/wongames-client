import Button from 'components/Button'
import Image from 'next/image'
import * as S from './styles'

export type AlignmentType = 'left' | 'right'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alignment?: AlignmentType
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => {
  return (
    <S.Wrapper alignment={alignment}>
      <Image src={backgroundImage} alt={title} layout="fill" />
      {!!floatImage && (
        <S.FloatImageWrapper>
          <Image src={floatImage} alt={title} width={400} height={300} />
        </S.FloatImageWrapper>
      )}

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>

        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default Highlight
