import { createContext, RefObject } from "react";
import { AppState } from "../interfaces/interfaces";

type ContextProps = {
  state: AppState;
  addRef: (ref: RefObject<HTMLDivElement>, name: string) => void;
};

export const AppContext = createContext({} as ContextProps);
