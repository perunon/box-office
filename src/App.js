import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>This is home page</h1>}></Route>
      <Route path="starring" element={<h1>Starring site</h1>}></Route>
      <Route path="*" element={<h1>CHUJ</h1>}></Route>
    </Routes>
  );
}

export default App;
