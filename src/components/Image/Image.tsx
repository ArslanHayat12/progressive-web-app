import React from 'react'
import { AvatarSize, ImageType } from '../../types'
import { StyledAvatar, StyledImage, StyledLogo } from './Style'

type ImageProps = {
    srcUrl: string
    type: ImageType
    size?: AvatarSize
    width?: 'fixed' | 'auto'
}

export const Image: React.FC<ImageProps> = ({ srcUrl, type, size = 'small', width = 'fixed' }) => {
    return (
        <>
            {type === 'avatar' ? (
                <StyledAvatar src={srcUrl} size={size} />
            ) : type === 'logo' ? (
                <StyledLogo src={srcUrl} />
            ) : (
                <StyledImage src={srcUrl} width={width} />
            )}
        </>
    )
}
