import { MdArrowBackIos, MdArrowForwardIos, MdLaunch, MdHorizontalRule } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";

import CompanyImg from "../../assets/img/company.png";

export const JobsLayout = () => {
  return (
    <div className="jobs">
      <h2 className="txt-title txt-bar">Experiencia</h2>
      <div className="carrusel">
        <div className="carrusel__header">
          <h3 className="txt-subtitle">Empresa 1</h3>
          <div className="tag__box txt-text">
            <div className="tag__box-tag">2021</div>
          </div>
        </div>
        <div className="carrusel__before">
          <MdArrowBackIos className="is-48" />
        </div>
        <div className="carrusel__next">
          <MdArrowForwardIos className="is-48" />
        </div>

        <div className="carrusel__img">
          <img src={CompanyImg} alt="company" />
        </div>
        <div className="carrusel__content">
          <p className="txt-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur magnis sed quisque
            lectus eget amet. Viverra eget ut nunc cursus arcu id. Scelerisque ac purus, lectus arcu
            ac, massa ut cras. Nulla sed adipiscing ultricies sed pellentesque lorem.
          </p>
          <div className="tag__box txt-text">
            <div className="tag__box-tag">Tag 1</div>
            <div className="tag__box-tag">Tag 2</div>
            <div className="tag__box-tag">Tag 3</div>
          </div>
          <div className="link__box">
            <div className="link__box-link">
              <MdLaunch className="is-36" />
            </div>
            <div className="link__box-link">
              <GoMarkGithub className="is-36" />
            </div>
          </div>
        </div>
        <div className="carrusel__nav">
          <span>
            <MdHorizontalRule className="is-48 " />
          </span>
          <span>
            <MdHorizontalRule className="is-48 is-active" />
          </span>
          <span>
            <MdHorizontalRule className="is-48 " />
          </span>
        </div>
      </div>
    </div>
  );
};
