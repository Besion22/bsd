import "../../assets/styles/homeHero.less";
import avatar from "../../assets/images/avatar.svg";
import { useNavigate } from "react-router-dom";
const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <img
        className="avatar"
        src={avatar}
        alt="avatar"
      />
      <div className="text-container">
        <h1>CRAFT. CODE. PROTECT.</h1>
        <p>
          Hi, my name is Besioni Demko and I’m a UI/UX designer and front-end
          developer with a strong foundation in cybersecurity. I craft intuitive
          designs, build seamless digital experiences, and ensure security at
          every step. Let’s create something remarkable—visually stunning,
          highly functional, and secure by design.
        </p>
        <div className="buttons-container">
          <button
            type="button"
            onClick={() => {
              navigate("/contact");
            }}
            className="connect-button"
          >
            Let's Connect
          </button>
          <button className="cv-button">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
