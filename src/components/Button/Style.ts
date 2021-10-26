import styled from 'styled-components'
import { DeepSkyBlue, MediumDarkCyanBlue1, White } from '../../colors'
import { ButtonType } from '../../types'

type ButtonProps = {
    noBackground: boolean
    buttonType?: ButtonType
}

export const StyledButton = styled.button<ButtonProps>`
    background: ${(props) => (props.noBackground ? 'transparent' : White)};
    color: ${DeepSkyBlue};
    border: 0px;
    cursor: pointer;

    ${(props) => {
        switch (props.buttonType) {
            case 'navigation':
                return `
                    background: transparent;
                    font-weight: 600;
                `
            case 'default':
                return `
                    background: ${MediumDarkCyanBlue1};
                    color: ${White};
                `
        }
    }}

    svg {
        fill: ${DeepSkyBlue};
    }
`
