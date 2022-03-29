import MainLogo from "../../assets/img/JA.svg";
import { MdSend, MdMenu } from "react-icons/md";

export const HeaderLayout = () => {
  return (
    <>
      <nav className="nav__bar">
        <button className="btn nav__bar-button">
          <MdSend className="is-36" />
          <span className="nav__bar-button-txt"> Contactar </span>
        </button>
        <div className="nav__bar-logo">
          <img src={MainLogo} alt="Main Logo" />
        </div>
        <div className="nav__bar-menu">
          <MdMenu className="is-48 is-light" />
        </div>
        <ul className="nav__bar-items txt-text">
          <li className="nav__bar-items-item">Trabajos</li>
          <li className="nav__bar-items-item">Blog</li>
          <li className="nav__bar-items-item">Resume</li>
        </ul>
      </nav>
    </>
  );
};
