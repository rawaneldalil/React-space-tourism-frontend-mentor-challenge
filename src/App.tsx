import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  let activeSection = useLocation().pathname.slice(1);

  if (activeSection.length === 0) {
    activeSection = 'home';
  }
  
  return (
    <div className={`app ${activeSection}`}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
