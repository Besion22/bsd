import "../assets/styles/footer.less";
import linkedin from "../assets/images/icons/linkedin.svg";
import mail from "../assets/images/icons/mail.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="items-container">
        <h3>Besioni Demko | {currentYear}</h3>
        <div className="socials-container">
          <a
            href="https://www.linkedin.com/in/besioni-demko-193b11223/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedin"
            />
          </a>
          <a href="mailto:besion7@gmail.com?subject=Let's%20Connect&body=Hi%20Besioni%2C%0AI%20wanted%20to%20reach%20out%20about...">
            <img
              src={mail}
              alt="mail"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
