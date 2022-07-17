import { SkillLoader } from "./SkillLoader";

interface Props {
  className?: string;
  list: number[];
}
export const SkillWrapLoader = ({ list, className }: Props) => {
  return (
    <div className={className}>
      {list.map((e) => (
        <SkillLoader key={e} />
      ))}
    </div>
  );
};
