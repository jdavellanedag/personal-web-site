import { useReducer } from "react";
import { AppState, RefDiv } from "../interfaces/interfaces";
import { AppContext } from "./AppContext";
import { appReducer } from "./appReducer";

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: AppState = {
  refs: [],
  lang: "EN",
};

export const AppProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const addRef = (refs: RefDiv[]) => {
    dispatch({ type: "addRef", payload: refs });
  };

  return <AppContext.Provider value={{ state, addRef }}>{children}</AppContext.Provider>;
};
