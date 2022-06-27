import { gql, useQuery } from "@apollo/client";
import { BlogSumaryData } from "../interfaces/blogs";

interface Props {}

const LATEST_BLOGS = gql`
  query getLatest {
    blogLatest {
      _id
      Title
      Date
      Sumary
      Time
    }
  }
`;

export const useGetBlogs = ({}: Props) => {
  const { loading, error, data } = useQuery<BlogSumaryData>(LATEST_BLOGS);

  return {
    loading,
    data,
    error,
  };
};
