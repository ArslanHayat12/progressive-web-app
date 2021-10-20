import React, { useCallback, useMemo } from 'react'
import StackedCardCarousel from '../../components/StackedCardCarousel'
import { DetailsWrapper } from './Style'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import { LEADERBOARD } from '../../constants'
import { MediumDarkCyanBlue1, White } from '../../colors'
import Image from '../../components/Image'

export const Details = () => {
    const history = useHistory()

    const handleBackButtonClick = useCallback(() => {
        history.goBack()
    }, [history])

    const cards = useMemo(() => {
        let content = []

        for (let i = 0; i < 5; i++) {
            content.push(
                <Image srcUrl={`${window.location.origin}/stacked-card-dummy-image.jpg`} type="image" customWidth="100%" />
            )
        }

        return content
    }, [])

    return (
        <DetailsWrapper>
            <Header heading={LEADERBOARD} onBackClick={handleBackButtonClick} />

            <StackedCardCarousel cardsContent={cards} cardsBackgroundColor={MediumDarkCyanBlue1} cardsContentColor={White} />
        </DetailsWrapper>
    )
}
