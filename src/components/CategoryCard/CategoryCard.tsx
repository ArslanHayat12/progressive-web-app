import React from 'react'
import { CategoryCardType } from '../../types'
import { CardWithImage } from '../CardWithImage/CardWithImage'
import { CategoryCardWrapper, IconWrapper } from './Style'

type CategoryCardProps = {
    type: CategoryCardType
    text: string
    icon?: React.ReactNode
    image?: string
    handleClick?: React.MouseEventHandler
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ type, text, icon, image, handleClick }) => {
    return (
        <React.Fragment>
            {type === 'text' || type === 'text-with-icon' ? (
                <CategoryCardWrapper onClick={handleClick}>
                    {type === 'text-with-icon' && icon ? <IconWrapper>{icon}</IconWrapper> : null}
                    {text}
                </CategoryCardWrapper>
            ) : (
                <CardWithImage text={text} type="category-card" image={image} handleClick={handleClick} />
            )}
        </React.Fragment>
    )
}
