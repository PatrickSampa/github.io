import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 8.5%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99999;
`;

type propsHeader = {
  isOpen?: boolean;
};

export const HeaderContext = styled.div<propsHeader>`
  backdrop-filter: blur(10px);
  width: 80%;
  height: 100%;
  border-radius: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      background-image: linear-gradient(
        to bottom right,
        #1a1a29,
        rgba(27, 27, 40, 0)
      );
      border: 1px solid #e2e2e207;
    `}
`;

export const MenuItens = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

type propsMyAvatar = {
  isOpen?: boolean;
};
export const MyAvatar = styled.img<propsMyAvatar>`
  width: 100%;
  height: 100%;
  ${({ isOpen }) =>
    isOpen &&
    css`
      display: none;
    `}
`;
export const DivImg = styled.div`
  width: 70px;
  height: 60px;
  margin-left: 3rem;
`;

type props = {
  width?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
};

export const MenuList = styled.ul<props>`
  display: ${({ display }) => display || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  width: ${({ width }) => width || ""};
  gap: ${({ gap }) => gap || ""};

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  margin-right: 2rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 100;
`;

type propsMenuIcon = {
  width?: string;
  display?: string;
  isOpen?: boolean;
  rotate?: string;
  translateY?: string;
  translateX?: string;
};

export const MenuIcon = styled.span<propsMenuIcon>`
  @media (max-width: 1100px) {
    background-color: #ffffff;
    width: ${({ width }) => width || ""};
    height: 3px;
    display: ${({ display }) => display || ""};
    transition: transform 0.3s ease;
    ${({ isOpen, rotate, translateY, translateX }) =>
      isOpen &&
      css`
        transform: rotate(${rotate || "0deg"})
          translateY(${translateY || "0px"}) translateX(${translateX || "0px"});
      `}
  }
`;

export const MeuIconDiv = styled.div`
  display: none;
  @media (max-width: 1100px) {
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    flex-direction: column;
    margin-right: 2rem;
  }
`;

export const OpenMenu = styled.button`
  @media (max-width: 1100px) {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
