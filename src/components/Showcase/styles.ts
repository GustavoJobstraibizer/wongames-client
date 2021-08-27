import { Container } from 'components/Container'
import * as GameCardSliderStyles from 'components/GameCardSlider/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as HightlightStyles from 'components/Highlight/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper},
    ${HightlightStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HightlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
