import { createContext } from "react";
import { AppState, RefDiv } from "../interfaces/interfaces";

type ContextProps = {
  state: AppState;
  addRef: (refs: RefDiv[]) => void;
};

export const AppContext = createContext({} as ContextProps);
