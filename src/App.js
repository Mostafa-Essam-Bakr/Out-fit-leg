import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Home from "./Home";
import StaggeredDropDown from "./Component/Droooopo";
import Ai from "./Ai";
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ai" element={<Ai />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
