import {
  Wrapper,
  HeaderContext,
  MyAvatar,
  MenuItens,
  MenuList,
  MenuItem,
  Link,
} from "./styled.header";
import myAvatar from "../../assets/myAvatar.png";

export const Header = () => {
  return (
    <Wrapper>
      <HeaderContext>
        <MyAvatar src={myAvatar} alt="avatar" />
        <MenuItens>
          <MenuList>
            <MenuItem>
              <Link href="#home-section">{"<Home />"}</Link>
            </MenuItem>
            <MenuItem>
              <Link href="#about-section">{"<About />"}</Link>
            </MenuItem>
            <MenuItem>
              <Link href="#skills">{"<Skills />"}</Link>
            </MenuItem>
            <MenuItem>
              <Link href="#projects">{"<Projects />"}</Link>
            </MenuItem>
          </MenuList>
        </MenuItens>
      </HeaderContext>
    </Wrapper>
  );
};
