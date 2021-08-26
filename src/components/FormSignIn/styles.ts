import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    text-align: right;
    color: ${theme.colors.black};
    text-decoration: none;
    font-size: ${theme.font.sizes.small};

    &:hover {
      color: ${lighten(0.3, theme.colors.black)};
    }
  `}
`
