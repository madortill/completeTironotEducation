import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { CharacterProvider } from "./context/CharacterContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </HashRouter>
  </StrictMode>
);