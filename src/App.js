import { Route, Routes } from "react-router-dom";
import Navs from "./components/Navs";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import NotFoundSite from "./pages/NotFound";

function App() {
  return (
    <div>
      <Navs />{" "}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="starred" element={<Starred />}></Route>
        <Route path="*" element={<NotFoundSite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
