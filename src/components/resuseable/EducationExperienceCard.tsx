import React from "react";
import "../../assets/styles/EducationExperienceCard.less";

interface EducationExperienceCardProps {
  title: string;
  icon: string;
  date: string;
  description: string;
}

const EducationExperienceCard: React.FC<EducationExperienceCardProps> = ({
  title,
  icon,
  date,
  description,
}) => {
  return (
    <div className="educationExperienceCard">
      <div className="cardHeader">
        <div className="cardTitleContainer">
          <img
            src={icon}
            className="cardIcon"
            alt="cardIcon"
          />
          <h1 className="cardTitle">{title}</h1>
        </div>
        <p className="cardDate">{date}</p>
      </div>
      <div className="cardDescriptionContainer">
        <p className="cardDescription">{description}</p>
      </div>
    </div>
  );
};

export default EducationExperienceCard;
