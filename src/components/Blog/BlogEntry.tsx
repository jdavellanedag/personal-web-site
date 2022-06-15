import ReactMarkdown from "react-markdown";

interface Props {
  content: string;
}

export const BlogEntry = ({ content }: Props) => {
  return <ReactMarkdown children={content} className="blog-entry" />;
};
