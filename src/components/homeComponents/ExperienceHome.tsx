import EducationExperienceCard from "../resuseable/EducationExperienceCard";
import "../../assets/styles/experience.less";
import freelancerIcon from "../assets/images/icons/freelancer.svg";
import zentechIcon from "../assets/images/icons/zentech.svg";

const Experience = () => {
  return (
    <div className="experienceContainer">
      <h1 className="experienceTitle">EXPERIENCE</h1>
      <EducationExperienceCard
        title="Freelancer"
        icon={freelancerIcon}
        date="2023–Present"
        description="As a freelance web designer and developer, I specialize in building custom websites using platforms like Shopify, Wix, and WordPress. I’ve created a wide range of digital experiences—including eCommerce stores, business websites, blogs, portfolios, event pages, and personal sites—tailored to each client's unique goals and brand identity."
      />
      <EducationExperienceCard
        title="Zentech Software"
        icon={zentechIcon}
        date="2024–Present"
        description="As a UI/UX Designer and Front-End Developer at ZENTECH SOFTWARE, I craft intuitive and visually engaging interfaces using Figma, while also bringing designs to life through clean, responsive code. I collaborate with cross-functional teams to build user-centric solutions that align with the company’s innovative software products."
      />
    </div>
  );
};

export default Experience;
