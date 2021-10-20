import styled from 'styled-components'
import { DeepSkyBlue } from '../../colors'
import { AlignType } from '../../types'

type ResultItemProps = {
    align?: AlignType
}

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-column-gap: 19px;
    background: ${DeepSkyBlue};
    margin-top: 20px;
    padding: 20px 25px 10px;

    &:hover,
    :active {
        cursor: pointer;
    }
`

export const ParticipantDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`

export const ResultWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const ResultItem = styled.div<ResultItemProps>`
    display: grid;
    grid-template-rows: 1fr 1fr;
    ${(props) => props.align && `text-align: ${props.align};`}
`
