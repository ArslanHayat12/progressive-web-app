import React, { useMemo } from 'react'
import { StyledTab } from './Style'

type TabProps = {
    text: string
    active: boolean
    handleClick: React.MouseEventHandler
}

export const Tab: React.FC<TabProps> = ({ active, text, handleClick }) => {
    return (
        <StyledTab active={active} onClick={handleClick}>
            {text}
        </StyledTab>
    )
}
