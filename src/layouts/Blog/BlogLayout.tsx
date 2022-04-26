import { useContext, useLayoutEffect, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { Blog } from "../../data/data";

export const BlogLayout = () => {
  const { addRef } = useContext(AppContext);
  const { blogs } = Blog;
  const blogRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    addRef(blogRef, "blog");
  }, []);

  return (
    <div ref={blogRef} className="blogs">
      <h2 className="txt-title txt-bar">Latest blogs</h2>
      <div className="blog-entries">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-entry">
            <h3 className="txt-text">{blog.title}</h3>
            <p className="txt-text">{`${blog.date} | ${blog.subtitle} `}</p>
            <p className="txt-text">{blog.description}</p>
          </div>
        ))}
      </div>
      <a className="txt-text" href="#">
        See more
      </a>
    </div>
  );
};
