import * as C from "./styled.header";
import myAvatar from "../../assets/myAvatar.png";

type HeaderProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

export const Header = ({ setIsOpen, isOpen }: HeaderProps) => {
  return (
    <C.Wrapper>
      <C.HeaderContext isOpen={isOpen}>
        <C.DivImg>
          <C.MyAvatar src={myAvatar} alt="avatar" isOpen={isOpen} />
        </C.DivImg>
        <C.MenuItens>
          <C.MeuIconDiv onClick={() => setIsOpen(!isOpen)}>
            <C.MenuIcon
              width="60%"
              isOpen={isOpen}
              display="block"
              rotate="43deg"
              translateY="1px"
              translateX="5px"
            ></C.MenuIcon>
            <C.MenuIcon
              width="90%"
              display={isOpen ? "none" : "block"}
            ></C.MenuIcon>
            <C.MenuIcon
              width="60%"
              isOpen={isOpen}
              display="block"
              rotate="-43deg"
              translateY="-2px"
              translateX="5px"
            ></C.MenuIcon>
          </C.MeuIconDiv>
          <C.MenuList
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
            gap="7rem"
          >
            <C.MenuItem>
              <C.Link href="#home-section">{"<Home />"}</C.Link>
            </C.MenuItem>
            <C.MenuItem>
              <C.Link href="#about-section">{"<About />"}</C.Link>
            </C.MenuItem>
            <C.MenuItem>
              <C.Link href="#skills-section">{"<Skills />"}</C.Link>
            </C.MenuItem>
          </C.MenuList>
        </C.MenuItens>
      </C.HeaderContext>
    </C.Wrapper>
  );
};
