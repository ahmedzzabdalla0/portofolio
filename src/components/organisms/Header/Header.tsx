"use client";

import Link from "next/link";
import { useState } from "react";
import { NavLink } from "@/components/molecules/NavLink";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { NAV_ITEMS, RESUME_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#121212]/90 backdrop-blur-xl border-b border-subtle">
      <div className="flex justify-between items-center max-w-container mx-auto px-gutter h-20">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-tighter text-on-surface hover:text-primary-container transition-colors duration-250"
        >
          AHMED.DEV
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button as={Link} href={RESUME_URL} variant="ghost">
            Resume
          </Button>
        </div>

        <button
          className="md:hidden text-on-surface hover:text-primary-container transition-colors duration-250"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <Icon name={isMobileMenuOpen ? "close" : "menu"} size="lg" />
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-base",
          isMobileMenuOpen ? "max-h-96 border-t border-subtle" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-gutter py-4" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label text-label text-secondary uppercase tracking-widest py-3 px-2 hover:text-on-surface hover:bg-white/[0.03] rounded-md transition-colors duration-250"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button as={Link} href={RESUME_URL} variant="secondary" className="mt-4">
            Resume
          </Button>
        </nav>
      </div>
    </header>
  );
}

export { Header };
