import './App.css';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Panel from './pages/Panel';

function App() {
  return (
    <div>
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/panel" element={<Panel />} />
     </Routes>
    </div>
  );
}

export default App;
