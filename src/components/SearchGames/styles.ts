import * as GameCardStyles from 'components/GameCard/styles'
import * as TextFieldStyles from 'components/TextField/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main<SearchContentProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    max-width: 50rem;
    width: 100%;

    ${TextFieldStyles.Wrapper} {
      z-index: ${theme.layers.overlay};
      position: relative;
    }

    ${isOpen &&
    css`
      ${Overlay} {
        background-color: rgba(0, 0, 0, 0.5);
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        height: 100vh;
        opacity: 1;
      }
    `}
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    svg {
      color: ${theme.colors.primary};
      animation: spin 1s linear infinite;
      transition: ;
    }
  `}
`

type SearchContentProps = {
  isOpen: boolean
}

export const SearchContent = styled.div<SearchContentProps>`
  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    margin-top: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall};
    min-height: 10rem;
    top: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: ${theme.layers.alwaysOnTop};
    transition: transform ${theme.transition.default},
      opacity ${theme.transition.default};

    position: absolute;

    transform: translateY(-2rem);
    opacity: 0;

    ${isOpen &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}

    &:before {
      content: '';
      position: absolute;
      border-right: ${theme.spacings.xsmall} solid transparent;
      border-left: ${theme.spacings.xsmall} solid transparent;
      border-bottom: ${theme.spacings.xsmall} solid ${theme.colors.white};
      top: -${theme.spacings.xsmall};
      left: ${theme.spacings.small};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    width: 100%;

    ${GameCardStyles.Wrapper} {
      flex-direction: row;
    }

    ${GameCardStyles.ImageBox}, ${GameCardStyles.Content} {
      flex: 1;
    }
  `}
`

export const Message = styled.span``

export const Overlay = styled.div`
  ${({ theme }) => css`
    transition: opacity ${theme.transition.default};
    opacity: 0;
    position: absolute;
  `}
`
