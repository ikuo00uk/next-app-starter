import React, {RefObject, useState, } from 'react'
import styled from 'styled-components'
import Burger from '@/components/atoms/navigation/Burger'
import StyleConfig from '@/styles/StyleConfig'
import Link from 'next/link'

type Props = {
}

export const Header = ({ ...props }: Props) => {
  const [menuOpen , setMenuOpen ]= useState(false);
  return (
    <StyledHeader>
      <Burger
        isOpen={menuOpen}
        setOpen={setMenuOpen}
      />
      <Menu isOpen={menuOpen}>
        <MenuInner isOpen={menuOpen}>
        </MenuInner>
      </Menu>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  position: relative;
  padding: 20px;
  @media (max-width: ${`${StyleConfig.Config.breakPoint}px`}) {

  }
`

const Menu = styled.div<{ isOpen: boolean }>`
  position: relative;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  z-index: 100;
  transition: transform 0.3s ease-in-out;

  .burger{
    position: absolute;
    top: 0;
    left: 4%;
  }
`

const MenuInner = styled.div<{ isOpen: boolean }>`
`
