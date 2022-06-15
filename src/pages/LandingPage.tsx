import {
  BlogSumLayout,
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
        <BlogSumLayout />
      </main>
      <footer>
        <FooterLayout />
      </footer>
    </>
  );
};
