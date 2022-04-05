import React from 'react'
import { AvatarSize, ImageType } from '../../types'
import { StyledAvatar, StyledImage, StyledLogo } from './Style'

type ImageProps = {
    srcUrl: string
    type: ImageType
    size?: AvatarSize
    width?: 'fixed' | 'auto'
    customWidth?: string
    customHeight?: string
    altText?: string
}

export const Image: React.FC<ImageProps> = ({
    srcUrl,
    type,
    size = 'small',
    width = 'fixed',
    customWidth,
    customHeight,
    altText
}) => {
    return (
        <>
            {type === 'avatar' ? (
                <StyledAvatar src={srcUrl} size={size} />
            ) : type === 'logo' ? (
                <StyledLogo src={srcUrl} />
            ) : (
                <StyledImage src={srcUrl} width={width} customWidth={customWidth} customHeight={customHeight} alt={altText} />
            )}
        </>
    )
}
