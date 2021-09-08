import * as GameItemStyles from 'components/GameItem/styles'
import styled from 'styled-components'

export const Wrapper = styled.main`
  ${GameItemStyles.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
