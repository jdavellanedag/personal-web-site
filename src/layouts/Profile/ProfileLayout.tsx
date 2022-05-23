import { MdSend, MdFileDownload } from "react-icons/md";

import { useScroll } from "../../hooks/useScroll";

import { useGetData } from "../../hooks/useGetData";
import { Link } from "../../interfaces/interfaces";

export const ProfileLayout = () => {
  const { scrollToDiv } = useScroll();
  const { data } = useGetData<Link>({ resource: "link/resume" });

  const onClick = () => {
    window.open(data?.link, "_blank");
  };

  return (
    <div className="profile">
      <div className="profile__img">
        <img
          className="profile__img-avatar"
          src={import.meta.env.VITE_PROFILE_IMG ? import.meta.env.VITE_PROFILE_IMG.toString() : ""}
          alt="Julian Avellaneda"
        />
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
          <button className="btn" onClick={onClick}>
            <MdFileDownload className="is-36" />
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};
