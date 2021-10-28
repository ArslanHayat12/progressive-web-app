import React from 'react'
import { White } from '../../colors'
import Text from '../../components/Text'
import { APP_NAME } from '../../constants'
import { SplashScreenWrapper } from './Style'

export const SplashScreen = () => {
    return (
        <SplashScreenWrapper>
            <Text text={APP_NAME} weight="700" color={White} fontSize={24} />
        </SplashScreenWrapper>
    )
}
