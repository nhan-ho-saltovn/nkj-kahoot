import Dashboard from "./pages/Dashboard/Dashboard";
import Game from "./pages/Game/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:gameId" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
