import { useGetBlog } from "../../hooks/useGetBlog";
import { NoData } from "../General/NoData";
import { BlogEntry } from "./BlogEntry";

interface Props {
  slug?: string;
}

export const Blog = ({ slug = "" }: Props) => {
  const { data } = useGetBlog({ slug });

  return data?.blogBySlug.urlEN ? (
    <BlogEntry content={data?.blogBySlug.urlEN} />
  ) : (
    <NoData redirectTo="blog" />
  );
};
