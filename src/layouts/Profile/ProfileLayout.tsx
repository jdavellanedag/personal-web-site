import { MdSend, MdFileDownload } from "react-icons/md";
import ProfileImg from "../../assets/img/foto.jpg";

export const ProfileLayout = () => {
  return (
    <div className="profile">
      <div className="profile__img">
        <img className="profile__img-avatar" src={ProfileImg} alt="" />
      </div>
      <div className="profile__content">
        <div className="profile__content-title">
          <h1 className="txt-title">
            Hola! <br />
            Soy Julian <br />
            Avellaneda
          </h1>
        </div>
        <div className="profile__content-text txt-text">
          <p>
            Soy un Desarrollador e Ingeniero de sistemas, apacionado por el mundo del software y
            dispuesto a asumir cualquier reto.
          </p>
        </div>
        <div className="profile__content-actions">
          <button className="btn">
            <MdSend className="is-36" />
            Contactame
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
