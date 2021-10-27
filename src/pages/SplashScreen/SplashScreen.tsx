import React from 'react'
import Image from '../../components/Image'
import { SplashScreenWrapper } from './Style'

export const SplashScreen = () => {
    return (
        <SplashScreenWrapper>
            <Image type="image" srcUrl={`${window.location.origin}/images/logo.png`} />
        </SplashScreenWrapper>
    )
}
