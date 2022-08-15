import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { BlogCode } from "./BlogCode";

interface Props {
  content: string;
}

export const BlogEntry = ({ content }: Props) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <BlogCode children={children} match={match} />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
      className="blog-entry"
    >
      {content}
    </ReactMarkdown>
  );
};
