import EducationHome from "../components/homeComponents/EducationHome";
import ExperienceHome from "../components/homeComponents/ExperienceHome";
import HomeHero from "../components/homeComponents/HomeHero";
import ProjectsHome from "../components/homeComponents/ProjectsHome";
import TechnologiesHome from "../components/homeComponents/TechnologiesHome";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <TechnologiesHome />
      <ProjectsHome />
      <EducationHome />
      <ExperienceHome />
    </div>
  );
};

export default Home;
