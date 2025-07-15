import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { StyledEngineProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import { LayoutProvider } from "./context/LayoutContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LayoutProvider>
      <StyledEngineProvider enableCssLayer>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <App />
      </StyledEngineProvider>
    </LayoutProvider>
  </StrictMode>
);
