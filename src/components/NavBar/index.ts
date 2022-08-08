import { NavBar as NavBarComponent } from "./NavBar";
import { NavBarLogo } from "./NavBarLogo";
import { NavBarMenu } from "./NavBarMenu";
import { NavBarItem } from "./NavBarItem";

import { NavBarComponentProps } from "./interfaces/interfaces";

export { NavBarMenu } from "./NavBarMenu";
export { NavBarItem } from "./NavBarItem";
export { NavBarLogo } from "./NavBarLogo";

export const NavBar: NavBarComponentProps = Object.assign(NavBarComponent, {
  Image: NavBarLogo,
  Menu: NavBarMenu,
  Item: NavBarItem,
});

export default NavBar;
