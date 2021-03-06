import React, { useCallback, useMemo } from 'react'
import { TOP10 } from '../../constants'
import { LeaderboardWrapper, Top10Heading, Top3Wrapper } from './Style'
import PointsCard from '../../components/PointsCard'
import { participants } from './leaderboardData'
import { Participant } from '../../types'
import PointsTable from '../../components/PointsTable'
import PointsCardIndividual from '../../components/PointsCardIndividual'
import { useHistory } from 'react-router-dom'
import TabList from '../../components/TabList'

type LeaderboardProps = {
    type: 'individual' | 'common'
}

export const Leaderboard = (props: LeaderboardProps) => {
    const { type } = props
    const history = useHistory()

    const tabsList = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']

    const top3 = participants.slice(0, 3)

    const handleItemClick = useCallback(
        (id: number) => {
            history.push(`/leaderboard/${id}`)
        },
        [history]
    )

    const Top3Participants = useMemo(() => {
        return top3.map((participant: Participant, index: number) => (
            <PointsCard participant={participant} rank={index + 1} key={participant.id} onClick={handleItemClick} />
        ))
    }, [top3, handleItemClick])

    return (
        <LeaderboardWrapper>
            <TabList tabs={tabsList} />

            {type === 'common' ? (
                <Top3Wrapper>{Top3Participants}</Top3Wrapper>
            ) : (
                <React.Fragment>
                    <PointsCardIndividual participant={participants[0]} onClick={handleItemClick} />

                    <Top10Heading>{TOP10}</Top10Heading>
                </React.Fragment>
            )}

            <PointsTable participants={participants.slice(3)} start={3} onClick={handleItemClick} />
        </LeaderboardWrapper>
    )
}
