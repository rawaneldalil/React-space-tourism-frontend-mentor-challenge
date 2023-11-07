import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-info">
        <span> So, you want to travel to</span>
        <span>SPACE</span>
        <div>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>

      <button className="explore-btn" onClick={() => navigate("/destination")}>
        EXPLORE
      </button>
    </div>
  );
};

export default HomePage;
