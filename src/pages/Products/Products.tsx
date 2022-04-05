import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { SET_IS_HOME_SCREEN, TOP10 } from '../../constants'
import { LeaderboardWrapper, Top10Heading, Top3Wrapper } from './Style'
import PointsCard from '../../components/PointsCard'
import { Participant } from '../../types'
import PointsTable from '../../components/PointsTable'
import PointsCardIndividual from '../../components/PointsCardIndividual'
import { useHistory, useParams } from 'react-router-dom'
import TabList from '../../components/TabList'
import { useAppContext } from '../../contexts/AppContext'
import { getTop10Products } from '../../utils'
import { NoRecords } from '../../components'

type ProductsProps = {
    type: 'individual' | 'common'
    displayTabs?: boolean
}

export const Products = (props: ProductsProps) => {
    const { type, displayTabs } = props
    const history = useHistory()
    const { category, subCategory, brand } = useParams<{ category?: string; subCategory?: string; brand?: string }>()
    const {
        state: { isHomeScreen },
        dispatch
    } = useAppContext()

    const [currentTab, setCurrentTab] = useState('')

    const tabs = []

    const top10 = getTop10Products(category, subCategory, brand)
    const top3 = top10.slice(0, 3)

    const handleItemClick = useCallback(
        (id: string) => {
            history.push(`/${category}/${subCategory}/${brand}/${id}`)
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

            {top10?.length === 0 ? (
                <NoRecords />
            ) : (
                <>
                    {type === 'common' ? (
                        <Top3Wrapper>{Top3Participants}</Top3Wrapper>
                    ) : (
                        <React.Fragment>
                            <PointsCardIndividual participant={top10[0]} onClick={handleItemClick} />

                            <Top10Heading>{TOP10}</Top10Heading>
                        </React.Fragment>
                    )}

                    <PointsTable participants={top10.slice(3)} start={3} onClick={handleItemClick} />
                </>
            )}
        </LeaderboardWrapper>
    )
}
