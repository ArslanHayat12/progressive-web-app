import React, { useCallback, useMemo } from 'react'
import { LEADERBOARD, TOP10 } from '../../constants'
import Header from '../../components/Header'
import { LeaderboardWrapper, Top10Heading, Top3Wrapper } from './Style'
import PointsCard from '../../components/PointsCard'
import { participants } from './leaderboardData'
import { Participant } from '../../types'
import PointsTable from '../../components/PointsTable'
import PointsCardIndividual from '../../components/PointsCardIndividual'
import { useHistory } from 'react-router-dom'

type LeaderboardProps = {
    type: 'individual' | 'common'
}

export const Leaderboard = (props: LeaderboardProps) => {
    const { type } = props
    const history = useHistory()

    const top3 = participants.slice(0, 3)

    const Top3Participants = useMemo(() => {
        return top3.map((participant: Participant, index: number) => (
            <PointsCard participant={participant} rank={index + 1} key={participant.id} />
        ))
    }, [top3])

    const handleBackButtonClick = useCallback(() => {
        history.goBack()
    }, [history])

    return (
        <LeaderboardWrapper>
            <Header heading={LEADERBOARD} onBackClick={handleBackButtonClick} />

            {type === 'common' ? (
                <Top3Wrapper>{Top3Participants}</Top3Wrapper>
            ) : (
                <React.Fragment>
                    <PointsCardIndividual participant={participants[0]} />

                    <Top10Heading>{TOP10}</Top10Heading>
                </React.Fragment>
            )}

            <PointsTable participants={participants.slice(3)} start={3} />
        </LeaderboardWrapper>
    )
}
