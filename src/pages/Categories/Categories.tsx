import CategoryCard from '../../components/CategoryCard'
import { CategoriesList } from './Style'
import { useHistory } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { categoriesData } from './categoriesData'
import { CategoryCardType, CategoryType } from '../../types'

export const Categories = () => {
    const [categories] = useState(categoriesData)
    const history = useHistory()

    const renderCategories = useMemo(() => {
        return categories.map((category: CategoryType) => {
            const { id, name, image, url } = category
            const cardType: CategoryCardType = 'text-with-image'

            return <CategoryCard key={id} type={cardType} text={name} image={image} handleClick={() => history.push(url)} />
        })
    }, [categories, history])

    return <CategoriesList>{renderCategories}</CategoriesList>
}
