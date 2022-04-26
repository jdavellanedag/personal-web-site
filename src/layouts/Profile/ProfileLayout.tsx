import { MdSend, MdFileDownload } from "react-icons/md";
import ProfileImg from "../../assets/img/foto.jpg";
import { useScroll } from "../../hooks/useScroll";

export const ProfileLayout = () => {
  const { scrollToDiv } = useScroll();

  return (
    <div className="profile">
      <div className="profile__img">
        <img className="profile__img-avatar" src={ProfileImg} alt="" />
      </div>
      <div className="profile__content">
        <div className="profile__content-title">
          <h1 className="txt-title">
            Hi! <br />
            I'm Julian <br />
            Avellaneda
          </h1>
        </div>
        <div className="profile__content-text txt-text">
          <p>
            I'm a <b>Fullstack</b> developer and software engineer, passionate about IT, software
            and coffee. I love to take on challenges and keep up learning and improving.
          </p>
        </div>
        <div className="profile__content-actions">
          <button className="btn" onClick={() => scrollToDiv("contact")}>
            <MdSend className="is-36" />
            Let's talk
          </button>
          <button className="btn">
            <MdFileDownload className="is-36" />
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};
