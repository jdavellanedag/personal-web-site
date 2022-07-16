import MainLogo from "../../assets/img/logo.png";
import NavBar, { NavBarItem, NavBarLogo, NavBarMenu } from "../../components/NavBar2";

export const HeaderLayout = () => {
  return (
    <>
      <NavBar className="nav__bar">
        <NavBarLogo img={MainLogo} className="nav__bar-logo" goTo="home" />
        <NavBarMenu className="nav__bar-menu">
          <NavBarItem className="nav__bar-item txt-subtitle">Portfolio</NavBarItem>
          <NavBarItem className="nav__bar-item txt-subtitle">Blog</NavBarItem>
          <NavBarItem className="nav__bar-item txt-subtitle">Contact</NavBarItem>
        </NavBarMenu>
      </NavBar>
    </>
  );
};
/* export const HeaderLayout = () => {
  return (
    <>
      <NavBar logo={MainLogo}></NavBar>
    </>
  );
}; */
