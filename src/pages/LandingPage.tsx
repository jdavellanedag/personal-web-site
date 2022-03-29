import {
  BlogLayout,
  FooterLayout,
  HeaderLayout,
  JobsLayout,
  ProfileLayout,
  SkillsLayout,
} from "../layouts/";

export const LandingPage = () => {
  return (
    <>
      <header>
        <HeaderLayout />
      </header>
      <main>
        <ProfileLayout />
        <SkillsLayout />
        <JobsLayout />
        <BlogLayout />
      </main>
      <footer>
        <FooterLayout />
      </footer>
    </>
  );
};
