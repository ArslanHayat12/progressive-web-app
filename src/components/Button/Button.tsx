import React from 'react'
import { ButtonType } from '../../types'
import { StyledButton } from './Style'

type ButtonProps = {
    text?: string
    icon?: React.ReactNode
    noBackground?: boolean
    handleClick?: React.MouseEventHandler
    type?: ButtonType
}

export const Button: React.FC<ButtonProps> = ({ text, icon, noBackground = false, type, handleClick }) => {
    return (
        <StyledButton onClick={handleClick} noBackground={noBackground} buttonType={type}>
            {icon && icon}
            {text && text}
        </StyledButton>
    )
}
