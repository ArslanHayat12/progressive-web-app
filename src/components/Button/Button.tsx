import React from 'react'
import { StyledButton } from './Style'

type ButtonProps = {
    text?: string
    icon?: React.ReactNode
    noBackground?: boolean
    handleClick?: React.MouseEventHandler
}

export const Button: React.FC<ButtonProps> = ({ text, icon, noBackground = false, handleClick }) => {
    return (
        <StyledButton onClick={handleClick} noBackground={noBackground}>
            {icon && icon}
            {text && text}
        </StyledButton>
    )
}
