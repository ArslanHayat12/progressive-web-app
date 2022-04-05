import React, { useState } from 'react'
import useInterval from './hooks/useInterval'
import Layout from './pages/Layout'
import SplashScreen from './pages/SplashScreen'
import { GlobalStyle } from './Style'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
    const [displaySplashScreen, setDisplaySplashScreen] = useState(true)

    useInterval(() => setDisplaySplashScreen(false), 3000)

    return (
        <React.Fragment>
            <GlobalStyle />

            {displaySplashScreen ? (
                <SplashScreen />
            ) : (
                <Router>
                    <Layout />
                </Router>
            )}
        </React.Fragment>
    )
}

export default App
