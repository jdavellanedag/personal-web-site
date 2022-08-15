import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
  inline: boolean;
  className: string;
  children: string;
}

export const CodeBlog = ({ inline, className, children }: Props) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div">
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className}>{children}</code>
  );
};
