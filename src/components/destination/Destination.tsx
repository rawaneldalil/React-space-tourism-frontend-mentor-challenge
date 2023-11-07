import "./Destination.css";
import { toggleAppearnce, initialState } from "../../utils";
import { useState } from "react";
import data from "../../data.json";

const Destination = () => {
  const destinations = data["destinations"];
  const [selectedDestination, setSelectedDestination] = useState(initialState);
  const [destIndex, setDestIndex] = useState(0);

  const destination = {
    name: destinations[destIndex].name,
    image: destinations[destIndex].images.png,
    description: destinations[destIndex].description,
    travel: destinations[destIndex].travel,
    distance: destinations[destIndex].distance,
  };

  const SliderItem = ({
    order,
    content,
  }: {
    order: number;
    content: string;
  }) => {
    return (
      <span
        className={`${
          selectedDestination[order as keyof typeof selectedDestination] &&
          "selected-destination"
        }`}
        onClick={() =>
          toggleAppearnce(
            destIndex,
            order,
            selectedDestination,
            setSelectedDestination,
            setDestIndex
          )
        }
      >
        {content}
      </span>
    );
  };

  return (
    <div className="destination-page">
      <div className="destination-container">
        <div className="header-and-img">
          <div className="pick-destination">
            <span>01</span>
            <span>Pick a destination</span>
          </div>
          <img className="destination-img" src={destination.image} alt="" />
        </div>

        <div className="destination-info">
          <div className="destinations">
            <SliderItem order={0} content="MOON" />
            <SliderItem order={1} content="MARS" />
            <SliderItem order={2} content="EUROPA" />
            <SliderItem order={3} content="TITAN" />
          </div>
          <span className="destination-name">{destination.name}</span>
          <span className="destination-description">
            {destination.description}
          </span>
          <div className="destination-travel-distance">
            <span className="destination-distance">
              <div>AVG. DISTANCE</div>
              {destination.distance}
            </span>
            <span className="destination-travel">
              <div>EST. TRAVEL TIME</div>
              {destination.travel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
