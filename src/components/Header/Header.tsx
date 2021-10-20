import React from 'react'
import { BackIcon } from '../../assets'
import Button from '../Button'
import { HeaderText, HeaderWrapper } from './Style'

type HeaderProps = {
    heading: string
    onBackClick?: React.MouseEventHandler
}

export const Header: React.FC<HeaderProps> = ({ heading, onBackClick }) => {
    return (
        <HeaderWrapper>
            <Button icon={<BackIcon />} noBackground={true} handleClick={onBackClick} />

            <HeaderText>{heading}</HeaderText>
        </HeaderWrapper>
    )
}
