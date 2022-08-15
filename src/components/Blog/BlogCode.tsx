import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
  children: React.ReactNode & React.ReactNode[];
  match: RegExpExecArray;
}

export const BlogCode = ({ children, match, ...props }: Props) => {
  return (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, "")}
      style={vscDarkPlus}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  );
};
