import styled from 'styled-components'
import { DullBlack } from '../../colors'

export const TabWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    box-shadow: 5px 0px 5px ${DullBlack(0.16)};
    padding: 0px 15px;
`
