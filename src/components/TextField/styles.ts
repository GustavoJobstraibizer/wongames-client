import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>
type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
  `}
`
export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    background: transparent;
    font-family: ${theme.font.family}
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    width: 100%;
    border: 0;
    outline: none;
    color: ${theme.colors.black};
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    width: 2.2rem;
    display: flex;
    color: ${theme.colors.gray};

    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`

const wrapperModifier = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Icon},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }

    ${Label}, ${Icon} {
      color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    display: flex;
    flex-direction: column;

    ${disabled && wrapperModifier.disabled(theme)};
    ${error && wrapperModifier.error(theme)};
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: 1.2rem;
  `}
`
