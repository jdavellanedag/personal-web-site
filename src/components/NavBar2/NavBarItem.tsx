import { CSSProperties } from "react";

export interface Props {
  children: string;
  className?: string;
  style?: CSSProperties;
}

export const NavBarItem = ({ className, style, children }: Props) => {
  return (
    <li className={className} style={style}>
      <a href="">{children}</a>
    </li>
  );
};
