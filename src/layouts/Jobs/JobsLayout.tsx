import { useContext, useLayoutEffect, useRef } from "react";

import { AppContext } from "../../context/AppContext";

import { Data } from "../../data/data";
import { Carrusel } from "../../components/Carrusel/Carrusel";

export const JobsLayout = () => {
  const { addRef } = useContext(AppContext);
  const jobRef = useRef<HTMLDivElement>(null);

  const { jobs } = Data;

  useLayoutEffect(() => {
    addRef(jobRef, "job");
  }, []);

  return (
    <div ref={jobRef} className="jobs">
      <h2 className="txt-title txt-bar">Portfolio</h2>
      <Carrusel jobs={jobs} total={jobs.length} />
    </div>
  );
};
