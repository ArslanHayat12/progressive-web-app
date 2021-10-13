import styled from 'styled-components'
import { DeepSkyBlue, White } from '../../colors'

type ButtonProps = {
    noBackground: boolean
}

export const StyledButton = styled.button<ButtonProps>`
    background: ${(props) => (props.noBackground ? 'transparent' : White)};
    color: ${DeepSkyBlue};
    border: 0px;
    cursor: pointer;

    svg {
        fill: ${DeepSkyBlue};
    }
`
