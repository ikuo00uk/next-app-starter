import React, { Fragment ,useState, useCallback, useRef} from 'react'
import Head from 'next/head'
import { getMetas } from '@/constants/Meta'
import styled from 'styled-components'
import StyleConfig from '@/styles/StyleConfig'
import { Header } from '@/components/layouts/Header'
import { URL } from '@/constants/Url'

export const Home = () => {
  const meta = getMetas('Home')

  return (
    <div className="container">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={meta.ogUrl} />
        <meta property="og:type" content={meta.ogType} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:site_name" content={meta.ogSiteName} />
        <meta property="og:image" content={meta.ogImg} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={meta.ogUrl} />
      </Head>
      <Fragment>
        <StyledWrapper>
          <Header
          />
          <div className="container">
          </div>
        </StyledWrapper>
      </Fragment>
    </div>
  )
}

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  .container{
  }
  @media (max-width: ${`${StyleConfig.Config.breakPoint}px`}) {
  }
`
export default Home
