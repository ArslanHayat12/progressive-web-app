import { createGlobalStyle } from 'styled-components'
import { MediumDarkCyanBlue1 } from './colors'

// @ts-ignore
import OpenSans from './fonts/OpenSans-Regular.ttf'
// @ts-ignore
import OpenSansBold from './fonts/OpenSans-Bold.ttf'
// @ts-ignore
import OpenSansSemiBold from './fonts/OpenSans-SemiBold.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Open Sans';
      src: url(${OpenSans}) format('truetype');
  }
  @font-face {
      font-family: 'Open Sans Semi Bold';
      src: url(${OpenSansSemiBold}) format('truetype');
  }
  @font-face {
      font-family: 'Open Sans Bold';
      src: url(${OpenSansBold}) format('truetype');
  }
   

  body {
    background: ${MediumDarkCyanBlue1};
    color: white;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
`
