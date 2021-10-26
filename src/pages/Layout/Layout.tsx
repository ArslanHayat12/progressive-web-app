import React, { useCallback } from 'react'
import { AppLayout, Content, Divider, Footer, NavBar } from './Style'
import { Routes } from '../../routes/Routes'
import Image from '../../components/Image'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'
import { URLS } from '../../routes/urls'
import { BACK, HOME } from '../../constants'

export const Layout = () => {
    const logoUrl = `${window.location.origin}/logo192.png`
    const userImage = `${window.location.origin}/Portrait.jpg`
    const history = useHistory()

    const goBack = useCallback(() => {
        history.goBack()
    }, [history])

    const goToHome = useCallback(() => {
        history.push(URLS.categories)
    }, [history])

    return (
        <AppLayout>
            <NavBar>
                <Image type="logo" srcUrl={logoUrl} />
                <Image type="avatar" srcUrl={userImage} size="small" />
            </NavBar>

            <Content>
                <Routes />
            </Content>

            <Footer>
                <Button text={HOME} type="navigation" handleClick={goToHome} />
                <Divider />
                <Button text={BACK} type="navigation" handleClick={goBack} />
            </Footer>
        </AppLayout>
    )
}
