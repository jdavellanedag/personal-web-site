import { BlogSumLayout, FooterLayout, JobsLayout, ProfileLayout, SkillsLayout } from "../layouts/";
import NavBar, { NavBarItem, NavBarLogo, NavBarMenu } from "../components/NavBar";

import MainLogo from "../assets/img/logo.png";

export const LandingPage = () => {
  return (
    <>
      <header>
        <NavBar className="nav__bar">
          <NavBarLogo img={MainLogo} className="nav__bar-logo" goTo="home" />
          <NavBarMenu className="nav__bar-menu">
            <NavBarItem goTo="job" scroll className="nav__bar-item txt-subtitle">
              Portfolio
            </NavBarItem>
            <NavBarItem goTo="blog" scroll className="nav__bar-item txt-subtitle">
              Blog
            </NavBarItem>
            <NavBarItem goTo="contact" scroll className="nav__bar-item txt-subtitle">
              Contact
            </NavBarItem>
          </NavBarMenu>
        </NavBar>
      </header>
      <main>
        <ProfileLayout />
        <SkillsLayout />
        <JobsLayout />
        <BlogSumLayout />
      </main>
      <footer>
        <FooterLayout />
      </footer>
    </>
  );
};
