import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { Icon } from "@/components/atoms/Icon";
import { SITE_OWNER, RESUME_URL } from "@/lib/constants";

function Hero() {
  return (
    <section className="flex flex-col items-center text-center gap-8 border-b border-subtle py-section px-gutter">
      <div className="relative animate-fade-in">
        <Image
          src="/images/me.jpg"
          alt={SITE_OWNER.photoAlt}
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover border-2 border-primary-container/50 shadow-glow-primary"
          priority
        />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-container rounded-full border-2 border-background animate-pulse-glow" />
      </div>

      <div className="flex flex-col gap-4 animate-fade-in-up delay-100">
        <Typography variant="h1">
          Ahmed Mohamed <span className="text-primary-container block">Abdelsalam</span>
        </Typography>
        <Typography variant="body-lg" className="max-w-lg mx-auto">
          {SITE_OWNER.title} | {SITE_OWNER.tagline}
        </Typography>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-center animate-fade-in-up delay-200">
        <Button as={Link} href={RESUME_URL} variant="primary" size="lg">
          <Icon name="download" size="sm" />
          Download CV
        </Button>
        <Button as={Link} href="/contact" variant="secondary" size="lg">
          Let&apos;s Collaborate
          <Icon name="arrow_forward" size="sm" />
        </Button>
      </div>
    </section>
  );
}

export { Hero };
