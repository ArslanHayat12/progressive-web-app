import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
    0% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(0.9);
    }
`

export const SplashScreenWrapper = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;

    p {
        transition: transform 1.5s linear;
        animation: ${loadingAnimation} 1.5s infinite;
    }
`
