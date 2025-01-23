import * as ConfigComponents from "../configExports";
import { Wrapper } from "./styled.app";
import { ThemeProvider } from "../Global/Theme";
import * as React from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  return (
    <>
      <Wrapper
        backgroundColor={
          isDarkMode
            ? ThemeProvider.ThemeBackground.Dark
            : ThemeProvider.ThemeBackground.Light
        }
      >
        <ConfigComponents.Header />
        <ConfigComponents.Home setIsDarkModeActive={setIsDarkMode} />
        <ConfigComponents.About />
      </Wrapper>
    </>
  );
}

export default App;
