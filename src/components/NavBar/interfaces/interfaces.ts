import { Props as NavBarProps } from "../NavBar";
import { Props as NavBarMenuProps } from "../NavBarMenu";
import { Props as NavBarItemProps } from "../NavBarItem";
import { Props as NavBarLogoProps } from "../NavBarLogo";

export interface NavBarComponentProps {
  ({ children }: NavBarProps): JSX.Element;
  Image: (Props: NavBarLogoProps) => JSX.Element;
  Menu: (Props: NavBarMenuProps) => JSX.Element;
  Item: (Props: NavBarItemProps) => JSX.Element;
}
