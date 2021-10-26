import React from 'react'
import { StyledText } from './Style'

type TextProps = {
    text: string
    fontSize?: number
    color?: string
    weight?: string
}

export const Text: React.FC<TextProps> = ({ text, fontSize, color, weight = 'regular' }) => {
    return (
        <StyledText fontSize={fontSize} color={color} weight={weight}>
            {text}
        </StyledText>
    )
}
