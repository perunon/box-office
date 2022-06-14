import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import NotFoundSite from "./pages/NotFound";
import Show from "./pages/Show";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="starred" element={<Starred />}></Route>
        <Route exact path="/show/:id" element={<Show />}></Route>
        <Route exact path="*" element={<NotFoundSite />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
