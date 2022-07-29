import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll";

export interface Props {
  children: string;
  goTo: string;
  scroll?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const NavBarItem = ({ className, style, children, goTo, scroll }: Props) => {
  const { scrollToDiv } = useScroll();

  return (
    <li className={className} style={style}>
      {scroll && <a onClick={() => scrollToDiv(goTo)}>{children}</a>}
      {!scroll && <Link to={`/${goTo}`}>{children}</Link>}
    </li>
  );
};
