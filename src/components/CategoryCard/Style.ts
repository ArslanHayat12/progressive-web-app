import styled from 'styled-components'
import { MediumDarkCyanBlue1, DullBlack, DullWhite } from '../../colors'

export const CategoryCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 200px;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid ${DullWhite(0.16)};
    color: ${MediumDarkCyanBlue1};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: -7px 7px 5px ${DullBlack(0.16)};
    font-weight: 600;

    &:hover,
    :active {
        cursor: pointer;
    }
`

export const IconWrapper = styled.div`
    font-size: 2em;
`
