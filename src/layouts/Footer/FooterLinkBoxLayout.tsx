import { SocialLinks } from "../../data/data";

interface Props {
  lang: string;
}

export const FooterLinkBoxLayout = ({ lang }: Props) => {
  return (
    <>
      <div className="link__box link__box-center mt-3 pt-3">
        {SocialLinks.map(({ link, title, img: Icon }) => (
          <a key={title} className="link__box-link pointer over-dark" href={link} target="_blank">
            <Icon className="is-36" />
          </a>
        ))}
      </div>
      <div className="footer-text">
        <p className="txt-text">
          Created by <b>Julian</b> | All reserved 2022 | 🍻 ☕
        </p>
        <p className="txt-text">
          ES | <b>{lang}</b>
        </p>
      </div>
    </>
  );
};
