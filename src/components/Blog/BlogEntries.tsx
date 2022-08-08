import { useNavigate } from "react-router-dom";
import { useGetBlogs } from "../../hooks/useGetBlogs";
import { formatDate } from "../../utils/TimeUtils";

export const BlogEntries = () => {
  const { data } = useGetBlogs({});
  const navigate = useNavigate();

  const handleClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  //TODO Add category
  return (
    <div className="blog-sumary">
      <div className="blog-sumary-entries">
        {data?.blogLatest.map(({ _id, Title, Date, Sumary, Time, Slug: slug }) => (
          <div key={_id} className="blog-sumary-entry" onClick={() => handleClick(slug)}>
            <h3 className="txt-text">{Title}</h3>
            <p className="txt-text">
              {`${formatDate(Date)}`} | ⏳ {Time}
            </p>
            <hr />
            <p className="txt-text txt-justify">{Sumary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
