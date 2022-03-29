import { MdOutlineStar } from "react-icons/md";

import NestLogo from "../../assets/img/nestjs-logo.svg";
import CompanyLogo from "../../assets/img/company.png";

const skills = [
  {
    name: "Nombre",
    img: NestLogo,
    stars: 3,
  },
  {
    name: "Nombre",
    img: NestLogo,
    stars: 3,
  },
  {
    name: "Nombre",
    img: NestLogo,
    stars: 3,
  },
  {
    name: "Nombre",
    img: NestLogo,
    stars: 3,
  },
  {
    name: "Nombre",
    img: NestLogo,
    stars: 3,
  },
  {
    name: "Nombre",
    img: NestLogo,
    stars: 3,
  },
];

export const SkillsLayout = () => {
  return (
    <div className="skills">
      <h2 className="txt-title txt-bar">Skills</h2>
      <div className="skills__box">
        {skills.map((skill, i) => (
          <div className="skills__box-skill" key={i}>
            <img className="skills__box-skill-logo" src={NestLogo} alt="Logo" />
            <p className="txt-text bold">{skill.name}</p>
            <div className="skills__box-starts">
              <MdOutlineStar className="is-active" />
              <MdOutlineStar className="is-active" />
              <MdOutlineStar className="is-active" />
            </div>
          </div>
        ))}
      </div>
      <div className="skills__message">
        <p className="txt-text txt-bar">
          +2 años de experiencia
          <br />
          Listo para seguir aprendiendo...
        </p>
      </div>
      <div className="skills__img">
        <img src={CompanyLogo} alt="company" />
      </div>
    </div>
  );
};
