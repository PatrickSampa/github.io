import * as C from "./styled.header";
import myAvatar from "../../assets/myAvatar.png";

export const Header = () => {
  return (
    <C.Wrapper>
      <C.HeaderContext>
        <C.MyAvatar src={myAvatar} alt="avatar" />
        <C.MenuItens>
          <C.MenuList>
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
