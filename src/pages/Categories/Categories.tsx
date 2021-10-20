import CategoryCard from '../../components/CategoryCard'
import { CategoriesList } from './Style'
import { useHistory } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { categoriesData } from './categoriesData'
import { CategoryType } from '../../types'

export const Categories = () => {
    const [categories] = useState(categoriesData)
    const history = useHistory()

    const renderCategories = useMemo(() => {
        return categories.map((category: CategoryType) => (
            <CategoryCard
                key={category.id}
                icon={category.icon !== '' ? category.icon : category.name}
                handleClick={() => history.push(category.url)}
            />
        ))
    }, [categories, history])

    return <CategoriesList>{renderCategories}</CategoriesList>
}
