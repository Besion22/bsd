import { useState } from "react";
import { Palette, Code, ShieldCheck } from "lucide-react";
import "../../assets/styles/allProjects.less";
import ProjectCard from "../resuseable/ProjectCard";
import viewIcon from "../../assets/images/icons/viewIcon.svg";
import projectCardImg from "../../assets/images/projectCardImg.avif";
import projectCardNext from "../../assets/images/next.webp";
import fs from "../../assets/images/fs.png";
const AllProjects = () => {
  const [activeTab, setActiveTab] = useState("design");

  const renderContent = () => {
    switch (activeTab) {
      case "design":
        return (
          <div className="tabContent">
            <ProjectCard
              title="NEXTJS PROJECT"
              description="Click here to visit"
              image={projectCardNext}
              icon={viewIcon}
              onClick={() => window.open("https://example.com", "_blank")}
            />
            <ProjectCard
              title="NEXTJS PROJECT"
              description="Click here to visit"
              image={projectCardNext}
              icon={viewIcon}
              onClick={() => window.open("https://example.com", "_blank")}
            />
            <ProjectCard
              title="HTML TUTORIAL"
              description="Click here to visit"
              image={projectCardImg}
              icon={viewIcon}
              onClick={() => window.open("https://example.com", "_blank")}
            />
            <ProjectCard
              title="NEXTJS PROJECT"
              description="Click here to visit"
              image={projectCardNext}
              icon={viewIcon}
              onClick={() => window.open("https://example.com", "_blank")}
            />
          </div>
        );
      case "development":
        return (
          <div className="tabContent">
            <ProjectCard
              title="HTML TUTORIAL"
              description="Click here to visit"
              image={projectCardImg}
              icon={viewIcon}
              onClick={() => window.open("https://example.com", "_blank")}
            />
            <ProjectCard
              title="NEXTJS PROJECT"
              description="Click here to visit"
              image={projectCardNext}
              icon={viewIcon}
              onClick={() => window.open("https://example.com", "_blank")}
            />
          </div>
        );
      case "cyber":
        return (
          <div className="tabContent">
            <ProjectCard
              title="FRAUDSNITCH"
              description="Click here to visit"
              image={fs}
              icon={viewIcon}
              onClick={() =>
                window.open(
                  "https://besion22.github.io/fraudsnitch/#/",
                  "_blank"
                )
              }
            />
            <ProjectCard
              title="NEXTJS PROJECT"
              description="Click here to visit"
              image={projectCardNext}
              icon={viewIcon}
              onClick={() => window.open("https://example.com", "_blank")}
            />
            <ProjectCard
              title="NEXTJS PROJECT"
              description="Click here to visit"
              image={projectCardNext}
              icon={viewIcon}
              onClick={() => window.open("https://example.com", "_blank")}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="allProjectsContainer">
      <h1 className="allProjectsTitle">PROJECTS</h1>
      <div className="tabs">
        <div
          className={`tab ${activeTab === "design" ? "active" : ""}`}
          onClick={() => setActiveTab("design")}
        >
          <Palette
            size={18}
            className={activeTab === "design" ? "activeIcon" : ""}
          />
          UI/UX Design
        </div>
        <div
          className={`tab ${activeTab === "development" ? "active" : ""}`}
          onClick={() => setActiveTab("development")}
        >
          <Code
            size={18}
            className={activeTab === "development" ? "activeIcon" : ""}
          />
          Web Development
        </div>
        <div
          className={`tab ${activeTab === "cyber" ? "active" : ""}`}
          onClick={() => setActiveTab("cyber")}
        >
          <ShieldCheck
            size={18}
            className={activeTab === "cyber" ? "activeIcon" : ""}
          />
          Cybersecurity
        </div>
      </div>
      <div className="projects">{renderContent()}</div>
    </div>
  );
};

export default AllProjects;
