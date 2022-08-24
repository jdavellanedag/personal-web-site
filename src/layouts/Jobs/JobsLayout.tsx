import { forwardRef } from "react";

import { Carrusel } from "../../components/Carrusel/Carrusel";
import { useGetData } from "../../hooks/useGetData";
import { Job } from "../../interfaces/interfaces";

export const JobsLayout = forwardRef<HTMLDivElement>(({}, ref) => {
  const { data } = useGetData<Job[]>({ resource: "portfolio" });

  return (
    <div ref={ref} className="jobs">
      <h2 className="txt-title txt-bar">Professional experience</h2>
      {data && <Carrusel jobs={data} total={data.length} />}
    </div>
  );
});
