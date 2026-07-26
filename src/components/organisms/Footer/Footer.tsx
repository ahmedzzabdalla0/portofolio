import Link from "next/link";
import { SOCIAL_LINKS, SITE_OWNER } from "@/lib/constants";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-subtle bg-surface-container-lowest">
      <div className="max-w-container mx-auto py-16 px-gutter flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-label text-label text-secondary uppercase tracking-widest">
          © {currentYear} {SITE_OWNER.name}.
        </p>
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label text-label text-secondary uppercase tracking-widest hover:text-primary-container transition-colors duration-250"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export { Footer };
