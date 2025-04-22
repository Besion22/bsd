import "../assets/styles/technologies.less";
import adobe from "../assets/images/icons/adobe.svg";
import css from "../assets/images/icons/css.svg";
import figma from "../assets/images/icons/figma.svg";
import html from "../assets/images/icons/html.svg";
import javascript from "../assets/images/icons/javascript.svg";
import kali from "../assets/images/icons/kali.svg";
import nextjs from "../assets/images/icons/nextjs.svg";
import reactjs from "../assets/images/icons/reactjs.svg";
import shopify from "../assets/images/icons/shopify.svg";

const Technologies = () => {
  return (
    <div className="technologies-container">
      <h1>TECHNOLOGIES I'VE WORKED WITH</h1>
      <div className="icons-container">
        <img
          src={reactjs}
          alt="reactjs"
          className="technologyIcon"
        />
        <img
          src={javascript}
          alt="javascript"
          className="technologyIcon"
        />
        <img
          src={nextjs}
          alt="nextjs"
          className="technologyIcon"
        />
        <img
          src={html}
          alt="html"
          className="technologyIcon"
        />
        <img
          src={css}
          alt="css"
          className="technologyIcon"
        />
        <img
          src={adobe}
          alt="adobe"
          className="technologyIcon"
        />
        <img
          src={shopify}
          alt="shopify"
          className="technologyIcon"
        />
        <img
          src={figma}
          alt="figma"
          className="technologyIcon"
        />

        <img
          src={kali}
          alt="kali"
          className="technologyIcon"
        />
      </div>
    </div>
  );
};

export default Technologies;
