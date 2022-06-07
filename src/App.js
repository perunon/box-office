import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import NotFoundSite from "./pages/NotFound";
import Show from "./pages/Show";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="starred" element={<Starred />}></Route>
      <Route exact path="/show/:id" element={<Show />}></Route>
      <Route exact path="*" element={<NotFoundSite />}></Route>
    </Routes>
  );
}

export default App;
