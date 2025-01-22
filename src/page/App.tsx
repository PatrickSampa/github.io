import * as ConfigComponents from "../configExports";
import { Wrapper } from "./styled.app";

function App() {
  return (
    <>
      <Wrapper>
        <ConfigComponents.Header />
        <ConfigComponents.Home />
        <ConfigComponents.About />
      </Wrapper>
    </>
  );
}

export default App;
