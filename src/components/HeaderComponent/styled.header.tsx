import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 8.5%;
  background-color: transparent;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const HeaderContext = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    #1a1a29,
    rgba(27, 27, 40, 0)
  );
`;

export const MenuItens = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const MyAvatar = styled.img`
  width: 5%;
  height: 90%;
  margin-left: 4rem;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
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
