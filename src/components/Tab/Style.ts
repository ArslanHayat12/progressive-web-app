import styled from 'styled-components'
import { DullWhite } from '../../colors'

type StyledTabProps = { active: boolean }

export const StyledTab = styled.div<StyledTabProps>`
    padding: 10px;
    text-align: center;
    cursor: pointer;
    ${(props) => props.active && `border-bottom: 3px solid ${DullWhite(0.16)};`};
    overflow: hidden;
    font-size: 16px;
`
