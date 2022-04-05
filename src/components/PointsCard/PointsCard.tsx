import React from 'react'
import { Participant } from '../../types'
import CardWithImage from '../CardWithImage'

type PointsCardProps = {
    rank: number
    participant: Participant
    onClick?: (slug: string) => void
}

export const PointsCard: React.FC<PointsCardProps> = ({ rank, participant, onClick }) => {
    const { id, name, avatar, points, slug } = participant

    return (
        <CardWithImage
            type="points-card"
            name={name}
            rank={rank}
            image={avatar}
            points={points}
            handleClick={() => onClick(slug)}
        />
    )
}
