import { useNavigate, useParams } from "react-router-dom";
import { TiArrowBackOutline, TiHomeOutline } from "react-icons/ti";
import { Blog } from "../../components/Blog/Blog";

export const BlogLayout = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  // TODO Add go back button
  // TODO Add blog navigation

  return (
    <>
      <Blog blogId={blogId} />
      <div className="blog-nav">
        <button className="btn btn-1" onClick={() => navigate(`/blog`)}>
          <TiArrowBackOutline /> More blogs
        </button>
        <button className="btn btn-1" onClick={() => navigate(`/home`)}>
          <TiHomeOutline /> Go Home
        </button>
      </div>
    </>
  );
};
