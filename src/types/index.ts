export type Participant = {
    id: number
    name: string
    avatar: string
    points: number
    correctAnswers: number
    totalQuestions: number
}
export type CategoryType = {
    id: number
    name: string
    icon: string
    url: string
    image?: string
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
