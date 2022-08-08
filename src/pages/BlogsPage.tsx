import { Outlet } from "react-router-dom";

import NavBar, { NavBarItem, NavBarLogo, NavBarMenu } from "../components/NavBar";
import { FooterLinkBoxLayout } from "../layouts/Footer/FooterLinkBoxLayout";

import MainLogo from "../assets/img/logo.png";

export const BlogsPage = () => {
  return (
    <>
      <header>
        <div className="nav__container">
          <NavBar className="nav__bar">
            <NavBarLogo img={MainLogo} className="nav__bar-logo" goTo="home" />
            <NavBarMenu className="nav__bar-menu">
              <NavBarItem goTo="home" className="nav__bar-item txt-subtitle">
                Home
              </NavBarItem>
            </NavBarMenu>
          </NavBar>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterLinkBoxLayout lang={"EN"} />
      </footer>
    </>
  );
};
