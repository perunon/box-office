import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import NotFoundSite from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="starred" element={<Starred />}></Route>
      <Route path="*" element={<NotFoundSite />}></Route>
    </Routes>
  );
}

export default App;
