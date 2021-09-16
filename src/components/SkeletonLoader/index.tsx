import { Grid } from 'components/Grid'
import * as S from './styles'

export type SkeletonLoaderProps = {
  quantity?: number
}

const SkeletonLoader = ({ quantity = 1 }: SkeletonLoaderProps) => {
  return (
    <Grid data-testid="skeleton-loader">
      {Array.from({ length: quantity }).map((_, index) => (
        <S.Content key={index} />
      ))}
    </Grid>
  )
}

export default SkeletonLoader
