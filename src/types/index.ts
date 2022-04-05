export type KeyValuePair<T> = {
    [key: string]: T
}
export type Participant = {
    id: number
    name: string
    avatar: string
    points: number
    slug: string
    correctAnswers: number
    totalQuestions: number
}
export type CategoryType = {
    id: string
    name: string
    slug: string
    image?: string
    icon?: string
    data?: CategoryType[]
}
export type TabType = {
    label: string
    key: string
}
export type ProductImageType = { title: string; url: string }
export type SpecificationPointType = {
    key: string
    value: string
}
export type SpecificationType = {
    title: string
    points: SpecificationPointType[]
}
export type ProductDetailType = {
    details: string
    specifications: SpecificationType[]
    images: ProductImageType[]
}
export type AvatarSize = 'small' | 'medium' | 'large'
export type ImageType = 'avatar' | 'logo' | 'image'
export type AlignType = 'left' | 'center' | 'right'
export type ButtonType = 'navigation' | 'default'
export type CategoryCardType = 'text-with-image' | 'text-with-icon' | 'text'
export type ImageCardType = 'points-card' | 'category-card'

export type Action = {
    type: string
    payload?: any
}

export type AppContextState = {
    isHomeScreen: boolean
}
