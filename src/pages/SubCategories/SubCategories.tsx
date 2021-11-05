import CategoryCard from '../../components/CategoryCard'
import { SubCategoriesList } from './Style'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { CategoryCardType, CategoryType } from '../../types'
import { useAppContext } from '../../contexts/AppContext'
import { SET_IS_HOME_SCREEN } from '../../constants'
import { data } from '../../data'
import { getSubcategories } from '../../utils'
import { URLS } from '../../routes/urls'

export const SubCategories = () => {
    const history = useHistory()
    const { category } = useParams<{ category?: string }>()
    const [subCategories] = useState(getSubcategories(data.categories, category))
    const {
        state: { isHomeScreen },
        dispatch
    } = useAppContext()

    useEffect(() => {
        if (isHomeScreen) dispatch({ type: SET_IS_HOME_SCREEN, payload: false })
    }, [dispatch, isHomeScreen])

    const renderSubCategories = useMemo(() => {
        return subCategories.map((subCategory: CategoryType) => {
            const { id, name, image, slug } = subCategory
            const cardType: CategoryCardType = 'text-with-image'

            return (
                <CategoryCard
                    key={id}
                    type={cardType}
                    text={name}
                    image={image}
                    handleClick={() => history.push(`/${category}/${slug}/top10`)}
                />
            )
        })
    }, [subCategories, history])

    return <SubCategoriesList>{renderSubCategories}</SubCategoriesList>
}
