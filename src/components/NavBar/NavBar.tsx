import { createContext, CSSProperties, ReactElement } from "react";

interface NavBarContextProp {}

export const NavBarContext = createContext({} as NavBarContextProp);
const { Provider } = NavBarContext;

export interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const NavBar = ({ children, className, style }: Props) => {
  return (
    <Provider value={""}>
      <nav className={className} style={style}>
        {children}
      </nav>
    </Provider>
  );
};
