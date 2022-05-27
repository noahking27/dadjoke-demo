import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/DadJokePage copy";
import DadJokePage from './pages/Home';

const App = () => {
  // what are we building
  // what components do we need
  // what is our style | color palette

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dad" element={<DadJokePage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
