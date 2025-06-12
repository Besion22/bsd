import ProjectCard from "../resuseable/ProjectCard";
import viewIcon from "../../assets/images/icons/viewIcon.svg";
import fs from "../../assets/images/fs.png";
import "../../assets/styles/projectsHome.less";
import { useNavigate } from "react-router-dom";
import projectCardNext from "../../assets/images/next.webp";

const ProjectsHome = () => {
  const navigate = useNavigate();

  return (
    <div className="projectsContainer">
      <h1 className="projectsTitle">PROJECTS</h1>
      <div className="cardsContainer">
        <ProjectCard
          title="FRAUDSNITCH"
          description="Click here to visit"
          image={fs}
          icon={viewIcon}
          onClick={() =>
            window.open("https://besion22.github.io/fraudsnitch/#/", "_blank")
          }
        />
        <ProjectCard
          title="NEXTJS PROJECT"
          description="Click here to visit"
          image={projectCardNext}
          icon={viewIcon}
          onClick={() => window.open("https://example.com", "_blank")}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          navigate("/projects");
        }}
        className="viewAllButton"
      >
        View All
      </button>
    </div>
  );
};

export default ProjectsHome;
