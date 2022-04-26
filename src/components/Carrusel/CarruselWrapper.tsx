import { MdLaunch } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";

import { Job } from "../../interfaces/interfaces";

interface Props {
  job: Job;
}

export const CarruselWrapper = ({ job }: Props) => {
  return (
    <div className={`carrusel__wrapper `}>
      <div className={`carrusel__header`}>
        <h3 className="txt-subtitle">{job.title}</h3>
        <div className="tag__box txt-text">
          <div className="tag__box-tag">{job.year}</div>
        </div>
      </div>
      <div className={`carrusel__img`}>
        <img src={job.img} alt={job.title} />
      </div>
      <div className={`carrusel__content`}>
        <p className="txt-text">{job.description}</p>
        <div className="tag__box txt-text">
          {job.tags &&
            job.tags.map((tag) => (
              <div key={tag.name} className="tag__box-tag">
                {tag.name}
              </div>
            ))}
        </div>
        <div className={`link__box`}>
          {job.links &&
            job.links.map((link) => (
              <div key={link.title} className="link__box-link pointer">
                <a href={link.link}>{link.img}</a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
