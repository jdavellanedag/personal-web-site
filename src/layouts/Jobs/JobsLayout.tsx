import { useContext, useLayoutEffect, useRef } from "react";

import { AppContext } from "../../context/AppContext";

import { Carrusel } from "../../components/Carrusel/Carrusel";
import { useGetData } from "../../hooks/useGetData";
import { Job } from "../../interfaces/interfaces";

export const JobsLayout = () => {
  const { addRef } = useContext(AppContext);
  const { data } = useGetData<Job[]>({ resource: "portfolio" });
  const jobRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    addRef(jobRef, "job");
  }, []);

  return (
    <div ref={jobRef} className="jobs">
      <h2 className="txt-title txt-bar">Professional experience</h2>
      {data && <Carrusel jobs={data} total={data.length} />}
    </div>
  );
};
