import styled from 'styled-components'

type TextProps = {
    fontSize?: number
    color?: string
    weight: string
}

export const StyledText = styled.p<TextProps>`
    margin: 0px;
    ${(props) => (props.color ? `color: ${props.color};` : '')}
    font-weight: ${(props) => props.weight};
    ${(props) => (props.fontSize ? `font-size: ${props.fontSize}px;` : '')}
`
