import { gql, useQuery } from "@apollo/client";
import { BlogData } from "../interfaces/blogs";

interface Props {
  blogId: string;
}

const BLOG = gql`
  query getBlog($blogId: String!) {
    blogById(_id: $blogId) {
      _id
      Title
      Date
      urlES
      urlEN
    }
  }
`;

export const useGetBlog = ({ blogId }: Props) => {
  const { loading, error, data } = useQuery<BlogData>(BLOG, {
    variables: { blogId },
  });

  return {
    loading,
    data,
    error,
  };
};
