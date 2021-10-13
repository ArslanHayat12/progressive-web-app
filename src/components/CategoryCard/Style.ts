import styled from 'styled-components'
import { MediumDarkCyanBlue1, DullBlack, DullWhite } from '../../colors'

export const CategoryCardWrapper = styled.div`
    display: flex;
    height: 200px;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid ${DullWhite};
    color: ${MediumDarkCyanBlue1};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: -7px 7px 5px ${DullBlack};
    font-family: 'Open Sans Semi Bold';

    &:hover {
        cursor: pointer;
    }
`
