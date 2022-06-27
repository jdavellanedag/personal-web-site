import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { BlogLayout } from "../layouts";
import { BlogsLayout } from "../layouts/Blogs/BlogsLayout";
import { BlogsPage } from "../pages/BlogsPage";
import { LandingPage } from "../pages/LandingPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<LandingPage />} />
        <Route path="blog" element={<BlogsPage />}>
          <Route path=":blogId" element={<BlogLayout />} />
          <Route path="" element={<BlogsLayout />} />
        </Route>
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
