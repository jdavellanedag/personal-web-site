import { gql, useQuery } from "@apollo/client";
import { BlogSumary, BlogSumaryResponse } from "../interfaces/blogs";

interface Props {
  latest: boolean;
}

const LATEST_BLOGS = gql`
  query getLatest {
    blogLatest {
      _id
      Title
      Date
      Sumary
      Time
      Slug
    }
  }
`;

const BLOGS = gql`
  query getBlogs {
    blogs {
      _id
      Title
      Date
      Sumary
      Time
      Slug
    }
  }
`;

export const useGetBlogs = ({ latest }: Props) => {
  let query = latest ? LATEST_BLOGS : BLOGS;
  const { loading, error, data: response } = useQuery<BlogSumaryResponse>(query);

  const data: BlogSumary[] | undefined = response?.blogLatest
    ? response.blogLatest
    : response?.blogs;

  return {
    loading,
    data,
    error,
  };
};
