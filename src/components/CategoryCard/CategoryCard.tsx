import React from 'react'
import { CategoryCardWrapper } from './Style'

type CategoryCardProps = {
    icon?: React.ReactNode
    handleClick?: React.MouseEventHandler
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ icon, handleClick }) => {
    return <CategoryCardWrapper onClick={handleClick}>{icon}</CategoryCardWrapper>
}
