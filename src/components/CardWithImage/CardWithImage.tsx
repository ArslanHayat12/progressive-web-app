import React from 'react'
import { POINTS } from '../../constants'
import { ImageCardType } from '../../types'
import {
    CardWrapper,
    DetailsWrapper,
    ImageWrapper,
    NameStyle,
    PointsDetailCard,
    PointsLabel,
    PointsStyle,
    RankStyle
} from './Style'

type CardWithImageProps = {
    type: ImageCardType
    image: string
    handleClick: React.MouseEventHandler
    rank?: number
    name?: string
    points?: number
    text?: string
}

export const CardWithImage: React.FC<CardWithImageProps> = ({ type, rank, name, image, points, text, handleClick }) => {
    return (
        <CardWrapper onClick={handleClick} type={type}>
            <ImageWrapper imageUrl={image}>
                {type === 'points-card' && <RankStyle>{rank < 10 ? `0${rank}` : rank}</RankStyle>}
            </ImageWrapper>

            <DetailsWrapper type={type}>
                <NameStyle type={type}>{type === 'points-card' ? name : text}</NameStyle>
                {type === 'points-card' && (
                    <PointsDetailCard>
                        <PointsLabel>{POINTS}</PointsLabel>
                        <PointsStyle>{points}</PointsStyle>
                    </PointsDetailCard>
                )}
            </DetailsWrapper>
        </CardWrapper>
    )
}
