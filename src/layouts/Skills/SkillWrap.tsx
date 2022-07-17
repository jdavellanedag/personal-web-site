import { MdOutlineStar } from "react-icons/md";

import { Skill } from "../../interfaces/skills";

interface Props {
  className?: string;
  skills: Skill[];
}

export const SkillWrap = ({ skills, className }: Props) => {
  return (
    <div className={`${className}`}>
      {skills.map((skill) => (
        <div className="skills__box-skill" key={skill._id}>
          <img className="skills__box-skill-logo" src={skill.img} alt="Logo" />
          <p className="txt-text bold">{skill.name}</p>
          <div className="skills__box-starts">
            {[...Array(skill.stars)].map((n, i) => (
              <MdOutlineStar key={i} className="is-active" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
