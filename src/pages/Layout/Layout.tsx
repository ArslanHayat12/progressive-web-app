import React, { useCallback } from 'react'
import { AppLayout, Content, Divider, Footer, NavBar } from './Style'
import { Routes } from '../../routes/Routes'
import Image from '../../components/Image'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'
import { URLS } from '../../routes/urls'
import { APP_NAME, BACK, HOME } from '../../constants'
import Text from '../../components/Text'
import { White } from '../../colors'

export const Layout = () => {
    const userImage = `${window.location.origin}/images/Portrait.jpg`
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
                <Text text={APP_NAME} weight="700" color={White} />
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
