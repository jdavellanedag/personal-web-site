import { MdArrowForward } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";

export const FooterLayout = () => {
  return (
    <div className="footer-content">
      <p className="txt-title">
        <b>
          Let's <br />
          connect
        </b>
      </p>
      <div className="contact">
        <form action="">
          <input className="form-input txt-text" type="text" placeholder="Name" />
          <input className="form-input txt-text" type="email" placeholder="Email" />
          <textarea
            className="form-text txt-text"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <button className="form-btn txt-subtitle">
            <u>Enviar</u>
            <MdArrowForward />
          </button>
        </form>
      </div>
      <div className="link__box link__box-center mt-3">
        <div className="link__box-link">
          <GoMarkGithub className="is-36" />
        </div>
        <div className="link__box-link">
          <GoMarkGithub className="is-36" />
        </div>
        <div className="link__box-link">
          <GoMarkGithub className="is-36" />
        </div>
        <div className="link__box-link">
          <GoMarkGithub className="is-36" />
        </div>
        <div className="link__box-link">
          <GoMarkGithub className="is-36" />
        </div>
      </div>
      <div className="footer-text">
        <p className="txt-text">
          Created by <b>Julian</b> | All reserved 2022 | 🍻 ☕
        </p>
        <p className="txt-text">
          <b>ES</b>| EN
        </p>
      </div>
    </div>
  );
};
