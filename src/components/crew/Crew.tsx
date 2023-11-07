import "./Crew.css";
import { toggleAppearnce, initialState } from "../../utils";
import { useState } from "react";
import data from "../../data.json";

const Crew = () => {
  const crew = data["crew"];
  const [selectedPerson, setSelectedPerson] = useState(initialState);
  const [personIndex, setPersonIndex] = useState(0);

  const person = {
    name: crew[personIndex].name,
    image: crew[personIndex].images.png,
    bio: crew[personIndex].bio,
    role: crew[personIndex].role,
  };

  const SliderItem = ({ order }: { order: number }) => {
    return (
      <div
        className={`${
          selectedPerson[order as keyof typeof selectedPerson] &&
          "selected-person"
        } circle`}
        onClick={() =>
          toggleAppearnce(
            personIndex,
            order,
            selectedPerson,
            setSelectedPerson,
            setPersonIndex
          )
        }
      ></div>
    );
  };

  const Slider = ({ className }: { className: string }) => {
    return (
      <div className={className}>
        <SliderItem order={0} />
        <SliderItem order={1} />
        <SliderItem order={2} />
        <SliderItem order={3} />
      </div>
    );
  };

  return (
    <div className="crew-page">
      <div className="crew-info">
        <div className="meet-crew">
          <span>02</span>
          <span>MEET YOUR CREW</span>
        </div>

        <div className="img-container">
          <img className="mobile-person-img" src={person.image} alt="" />
        </div>
        <div className="crew-text-info-container">
          <div className="crew-text-info">
            <div className="person-role">{person.role}</div>
            <div className="person-name">{person.name}</div>
            <div className="person-bio">{person.bio}</div>
          </div>

          <Slider className="slider" />
        </div>
      </div>
      <img className="person-img" src={person.image} alt="" />
    </div>
  );
};

export default Crew;
