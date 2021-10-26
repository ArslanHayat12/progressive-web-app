import styled from 'styled-components'
import { DullBlack, DullWhite } from '../../colors'

const Border = DullWhite(0.19)

export const AppLayout = styled.div`
    display: grid;
    grid-template-rows: 70px auto 50px;
    height: 100vh;
`

export const NavBar = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid ${Border};
`

export const Content = styled.div`
    overflow-y: scroll;
`

export const Footer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    border-top: 1px solid ${Border};
    box-shadow: 0px -2px 3px ${DullBlack(0.16)};
`

export const Divider = styled.div`
    background: ${Border};
    width: 100%;
    height: 100%;
`
