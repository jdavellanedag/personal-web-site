import { MdOutlineStar } from "react-icons/md";

import SkillsBG from "../../assets/img/skills.svg";
import { Skills } from "../../data/data";

export const SkillsLayout = () => {
  const { skills } = Skills;

  return (
    <div className="skills">
      <h2 className="txt-title txt-bar">Skills</h2>
      <div className="skills__box">
        {skills.map((skill) => (
          <div className="skills__box-skill" key={skill.id}>
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
        <img src={SkillsBG} alt="Skills illustration" />
      </div>
    </div>
  );
};
