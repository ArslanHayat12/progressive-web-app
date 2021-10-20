import React, { useState } from 'react'
import useInterval from './hooks/useInterval'
import Layout from './pages/Layout'
import SplashScreen from './pages/SplashScreen'
import { GlobalStyle } from './Style'

const App = () => {
    const [displaySplashScreen, setDisplaySplashScreen] = useState(true)

    useInterval(() => setDisplaySplashScreen(false), 3000)

    return (
        <React.Fragment>
            <GlobalStyle />

            {displaySplashScreen ? <SplashScreen /> : <Layout />}
        </React.Fragment>
    )
}

export default App
