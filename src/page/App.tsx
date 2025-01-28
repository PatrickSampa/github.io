import * as ConfigComponents from "../configExports";
import { Wrapper } from "./styled.app";
import { ThemeProvider } from "../Global/Theme";
import * as React from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Wrapper
        backgroundColor={
          isDarkMode
            ? ThemeProvider.ThemeBackground.Dark
            : ThemeProvider.ThemeBackground.Light
        }
      >
        <ConfigComponents.Header setIsOpen={setIsOpen} isOpen={isOpen} />
        <ConfigComponents.Home
          setIsDarkModeActive={setIsDarkMode}
          openMenu={isOpen}
          setOpenMenu={setIsOpen}
        />
        <ConfigComponents.About />
        <ConfigComponents.Skills />
      </Wrapper>
    </>
  );
}

export default App;
