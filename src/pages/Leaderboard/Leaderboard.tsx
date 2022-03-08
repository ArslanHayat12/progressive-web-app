import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { SET_IS_HOME_SCREEN, TOP10 } from '../../constants'
import { LeaderboardWrapper, Top10Heading, Top3Wrapper } from './Style'
import PointsCard from '../../components/PointsCard'
import { participants } from './leaderboardData'
import { Participant } from '../../types'
import PointsTable from '../../components/PointsTable'
import PointsCardIndividual from '../../components/PointsCardIndividual'
import { useHistory, useParams } from 'react-router-dom'
import TabList from '../../components/TabList'
import { useAppContext } from '../../contexts/AppContext'
import { getTop10Items } from '../../utils'

type LeaderboardProps = {
    type: 'individual' | 'common'
    displayTabs?: boolean
}

export const Leaderboard = (props: LeaderboardProps) => {
    const { type, displayTabs } = props
    const history = useHistory()
    const { category, subCategory } = useParams<{ category?: string; subCategory?: string }>()
    const {
        state: { isHomeScreen },
        dispatch
    } = useAppContext()

    const [currentTab, setCurrentTab] = useState('details')

    const tabs = [
        { label: 'Tab 1', key: 'tab1' },
        { label: 'Tab 2', key: 'tab2' },
        { label: 'Tab 2', key: 'tab3' },
        { label: 'Tab 2', key: 'tab4' }
    ]

    const top10 = getTop10Items(category, subCategory)
    const top3 = top10.slice(0, 3)

    const handleItemClick = useCallback(
        (id: number) => {
            history.push(`/${category}/${subCategory}/${id}`)
        },
        [history, category, subCategory]
    )

    const handleTabChange = useCallback((tab) => {
        setCurrentTab(tab)
    }, [])

    const Top3Participants = useMemo(() => {
        return top3.map((participant: Participant, index: number) => (
            <PointsCard participant={participant} rank={index + 1} key={participant.id} onClick={handleItemClick} />
        ))
    }, [top3, handleItemClick])

    useEffect(() => {
        if (isHomeScreen) dispatch({ type: SET_IS_HOME_SCREEN, payload: false })
    }, [dispatch, isHomeScreen])

    return (
        <LeaderboardWrapper>
            {displayTabs && <TabList tabs={tabs} activeTab={currentTab} onChange={handleTabChange} />}

            {type === 'common' ? (
                <Top3Wrapper>{Top3Participants}</Top3Wrapper>
            ) : (
                <React.Fragment>
                    <PointsCardIndividual participant={participants[0]} onClick={handleItemClick} />

                    <Top10Heading>{TOP10}</Top10Heading>
                </React.Fragment>
            )}

            <PointsTable participants={top10.slice(3)} start={3} onClick={handleItemClick} />
        </LeaderboardWrapper>
    )
}
