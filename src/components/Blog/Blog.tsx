import { useGetBlog } from "../../hooks/useGetBlog";
import { NoData } from "../General/NoData";
import { BlogEntry } from "./BlogEntry";

interface Props {
  blogId?: string;
}

export const Blog = ({ blogId = "" }: Props) => {
  const { data } = useGetBlog({ blogId });

  return data?.blogById.urlEN ? (
    <BlogEntry content={data?.blogById.urlEN} />
  ) : (
    <NoData redirectTo="blog" />
  );
};
