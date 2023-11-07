import "./Technology.css";
import { initialState, toggleAppearnce } from "../../utils";
import { useState } from "react";
import data from "../../data.json";

const Technology = () => {
  const technologies = data["technology"];
  const [selectedTechnology, setSelectedTechnology] = useState(initialState);
  const [techIndex, setTechIndex] = useState(0);

  const technology = {
    name: technologies[techIndex].name,
    landscapeImg: technologies[techIndex].images.landscape,
    portraitImg: technologies[techIndex].images.portrait,
    description: technologies[techIndex].description,
  };

  const SliderItem = ({
    order,
    content,
  }: {
    order: number;
    content: string;
  }) => {
    return (
      <div
        className={`${
          selectedTechnology[order as keyof typeof selectedTechnology] &&
          "selected-tech"
        } numbered-item`}
        onClick={() =>
          toggleAppearnce(
            techIndex,
            order,
            selectedTechnology,
            setSelectedTechnology,
            setTechIndex
          )
        }
      >
        {content}
      </div>
    );
  };

  const NumberedSlider = ({ className }: { className: string }) => {
    return (
      <div className={className}>
        <SliderItem order={0} content="1" />
        <SliderItem order={1} content="2" />
        <SliderItem order={2} content="3" />
      </div>
    );
  };

  return (
    <div className="tech-page">
      <div className="tech-info">
        <div className="space-launch">
          <span>03</span>
          <span>SPACE LAUNCH 101</span>
        </div>
        <img
          className="landscape-img"
          src={technology.landscapeImg}
          alt="Technology Illustration"
        />
        <div className="tech-info-body">
          <NumberedSlider className="numbered-slider" />
          <div className="tech-info-core">
            <span className="termenology-span">THE TERMINOLOGY…</span>
            <span className="tech-name">{technology.name}</span>
            <span className="tech-description">{technology.description}</span>
          </div>
        </div>
      </div>
      <img
        className="portrait-img"
        src={technology.portraitImg}
        alt="Technology Illustration"
      />
    </div>
  );
};

export default Technology;
