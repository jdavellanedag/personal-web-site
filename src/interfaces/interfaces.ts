import { RefObject } from "react";
import { IconType } from "react-icons";

export interface AppState {
  refs: RefDiv[];
  lang: string;
}

export interface RefDiv {
  name: string;
  ref: RefObject<HTMLDivElement>;
}

export interface JobData {
  jobs: Job[];
}
export interface Job {
  id: number;
  title: string;
  year: string;
  description: string;
  img: string;
  tags?: Tag[];
  links?: Link[];
}

export interface Link {
  title: string;
  img: IconType;
  link: string;
}

export interface Tag {
  name: string;
}
