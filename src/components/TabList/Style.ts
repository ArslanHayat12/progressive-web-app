import styled from 'styled-components'
import { DullBlack } from '../../colors'

type TabWrapperProps = {
    columns: number
}

export const TabWrapper = styled.div<TabWrapperProps>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    box-shadow: 5px 0px 5px ${DullBlack(0.16)};
    padding: 0px 15px;
`
