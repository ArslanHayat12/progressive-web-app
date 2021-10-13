import React from 'react'
import { POINTS } from '../../constants'
import { Participant } from '../../types'
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

type PointsCardProps = {
    rank: number
    participant: Participant
}

export const PointsCard: React.FC<PointsCardProps> = ({ rank, participant }) => {
    const { name, avatar, points } = participant

    return (
        <CardWrapper>
            <ImageWrapper imageUrl={avatar}>
                <RankStyle>{rank < 10 ? `0${rank}` : rank}</RankStyle>
            </ImageWrapper>

            <DetailsWrapper>
                <NameStyle>{name}</NameStyle>
                <PointsDetailCard>
                    <PointsLabel>{POINTS}</PointsLabel>
                    <PointsStyle>{points}</PointsStyle>
                </PointsDetailCard>
            </DetailsWrapper>
        </CardWrapper>
    )
}
