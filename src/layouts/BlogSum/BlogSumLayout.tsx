import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { BlogEntries } from "../../components/Blog/BlogEntries";

export const BlogSumLayout = forwardRef<HTMLDivElement>(({}, ref) => {
  const navigate = useNavigate();

  return (
    <div ref={ref} className="blog-sum">
      <h2 className="txt-title txt-bar">Latest blogs</h2>
      <BlogEntries latest />
      <a className="txt-text over" onClick={() => navigate(`/blog`)}>
        See more
      </a>
    </div>
  );
});
