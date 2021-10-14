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
}
export type AvatarSize = 'small' | 'medium' | 'large'
export type ImageType = 'avatar' | 'logo' | 'image'
export type FontWeight = 'regular' | 'semi-bold' | 'bold'
export type AlignType = 'left' | 'center' | 'right'
