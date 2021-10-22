import styled from 'styled-components'
import { White } from '../../colors'

export const LeaderboardWrapper = styled.div`
    padding: 0px 0px 10px;
`

export const Top3Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    margin: 25px 15px;
`

export const Top10Heading = styled.h2`
    color: ${White};
    margin: 20px;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 14px;
`
