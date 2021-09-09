import styled, { css } from 'styled-components'
import { RadioProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

type LabelColor = Pick<RadioProps, 'labelColor'>

export const Label = styled.label<LabelColor>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor!]};
    line-height: 1.8rem;
  `}
`
export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    background: transparent;
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      position: absolute;
      background: ${theme.colors.primary};
      opacity: 0;
      transition: opacity ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`
