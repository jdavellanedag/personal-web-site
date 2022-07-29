import { CSSProperties, ReactElement, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MenuToggle } from "./ManuToggle";

export interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const NavBarMenu = ({ className, style, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 800 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menu.current &&
        button.current &&
        !menu.current.contains(event.target as Node) &&
        !button.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [isOpen]);

  return (
    <>
      <div className={className} style={style} ref={menu}>
        {!isMobile && <ul>{children}</ul>}
        {isOpen && <ul>{children}</ul>}
      </div>
      {isMobile && (
        <div ref={button}>
          <MenuToggle className="menu-toggle" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
      )}
    </>
  );
};
