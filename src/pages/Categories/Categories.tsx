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
            const cardImage = `${window.location.origin}/images/stacked-card-dummy-image.jpg`
            const cardType: CategoryCardType = 'text-with-image'

            return (
                <CategoryCard
                    key={category.id}
                    type={cardType}
                    text={category.name}
                    image={cardImage}
                    handleClick={() => history.push(category.url)}
                />
            )
        })
    }, [categories, history])

    return <CategoriesList>{renderCategories}</CategoriesList>
}
