import { useMediaQuery } from "react-responsive";
import { MobileMenu } from "./MobileMenu";

interface Props {
  logo: string;
}

export const NavBar = ({ logo }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <nav className="nav__bar">
      <div className="nav__bar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav__bar-menu">
        {!isMobile && (
          <ul className="nav__bar-menu-items">
            <li className="nav__bar-menu-item txt-subtitle">
              <a href="">Trabajos</a>
            </li>
            <li className="nav__bar-menu-item txt-subtitle">
              <a href="">Blog</a>
            </li>
            <li className="nav__bar-menu-item txt-subtitle">
              <a href="">Resumen</a>
            </li>
          </ul>
        )}
      </div>
      <div className="nav__bar-access">{isMobile && <MobileMenu />}</div>
    </nav>
  );
};
