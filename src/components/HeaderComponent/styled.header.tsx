import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 8.5%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
`;

export const HeaderContext = styled.div`
  background-image: linear-gradient(
    to bottom right,
    #1a1a29,
    rgba(27, 27, 40, 0)
  );
  backdrop-filter: blur(10px);
  width: 80%;
  height: 100%;
  border-radius: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e2e2e207;
`;

export const MenuItens = styled.div`
  height: 80%;
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
  width: 40%;
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
