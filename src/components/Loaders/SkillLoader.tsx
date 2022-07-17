import ContentLoader from "react-content-loader";

interface Props {
  className?: string;
}

export const SkillLoader = ({ className }: Props) => {
  return (
    <ContentLoader
      speed={3}
      width={160}
      height={121}
      viewBox="0 0 160 121"
      backgroundColor="#575757"
      foregroundColor="#202020"
      className={className}
    >
      <rect x="40" y="90" rx="3" ry="3" width="80" height="17" />
      <circle cx="80" cy="41" r="40" />
      <rect x="40" y="110" rx="3" ry="3" width="80" height="11" />
    </ContentLoader>
  );
};
