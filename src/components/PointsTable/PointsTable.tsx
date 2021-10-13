import React, { useMemo } from 'react'
import { Participant } from '../../types'
import Image from '../Image'
import {
    PointsTableWrapper,
    StyledAvatarColumn,
    StyledNameColumn,
    StyledRankColumn,
    StyledScoreColumn,
    StyledScoreColumnHeader,
    StyledTableHeader,
    StyledTableRow
} from './Style'

type PointsTableProps = {
    participants: Participant[]
    start?: number
}

export const PointsTable: React.FC<PointsTableProps> = ({ participants, start = 0 }) => {
    const ParticipantsTableHeader = useMemo(() => {
        return (
            <StyledTableHeader>
                <div>Rank</div>
                <div>Name</div>
                <StyledScoreColumnHeader>Score</StyledScoreColumnHeader>
            </StyledTableHeader>
        )
    }, [])

    const ParticipantsTable = useMemo(() => {
        return participants.map((participant: Participant, index: number) => {
            const { name, avatar, points } = participant
            const rank = index + start + 1
            return (
                <StyledTableRow key={index}>
                    <StyledRankColumn>{rank < 10 ? `0${rank}` : rank}</StyledRankColumn>
                    <StyledAvatarColumn>
                        <Image srcUrl={avatar} type="avatar" />
                    </StyledAvatarColumn>
                    <StyledNameColumn>{name}</StyledNameColumn>
                    <StyledScoreColumn>{points}</StyledScoreColumn>
                </StyledTableRow>
            )
        })
    }, [participants, start])

    return (
        <PointsTableWrapper>
            {ParticipantsTableHeader}
            {ParticipantsTable}
        </PointsTableWrapper>
    )
}
