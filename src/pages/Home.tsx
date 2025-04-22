import Education from "../components/Education";
import Experience from "../components/Experience";
import HomeHero from "../components/HomeHero";
import ProjectsHome from "../components/ProjectsHome";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Technologies />
      <ProjectsHome />
      <Education />
      <Experience />
    </div>
  );
};

export default Home;
