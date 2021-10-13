import React from 'react'
import { NavBar } from './Style'
import { Routes } from '../../routes/Routes'
import Image from '../../components/Image'

export const Layout = () => {
    return (
        <React.Fragment>
            <NavBar>
                <Image type="logo" srcUrl={`${window.location.origin}/logo192.png`} />
            </NavBar>

            <Routes />
        </React.Fragment>
    )
}
