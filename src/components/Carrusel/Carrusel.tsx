import { MdArrowBackIos, MdArrowForwardIos, MdLaunch, MdHorizontalRule } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";

import { Job } from "../../interfaces/interfaces";
import { CarruselWrapper } from "./CarruselWrapper";
import { useState } from "react";

interface Props {
  jobs: Job[];
  total: number;
}

export const Carrusel = ({ jobs, total }: Props) => {
  const [active, setActive] = useState(1);

  const handleClick = (value: number) => {
    setActive((prev) => {
      if (prev + value < 1) return total;
      if (prev + value > total) return 1;
      return prev + value;
    });
  };

  return (
    <>
      <div className="carrusel">
        <CarruselWrapper job={jobs[active - 1]} />
        <div className="carrusel__before">
          <MdArrowBackIos className="is-48 pointer" onClick={() => handleClick(-1)} />
        </div>
        <div className="carrusel__next">
          <MdArrowForwardIos className="is-48 pointer" onClick={() => handleClick(+1)} />
        </div>
        <div className="carrusel__nav">
          <span className="carrusel__nav-actual">
            <b>{active}</b>
          </span>
          {[...Array(total)].map((n, i) => (
            <span key={i}>
              <MdHorizontalRule
                className={`is-48 pointer-path ${active === i + 1 && "is-active"}`}
                onClick={() => setActive(i + 1)}
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
