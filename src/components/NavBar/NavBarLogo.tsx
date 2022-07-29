import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

export interface Props {
  img: string;
  goTo?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}

export const NavBarLogo = ({ img, alt = "Logo", goTo, className, style }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${goTo}`);
  };

  return (
    <div className={className} onClick={handleClick}>
      <img src={img} alt={alt} style={style} />
    </div>
  );
};
