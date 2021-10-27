import { useMemo } from 'react'
import StackedCardCarousel from '../../components/StackedCardCarousel'
import { DetailsWrapper } from './Style'
import { MediumDarkCyanBlue1, White } from '../../colors'
import Image from '../../components/Image'
import TabList from '../../components/TabList'

export const Details = () => {
    const tabsList = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']

    const cards = useMemo(() => {
        const content = []

        for (let i = 0; i < 5; i++) {
            content.push(
                <Image srcUrl={`${window.location.origin}/images/stacked-card-dummy-image.jpg`} type="image" customWidth="100%" />
            )
        }

        return content
    }, [])

    return (
        <DetailsWrapper>
            <TabList tabs={tabsList} />

            <StackedCardCarousel cardsContent={cards} cardsBackgroundColor={MediumDarkCyanBlue1} cardsContentColor={White} />
        </DetailsWrapper>
    )
}
