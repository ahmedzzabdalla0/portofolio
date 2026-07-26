import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { Experience } from "@/components/organisms/Experience";
import { TechnicalArsenal } from "@/components/organisms/TechnicalArsenal";
import { SITE_OWNER, RESUME_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: SITE_OWNER.bio,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-subtle py-section px-gutter">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 animate-fade-in-up">
              <Typography variant="h1">{SITE_OWNER.heroHeadline}</Typography>
              <Typography variant="body-lg">{SITE_OWNER.bio}</Typography>
            </div>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-200">
              <Button as={Link} href="/contact" variant="primary" size="lg">
                Contact Me
              </Button>
              <Button as={Link} href={RESUME_URL} variant="secondary" size="lg">
                Download Resume
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center animate-fade-in delay-300">
            <div className="relative w-full max-w-sm aspect-square rounded-xl overflow-hidden border border-subtle">
              <Image
                src="/images/me.jpg"
                alt={SITE_OWNER.photoAlt}
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
      <Experience />
      <TechnicalArsenal />
    </>
  );
}
