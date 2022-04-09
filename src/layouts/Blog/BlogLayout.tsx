import { useContext, useLayoutEffect, useRef } from "react";
import { AppContext } from "../../context/AppContext";

export const BlogLayout = () => {
  const { addRef } = useContext(AppContext);
  const blogRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    addRef(blogRef, "blog");
  }, []);

  return (
    <div ref={blogRef} className="blogs">
      <h2 className="txt-title txt-bar">Últimos blogs</h2>
      <div className="blog-entries">
        <div className="blog-entry">
          <h3 className="txt-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolores aspernatur.
          </h3>
          <p className="txt-text">20 Mayo 2022 | Tecnologia</p>
          <p className="txt-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam odit, quo commodi
            veritatis porro eligendi corporis tenetur culpa quae repellat hic necessitatibus aut
            doloribus suscipit vitae omnis natus a illum!
          </p>
        </div>
        <div className="blog-entry">
          <h3 className="txt-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolores aspernatur.
          </h3>
          <p className="txt-text">20 Mayo 2022 | Tecnologia</p>
          <p className="txt-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam odit, quo commodi
            veritatis porro eligendi corporis tenetur culpa quae repellat hic necessitatibus aut
            doloribus suscipit vitae omnis natus a illum!
          </p>
        </div>
      </div>
      <a className="txt-text" href="#">
        Ver todo
      </a>
    </div>
  );
};
