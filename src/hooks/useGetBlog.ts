import { gql, useQuery } from "@apollo/client";
import { BlogData } from "../interfaces/blogs";

interface Props {
  slug?: string;
}

const BLOG_BY_SLUG = gql`
  query getBlogBySlug($slug: String!) {
    blogBySlug(slug: $slug) {
      _id
      Title
      Date
      urlES
      urlEN
    }
  }
`;

export const useGetBlog = ({ slug }: Props) => {
  const {
    loading: loading,
    error: error,
    data: data,
  } = useQuery<BlogData>(BLOG_BY_SLUG, {
    variables: { slug },
  });

  return {
    loading,
    data,
    error,
  };
};
