import styled from 'styled-components'
import { AvatarSize } from '../../types'

type StyledAvatarProps = { size: AvatarSize }
type StyledImageProps = { width: 'fixed' | 'auto'; customWidth?: string; customHeight?: string }

export const StyledImage = styled.img<StyledImageProps>`
    width: ${(props) => (props.customWidth ? props.customWidth : props.width === 'fixed' ? '100px' : 'auto')};
    ${(props) => props.customHeight && `height: ${props.customHeight};`}
`

export const StyledAvatar = styled.img<StyledAvatarProps>`
    ${({ size }) =>
        size === 'small'
            ? `
        width: 31px;
        height: 31px;
      `
            : size === 'medium'
            ? `
        width: 66px;
        height: 66px;
      `
            : `
        width: 100px;
        height: 100px;
      `}
    border-radius: 50%;
`

export const StyledLogo = styled.img`
    width: 31px;
    height: 31px;
`
