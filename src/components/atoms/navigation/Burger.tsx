import React from "react";
import styled from "styled-components";
import StyleConfig from '@/styles/StyleConfig'

type Props = {
  isOpen: boolean;
  setOpen: Function;
};

export const Burger = ({ isOpen, setOpen }: Props) => {
  return (
    <StyledBurger open={isOpen} onClick={() => setOpen(!isOpen)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

const StyledBurger = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;
  position: relative;

  &:focus {
    outline: none;
  }

  > span {
    width: 30px;
    height: 2px;
    background: ${StyleConfig.Color.PRIMARY};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "translateX(-25px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default Burger;
