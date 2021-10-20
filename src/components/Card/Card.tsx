import React, { MutableRefObject, ReactNode } from 'react'
import { CardWrapper, ContentWrapper } from './Style'

interface CardProps {
    index: number
    content: ReactNode
    reference: MutableRefObject<(HTMLDivElement | null)[]>
    onCardClick: (index: number) => void
    cardbackground?: string
    cardtextcolor?: string
}

const Card: React.FC<CardProps> = ({ index, content, cardbackground, cardtextcolor, reference, onCardClick }) => {
    return (
        <CardWrapper
            ref={(element: HTMLDivElement) => (reference.current[index] = element)}
            cardbackground={cardbackground}
            cardtextcolor={cardtextcolor}
            zindex={index + 1}
            onClick={() => onCardClick(index)}
        >
            <ContentWrapper>{content}</ContentWrapper>
        </CardWrapper>
    )
}

export default Card
