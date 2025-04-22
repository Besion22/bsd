import EducationExperienceCard from "./resuseable/EducationExperienceCard";
import "../assets/styles/experience.less";
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
        description="I hold a Bachelor’s degree in Computer Science from the National University of Struga, graduating with a GPA of 9.0. My studies focused on core subjects like algorithms, data structures, programming languages (HTML, CSS, C#, JavaScript, SQL, PHP), databases, and software engineering. I was honored with an academic scholarship for three consecutive years in recognition of my performance."
      />
      <EducationExperienceCard
        title="Zentech Software"
        icon={zentechIcon}
        date="2024–Present"
        description="I hold a Master’s degree in Cybersecurity from the Academy of Armed Forces of Albania, where I built a solid foundation in application and network security, data protection, malware analysis, ethical hacking, and social engineering. My education combines technical expertise with a strategic mindset, and I continue to expand my skills to stay ahead in the ever-evolving world of cybersecurity."
      />
    </div>
  );
};

export default Experience;
