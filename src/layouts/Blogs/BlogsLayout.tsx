import { useNavigate } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { BlogEntries } from "../../components/Blog/BlogEntries";

export const BlogsLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-sumary">
      <h2 className="txt-title txt-bar">Blogs</h2>
      <p className="txt-text">
        One of the best things to help you out to keep up with the IT world is sharing your
        knowledge, that is the reason why I have decided to start writing blogs, It help me to study
        and It might be interesting for someone else. <br /> I hope you have a good time reading
        while you grap a nice coffee ☕ (or beer 🍻).
      </p>
      <BlogEntries />
      <button className="btn btn-1" onClick={() => navigate(`/home`)}>
        <TiHomeOutline /> Go Home
      </button>
    </div>
  );
};
