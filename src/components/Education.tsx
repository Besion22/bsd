import EducationExperienceCard from "./resuseable/EducationExperienceCard";
import "../assets/styles/education.less";
import iunsIcon from "../assets/images/icons/iuns.svg";
import afaIcon from "../assets/images/icons/afa.svg";

const Education = () => {
  return (
    <div className="educationContainer">
      <h1 className="educationTitle">EDUCATION</h1>
      <EducationExperienceCard
        title="International University of Struga"
        icon={iunsIcon}
        date="2020–2023"
        description="I hold a Bachelor’s degree in Computer Science from the National University of Struga, graduating with a GPA of 9.0. My studies focused on core subjects like algorithms, data structures, programming languages (HTML, CSS, C#, JavaScript, SQL, PHP), databases, and software engineering. I was honored with an academic scholarship for three consecutive years in recognition of my performance."
      />
      <EducationExperienceCard
        title="The Armed Forces Academy (AFA)"
        icon={afaIcon}
        date="2024–2025"
        description="I hold a Master’s degree in Cybersecurity from the Academy of Armed Forces of Albania, where I built a solid foundation in application and network security, data protection, malware analysis, ethical hacking, and social engineering. My education combines technical expertise with a strategic mindset, and I continue to expand my skills to stay ahead in the ever-evolving world of cybersecurity."
      />
    </div>
  );
};

export default Education;
