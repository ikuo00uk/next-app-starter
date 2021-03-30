import StyleConfig from '@/styles/StyleConfig'
import React from 'react'
import styled from 'styled-components'
export const Footer = () => {
  return (
    <StyledFooter>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  @media (max-width: ${`${StyleConfig.Config.breakPoint}px`}) {
  }
`
