import React from 'react'
import { FontWeight } from '../../types'
import { StyledText } from './Style'

type TextProps = {
    text: string
    fontSize?: number
    color?: string
    weight?: FontWeight
}

export const Text: React.FC<TextProps> = ({ text, fontSize, color, weight = 'regular' }) => {
    return (
        <StyledText fontSize={fontSize} color={color} weight={weight}>
            {text}
        </StyledText>
    )
}
