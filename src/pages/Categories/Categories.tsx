import CategoryCard from '../../components/CategoryCard'
import { CategoriesList } from './Style'
import { useHistory } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { CategoryCardType, CategoryType } from '../../types'
import { useAppContext } from '../../contexts/AppContext'
import { SET_IS_HOME_SCREEN } from '../../constants'
import { data } from '../../data'

export const Categories = () => {
    const [categories] = useState(data.categories)
    const history = useHistory()
    const {
        state: { isHomeScreen },
        dispatch
    } = useAppContext()

    useEffect(() => {
        if (!isHomeScreen) dispatch({ type: SET_IS_HOME_SCREEN, payload: true })
    }, [dispatch, isHomeScreen])

    const renderCategories = useMemo(() => {
        return categories.map((category: CategoryType) => {
            const { id, name, image, slug } = category
            const cardType: CategoryCardType = 'text-with-image'

            return <CategoryCard key={id} type={cardType} text={name} image={image} handleClick={() => history.push(slug)} />
        })
    }, [categories, history])

    return <CategoriesList>{renderCategories}</CategoriesList>
}
