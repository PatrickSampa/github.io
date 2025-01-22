import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./page/App.tsx";
import { GlobalStyle } from "./Global";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
