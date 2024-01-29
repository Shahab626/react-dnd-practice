import { theme } from "./utils";
import { Routes } from "./routes";
import GlobalStyle from "../src/global.style";
import { ThemeProvider } from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle theme={theme} />

        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </DndProvider>
    </>
  );
}

export default App;
