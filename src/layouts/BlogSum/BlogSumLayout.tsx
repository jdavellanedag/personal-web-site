import { useContext, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BlogEntries } from "../../components/Blog/BlogEntries";
import { AppContext } from "../../context/AppContext";

export const BlogSumLayout = () => {
  const { addRef } = useContext(AppContext);
  const navigate = useNavigate();
  const blogRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    addRef(blogRef, "blog");
  }, []);

  return (
    <div ref={blogRef} className="blog-sum">
      <h2 className="txt-title txt-bar">Latest blogs</h2>
      <BlogEntries />
      <a className="txt-text over" onClick={() => navigate(`/blog`)}>
        See more
      </a>
    </div>
  );
};
