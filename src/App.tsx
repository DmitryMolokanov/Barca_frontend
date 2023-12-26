import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/MainPage";
import Results from "./pages/Results";
import Schedule from "./pages/Schedule";
import Squad from "./pages/Squad";
import History from "./pages/History";
import Trophies from "./pages/Trophies";
import Legends from "./pages/Legends";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="current_lineup" element={<Squad />} />
        <Route path="/history" element={<History />} />
        <Route path="/trophy" element={<Trophies />} />
        <Route path="/legends" element={<Legends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
