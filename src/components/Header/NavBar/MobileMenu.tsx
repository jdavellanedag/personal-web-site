import { useState } from "react";
import { MenuToggle } from "./MenuToggle";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="mobile__menu">
          <ul className="mobile__menu-items">
            <li className="mobile__menu-item txt-subtitle">
              <a href="" onClick={() => setIsOpen(!isOpen)}>
                Trabajos
              </a>
            </li>
            <li className="mobile__menu-item txt-subtitle">
              <a href="" onClick={() => setIsOpen(!isOpen)}>
                Blog
              </a>
            </li>
            <li className="mobile__menu-item txt-subtitle">
              <a href="" onClick={() => setIsOpen(!isOpen)}>
                Resumen
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
