import { CSSProperties, ReactElement } from "react";
import { useMediaQuery } from "react-responsive";
import { MenuToggle } from "../Header/NavBar/MenuToggle";

export interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const NavBarMenu = ({ className, style, children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return (
    <>
      <div className={className} style={style}>
        {!isMobile && <ul>{children}</ul>}
      </div>
      {isMobile && <MenuToggle isOpen={false} toggle={() => true} />}
    </>
  );
};
