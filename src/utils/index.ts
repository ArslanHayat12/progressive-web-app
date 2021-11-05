import { CategoryType } from '../types'

export const stackCards = (cardIndex: number, cardAtTop: number, cards: (HTMLDivElement | null)[]) => {
    if (cardIndex > cardAtTop) {
        for (let i = 0; i < cardIndex; i++) {
            const card: HTMLDivElement | null = cards[i] // Getting the current card

            // Checking if the reference to the current card is not null
            if (card !== null) {
                const cardHeight: number = card.clientHeight - 15 // Getting current card's height to be used for stacking next card on it

                // Scaling the current card to show a stack
                const scale: number = 1 - (cardIndex - i) * 0.03
                card.style.transform = `scale(${scale})`

                // Stacking the next card on current card
                if (cards[i + 1] !== null) cards[i + 1].style.marginTop = `-${cardHeight}px`
            }
        }
    } else {
        for (let i = cardAtTop; i > cardIndex; i--) {
            const card: HTMLDivElement | null = cards[i] // Getting the current card

            // Checking if the reference to the current card is not null
            if (card !== null) {
                card.style.transform = 'scale(1)'
                card.style.margin = '10px 0px'
            }
        }

        for (let i = cardIndex; i >= 0; i--) {
            const card: HTMLDivElement | null = cards[i] // Getting the current card

            // Checking if the reference to the current card is not null
            if (card !== null) {
                const scale: number = 1 - (cardIndex - i) * 0.03
                card.style.transform = `scale(${scale})`
            }
        }
    }
}

const getSubcategoriesRecursion = (category: CategoryType) => {
    let allSubcategories: CategoryType | CategoryType[] = []

    if (!category.data) {
        return category
    } else {
        for (let i = 0; i < category.data.length; i++) {
            let categoryObject = getSubcategoriesRecursion(category.data[i])

            if (Array.isArray(categoryObject)) {
                allSubcategories = [...allSubcategories, ...categoryObject]
            } else {
                allSubcategories = [...allSubcategories, categoryObject]
            }
        }
    }

    return allSubcategories
}

export const getSubcategories = (categories: CategoryType[], category: string) => {
    let desiredCategory = categories.filter((categoryItem) => categoryItem.slug === category)
    let subCategories: CategoryType[] = []

    if (desiredCategory.length > 0) {
        let categoryData = desiredCategory[0].data

        for (let i = 0; i < categoryData.length; i++) {
            let subCategoriesData = getSubcategoriesRecursion(categoryData[i])

            if (Array.isArray(subCategoriesData)) {
                subCategories.push(...subCategoriesData)
            } else {
                subCategories.push(subCategoriesData)
            }
        }
    }

    return subCategories
}
