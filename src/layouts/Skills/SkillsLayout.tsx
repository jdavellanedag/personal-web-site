import { useGetData } from "../../hooks/useGetData";
import { Skill } from "../../interfaces/skills";
import { SkillWrap } from "./SkillWrap";
import { useState, useEffect } from "react";

import { SkillWrapLoader } from "../../components/Loaders/SkillWrapLoader";

const DEFAULT_LOADING = [0, 1, 3, 4];

export const SkillsLayout = () => {
  const { data } = useGetData<Skill[]>({ resource: "skill" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className="skills">
      <h2 className="txt-title txt-bar">Skills</h2>
      {isLoading && <SkillWrapLoader list={DEFAULT_LOADING} className="skills__box" />}
      {!isLoading && data && <SkillWrap skills={data} className="skills__box" />}
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
