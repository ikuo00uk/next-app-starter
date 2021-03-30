import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import StyleConfig from '@/styles/StyleConfig'
import { AppProps } from 'next/app'
import 'ress' // ress.cssをインポート

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={{ backgroundColor: 'yellow' }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${StyleConfig.Font.family};
    font-size: ${StyleConfig.Helper.calcVW(10)};;
    font-weight: ${StyleConfig.Font.weight};
    overflow-x: hidden;
    font-feature-settings: "palt";
    color: #000;
  }
  body{
    font-size: ${StyleConfig.Helper.calcVW(12)};
    line-height: 1.5;
    letter-spacing: 0.05em;
    font-weight: 400;
  }
  img {
    max-width: 100%;
    vertical-align: bottom;
  }
  li {
    list-style-type: none;
  }
  a{
    text-decoration: none;
    transition: 0.2s opacity ease-in;
    &:hover{
      opacity: 0.7;
    }
    &.disabled-hover{
      &:hover{
        opacity:1 ;
      }
    }
  }
  * {
    box-sizing: border-box;
  }
  .h-sp--only{
    @media (min-width: ${`${StyleConfig.Config.breakPoint - 1}px`}) {
      display: none;
    }
  }
  .h-pc--only{
    @media (max-width: ${`${StyleConfig.Config.breakPoint}px`}) {
      display: none;
    }
  }
  span.h-sp--br{
    @media (max-width: ${`${StyleConfig.Config.breakPoint}px`}) {
      display: block;
    }
  }
  span.h-pc--br{
    @media (min-width: ${`${StyleConfig.Config.breakPoint - 1}px`}) {
      display: block;
    }
  }
  .img--boxshadow{
    box-shadow: 0 3px 10px rgba(0,0,0,.5)
  }
  .align-center{
    text-align: center;
  }
`

export default App
