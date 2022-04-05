import { useCallback, useEffect, useMemo, useState } from 'react'
import StackedCardCarousel from '../../components/StackedCardCarousel'
import { DetailsWrapper, SpecificationsWrapper, TabContentStyled } from './Style'
import { MediumDarkCyanBlue1, White } from '../../colors'
import Image from '../../components/Image'
import TabList from '../../components/TabList'
import { SET_IS_HOME_SCREEN } from '../../constants'
import { useAppContext } from '../../contexts/AppContext'
import { DetailsCard, SpecificationCard } from '../../components'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../utils'
import { ProductDetailType, ProductImageType } from '../../types'

export const ProductDetails = () => {
    const { category, subCategory, brand, id } =
        useParams<{ category?: string; subCategory?: string; brand?: string; id?: string }>()

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

    const tabsData: ProductDetailType = useMemo(() => {
        return getProductDetails(category, subCategory, brand, id)
    }, [category, subCategory, brand, id])

    const cards = useMemo(() => {
        const { images } = tabsData || { images: [] }

        return images?.map((image: ProductImageType) => (
            <Image srcUrl={image?.url} key={image?.url} altText={image?.title} type="image" customWidth="100%" />
        ))
    }, [tabsData])

    const tabContent = useMemo(() => {
        const { details, specifications } = tabsData

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
                return (
                    <SpecificationsWrapper>
                        {specifications &&
                            specifications?.map((spec) => (
                                <SpecificationCard title={spec?.title || ''} points={spec?.points || []} key={spec?.title} />
                            ))}
                    </SpecificationsWrapper>
                )
            case 'details':
            default:
                return <DetailsCard description={details} />
        }
    }, [currentTab, tabsData, cards])

    return (
        <DetailsWrapper>
            <TabList tabs={tabs} activeTab={currentTab} onChange={handleTabChange} />

            <TabContentStyled>{tabContent}</TabContentStyled>
        </DetailsWrapper>
    )
}
