import { RefObject } from "react";

export interface AppState {
  refs: RefDiv[];
}

export interface RefDiv {
  name: string;
  ref: RefObject<HTMLDivElement>;
}
