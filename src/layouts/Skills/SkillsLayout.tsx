import { useLayoutEffect } from "react";

import { useGetData } from "../../hooks/useGetData";
import { Skill } from "../../interfaces/skills";
import { SkillWrap } from "./SkillWrap";

export const SkillsLayout = () => {
  const { data } = useGetData<Skill[]>({ resource: "skill" });

  return (
    <div className="skills">
      <h2 className="txt-title txt-bar">Skills</h2>
      {data && <SkillWrap skills={data} />}
      <div className="skills__message">
        <p className="txt-text txt-bar">
          + More and more skills 😎
          <br />
          + 2 years working experience 💪
          <br />
          Ready to keep on learning 🤓 ...
        </p>
      </div>
      <div className="skills__img">
        <img
          src={import.meta.env.VITE_SKILLS_IMG ? import.meta.env.VITE_SKILLS_IMG.toString() : ""}
          alt="Skills illustration"
        />
      </div>
    </div>
  );
};

/* data.map((skill) => <SkillWrap key={skill.id} skill={skill} />) */
