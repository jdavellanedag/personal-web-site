import MainLogo from "../../assets/img/logo.png";
import { NavBar } from "../../components/Header";

export const HeaderLayout = () => {
  return (
    <>
      <NavBar logo={MainLogo}></NavBar>
    </>
  );
};
