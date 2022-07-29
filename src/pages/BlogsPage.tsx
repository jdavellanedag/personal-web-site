import { Outlet } from "react-router-dom";

import NavBar, { NavBarLogo } from "../components/NavBar";
import { FooterLinkBoxLayout } from "../layouts/Footer/FooterLinkBoxLayout";

import MainLogo from "../assets/img/logo.png";

export const BlogsPage = () => {
  return (
    <>
      <header>
        <NavBar className="nav__bar">
          <NavBarLogo img={MainLogo} className="nav__bar-logo" goTo="home" />
        </NavBar>
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
