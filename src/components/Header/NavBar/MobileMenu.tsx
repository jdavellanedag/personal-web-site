import { useState, useEffect, useRef } from "react";
import { useScroll } from "../../../hooks/useScroll";
import { MenuToggle } from "./MenuToggle";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenu = useRef<HTMLDivElement>(null);
  const { scrollToDiv } = useScroll();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && mobileMenu.current && !mobileMenu.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [isOpen]);

  const handleClick = (name: string) => {
    setIsOpen(!isOpen);
    scrollToDiv(name);
  };

  return (
    <>
      <div ref={mobileMenu}>
        <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <div className="mobile__menu">
            <ul className="mobile__menu-items">
              <li className="mobile__menu-item txt-subtitle">
                <a onClick={() => handleClick("job")}>Portfolio</a>
              </li>
              <li className="mobile__menu-item txt-subtitle">
                <a onClick={() => handleClick("blog")}>Blog</a>
              </li>
              <li className="mobile__menu-item txt-subtitle">
                <a onClick={() => handleClick("contact")}>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
