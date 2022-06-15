import { useNavigate } from "react-router-dom";

import { TiArrowBackOutline } from "react-icons/ti";
import Image from "../../assets/img/no-data.svg";

interface Props {
  redirectTo: string;
}

export const NoData = ({ redirectTo }: Props) => {
  const navigate = useNavigate();

  const handleClick = (resource: string) => {
    navigate(`/${resource}`);
  };

  return (
    <div className="no-data mt-3">
      <div className="no-data-img">
        <img src={Image} alt="No data" />
      </div>
      <div className="no-data-text">
        <p className="txt-title bold">Whoops!</p>
        <p className="txt-subtitle">We could not find the page</p>
        <p className="txt-text">
          It seems that this page does not exist, but do not worry, we have wonderful content, just
          click the button below.
        </p>
      </div>
      <div className="no-data-form mt-3">
        <button className="btn" onClick={() => handleClick(redirectTo)}>
          <TiArrowBackOutline /> Go Back
        </button>
      </div>
    </div>
  );
};
