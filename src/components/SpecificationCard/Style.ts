import styled from 'styled-components'
import { Black, DeepSkyBlue, DullBlack, White } from '../../colors'

export const SpecificationCardStyled = styled.div`
    padding: 10px;
    background: ${White};
    border-radius: 3px;
`

export const CardTitle = styled.div`
    color: ${DeepSkyBlue};
    font-weight: bold;
    font-size: 13px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${DullBlack(0.16)};
`

export const SpecificationsRow = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    color: ${Black};
    font-size: 11px;
    padding: 5px 0px;
    border-bottom: 1px solid ${DullBlack(0.16)};

    &:last-child {
        border-bottom: none;
    }
`

export const SpecificationTitle = styled.div`
    font-weight: bold;
`

export const SpecificationValue = styled.div``
