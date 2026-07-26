import type { Metadata } from "next";
import { Hero } from "@/components/organisms/Hero";
import { Services } from "@/components/organisms/Services";
// import { Articles } from "@/components/organisms/Articles";
import { Experience } from "@/components/organisms/Experience";
import { Projects } from "@/components/organisms/Projects";
import { SITE_OWNER } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_OWNER.name,
  description: SITE_OWNER.bio,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      {/* <Articles /> */}
      <Experience />
      <Projects limit={3} showViewAll />
    </>
  );
}
