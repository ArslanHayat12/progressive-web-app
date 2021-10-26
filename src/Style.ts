import { createGlobalStyle } from 'styled-components'
import { MediumDarkCyanBlue1 } from './colors'

// @ts-ignore
import OpenSans from './fonts/OpenSans-Regular.ttf'
// @ts-ignore
import OpenSansSemiBold from './fonts/OpenSans-SemiBold.ttf'
// @ts-ignore
import OpenSansSemiBoldItalic from './fonts/OpenSans-SemiBoldItalic.ttf'
// @ts-ignore
import OpenSansBold from './fonts/OpenSans-Bold.ttf'
// @ts-ignore
import OpenSansBoldItalic from './fonts/OpenSans-BoldItalic.ttf'
// @ts-ignore
import OpenSansExtraBold from './fonts/OpenSans-ExtraBold.ttf'
// @ts-ignore
import OpenSansExtraBoldItalic from './fonts/OpenSans-ExtraBoldItalic.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans'), url(${OpenSans}) format('truetype');
  }
  @font-face {
      font-family: 'Open Sans';
      font-weight: 600;
      src: local('Open Sans'), url(${OpenSansSemiBold}) format('truetype');
  }
  @font-face {
      font-family: 'Open Sans';
      font-weight: 600;
      font-style: italic;
      src: local('Open Sans'), url(${OpenSansSemiBoldItalic}) format('truetype');
  }
  @font-face {
      font-family: 'Open Sans';
      font-weight: 700;
      src: local('Open Sans'), url(${OpenSansBold}) format('truetype');
  }
  @font-face {
      font-family: 'Open Sans';
      font-weight: 700;
      font-style: italic;
      src: local('Open Sans'), url(${OpenSansBoldItalic}) format('truetype');
  }
  @font-face {
      font-family: 'Open Sans';
      font-weight: 800;
      src: local('Open Sans'), url(${OpenSansExtraBold}) format('truetype');
  }
  @font-face {
      font-family: 'Open Sans';
      font-weight: 800;
      font-style: italic;
      src: local('Open Sans'), url(${OpenSansExtraBoldItalic}) format('truetype');
  }
   

  html * {
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background: ${MediumDarkCyanBlue1};
    color: white;
    margin: 0;
  }
`
