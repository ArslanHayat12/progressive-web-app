import styled from 'styled-components'
import { FontWeight } from '../../types'

type TextProps = {
    fontSize?: number
    color?: string
    weight: FontWeight
}

export const StyledText = styled.p<TextProps>`
    margin: 0px;
    ${(props) => (props.color ? `color: ${props.color};` : '')}
    font-family: ${(props) =>
        props.weight === 'regular' ? 'Open Sans' : props.weight === 'semi-bold' ? 'Open Sans Semi Bold' : 'Open Sans Bold'};
    ${(props) => (props.fontSize ? `font-size: ${props.fontSize}px;` : '')}
`
