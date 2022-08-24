import { AppState, RefDiv } from "../interfaces/interfaces";

type AppAction = {
  type: "addRef";
  payload: RefDiv[];
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "addRef":
      return {
        ...state,
        refs: action.payload,
      };

    default:
      return state;
  }
};
