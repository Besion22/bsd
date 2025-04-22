import React from "react";
import "../../assets/styles/projectCard.less";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  icon: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  icon,
  onClick,
}) => {
  return (
    <div
      className="projectCard"
      onClick={onClick}
    >
      <div className="imageContainer">
        <img
          className="projectCardImg"
          src={image}
          alt={title}
        />
      </div>
      <div className="textContainer">
        <div className="textLeft">
          <p>{description}</p>
          <h1>{title}</h1>
        </div>
        <div className="textRight">
          <img
            className="viewIcon"
            src={icon}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
