import "./App.css";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Panel from "./Pages/Usuario/Panel";
import PanelAdmin from "./Pages/Admin/Panel";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/panel" element={<Panel />} />
        <Route exact path="/admin" element={<PanelAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
