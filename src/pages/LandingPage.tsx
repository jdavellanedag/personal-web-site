import { BlogSumLayout, FooterLayout, JobsLayout, ProfileLayout, SkillsLayout } from "../layouts/";
import NavBar, { NavBarItem, NavBarLogo, NavBarMenu } from "../components/NavBar";

import MainLogo from "../assets/img/logo.png";
import { useContext, useLayoutEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";

export const LandingPage = () => {
  const { addRef } = useContext(AppContext);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const jobRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    addRef([
      { ref: contactRef, name: "contact" },
      { ref: blogRef, name: "blog" },
      { ref: jobRef, name: "job" },
    ]);
  }, []);

  return (
    <>
      <header>
        <div className="nav__container">
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
        </div>
      </header>
      <main>
        <ProfileLayout />
        <SkillsLayout />
        <JobsLayout ref={jobRef} />
        <BlogSumLayout ref={blogRef} />
      </main>
      <footer>
        <FooterLayout ref={contactRef} />
      </footer>
    </>
  );
};
