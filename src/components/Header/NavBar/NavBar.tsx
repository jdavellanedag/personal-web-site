import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { useScroll } from "../../../hooks/useScroll";
import { MobileMenu } from "./MobileMenu";

interface Props {
  logo: string;
}

export const NavBar = ({ logo }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const { scrollToDiv } = useScroll();

  return (
    <nav className="nav__bar">
      <div className="nav__bar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav__bar-menu">
        {!isMobile && (
          <ul className="nav__bar-menu-items">
            <li className="nav__bar-menu-item txt-subtitle">
              <a onClick={() => scrollToDiv("job")}>Trabajos</a>
            </li>
            <li className="nav__bar-menu-item txt-subtitle">
              <a onClick={() => scrollToDiv("blog")}>Blog</a>
            </li>
            <li className="nav__bar-menu-item txt-subtitle">
              <a onClick={() => scrollToDiv("contact")}>Contacto</a>
            </li>
          </ul>
        )}
      </div>
      <div className="nav__bar-access">{isMobile && <MobileMenu />}</div>
    </nav>
  );
};
