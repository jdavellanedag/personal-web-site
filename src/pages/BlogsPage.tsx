import { HeaderLayout } from "../layouts";
import { Outlet } from "react-router-dom";

import { FooterLinkBoxLayout } from "../layouts/Footer/FooterLinkBoxLayout";

export const BlogsPage = () => {
  return (
    <>
      <header>
        <HeaderLayout />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterLinkBoxLayout lang={"EN"} />
      </footer>
    </>
  );
};
