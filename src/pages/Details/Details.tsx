import { useCallback, useEffect, useMemo, useState } from 'react'
import StackedCardCarousel from '../../components/StackedCardCarousel'
import { DetailsWrapper } from './Style'
import { MediumDarkCyanBlue1, White } from '../../colors'
import Image from '../../components/Image'
import TabList from '../../components/TabList'
import { SET_IS_HOME_SCREEN } from '../../constants'
import { useAppContext } from '../../contexts/AppContext'

export const Details = () => {
    const [currentTab, setCurrentTab] = useState('details')

    const tabs = [
        { label: 'Details', key: 'details' },
        { label: 'Specifications', key: 'specifications' },
        { label: 'Images', key: 'images' }
    ]

    const {
        state: { isHomeScreen },
        dispatch
    } = useAppContext()

    const handleTabChange = useCallback((tab) => {
        setCurrentTab(tab)
    }, [])

    useEffect(() => {
        if (isHomeScreen) dispatch({ type: SET_IS_HOME_SCREEN, payload: false })
    }, [dispatch, isHomeScreen])

    const cards = useMemo(() => {
        const content = []

        for (let i = 0; i < 5; i++) {
            content.push(
                <Image srcUrl={`${window.location.origin}/images/stacked-card-dummy-image.jpg`} type="image" customWidth="100%" />
            )
        }

        return content
    }, [])

    const tabContent = useMemo(() => {
        switch (currentTab) {
            case 'images':
                return (
                    <StackedCardCarousel
                        cardsContent={cards}
                        cardsBackgroundColor={MediumDarkCyanBlue1}
                        cardsContentColor={White}
                    />
                )

            case 'specifications':
            case 'details':
            default:
                return <></>
        }
    }, [currentTab])

    return (
        <DetailsWrapper>
            <TabList tabs={tabs} activeTab={currentTab} onChange={handleTabChange} />

            {tabContent}
        </DetailsWrapper>
    )
}
