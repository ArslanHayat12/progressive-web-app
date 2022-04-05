import styled from 'styled-components'
import { White } from '../../colors'

export const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 10px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.19);
`

export const HeaderText = styled.h1`
    margin: 0px;
    margin-left: 16px;
    color: ${White};
    font-weight: 700;
    font-size: 18px;
`
