"use client";

import Link from "next/link";
import { forwardRef, useEffect, useState } from "react";
import {
  ChevronDown,
  Handshake,
  Headset,
  Home,
  Info,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  Globe,
  Mail,
  Menu,
  Mic2,
  Phone,
  PlayCircle,
  Radio,
  Users,
} from "lucide-react";
import Logo from "@/components/shared/Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "About",
    href: "/about",
    icon: Info,
    dropdown: [
      { name: "About GSN", href: "/about", icon: Info },
      { name: "Collaboration", href: "/about/collaboration", icon: Handshake },
    ],
  },
  { name: "Conferences", href: "/conferences", icon: CalendarDays },
  {
    name: "Speaker",
    href: "/speaker",
    icon: Mic2,
    dropdown: [
      { name: "Eligibility Criteria", href: "/speaker/criteria", icon: CheckCircle2 },
      { name: "Our Past Speakers", href: "/speaker/past-speakers", icon: Users },
      { name: "Speaker Application", href: "/speaker/apply", icon: FileText },
    ],
  },
  {
    name: "Committee Member",
    href: "/committee",
    icon: Users,
    dropdown: [
      { name: "Our Committee Members", href: "/committee", icon: Users },
      { name: "Advisory Board Members", href: "/committee/advisory-board", icon: ClipboardList },
      { name: "Apply For Committee", href: "/committee/application", icon: FileText },
    ],
  },
  {
    name: "Journal",
    href: "/journal",
    icon: BookOpen,
    dropdown: [
      { name: "Journal Insights", href: "/journal", icon: BookOpen },
      { name: "Publication Process", href: "/journal/publication-process", icon: ClipboardList },
      { name: "Publications", href: "/journal/publications", icon: FileText },
    ],
  },
  { name: "Invitation Letter", href: "/invitation-letter", icon: FileText },
  { name: "Contact Us", href: "/contact", icon: Headset },
  { name: "Sponsorship", href: "/sponsorship", icon: Handshake },
];

const socialLinks = [
  { name: "Facebook", Icon: Globe },
  { name: "LinkedIn", Icon: Radio },
  { name: "YouTube", Icon: PlayCircle },
];

function DesktopNavigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav aria-label="Main navigation" className="hidden w-full border-b border-gray-100 lg:block">
      <ul className="mx-auto flex max-w-7xl items-center justify-center gap-4 overflow-visible px-4 py-2 xl:gap-6">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="relative"
            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
            onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
          >
            {link.dropdown ? (
              <>
                <button
                  type="button"
                  aria-expanded={activeDropdown === link.name}
                  className="group relative flex cursor-pointer items-center gap-1 whitespace-nowrap text-xs font-semibold text-[#1A3A32] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:text-[#D4AF37] hover:after:w-full"
                >
                  <link.icon className="size-3.5" />
                  {link.name}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      activeDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-full z-[110] mt-2 w-64 origin-top rounded-md border border-gray-100 bg-white/95 py-2 shadow-xl backdrop-blur-md before:absolute before:-top-2 before:left-0 before:h-2 before:w-full will-change-[opacity,transform,filter] transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeDropdown === link.name
                      ? "pointer-events-auto translate-y-0 scale-100 blur-0 opacity-100"
                      : "pointer-events-none translate-y-2 scale-95 blur-sm opacity-0"
                  }`}
                >
                  {link.dropdown.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="group relative flex items-center gap-2 overflow-hidden px-4 py-2 text-sm text-gray-600 transition-[color,background-color] duration-300 ease-out hover:bg-[#F9F9F6] hover:text-[#1A3A32] before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:origin-bottom before:scale-y-0 before:bg-[#D4AF37] before:transition-transform before:duration-300 before:ease-out before:content-[''] hover:before:scale-y-100"
                    >
                      <child.icon className="size-4 shrink-0 text-[#D4AF37]" />
                      {child.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={link.href}
                className="relative flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold text-[#1A3A32] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:text-[#D4AF37] hover:after:w-full"
              >
                <link.icon className="size-3.5" />
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav aria-label="Mobile navigation">
      <ul>
        {navLinks.map((link) => (
          <li key={link.name} className="border-b border-gray-100">
            {link.dropdown ? (
              <>
                <button
                  type="button"
                  aria-expanded={openDropdown === link.name}
                  onClick={() =>
                    setOpenDropdown((current) =>
                      current === link.name ? null : link.name,
                    )
                  }
                  className="flex w-full cursor-pointer items-center justify-between py-3 font-serif text-lg text-[#1A3A32] transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  <link.icon className="size-4" />
                  {link.name}
                  <ChevronDown
                    className={`size-5 transition-transform duration-300 ${
                      openDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden pl-3 transition-[grid-template-rows,opacity] duration-300 ${
                    openDropdown === link.name
                      ? "grid-rows-[1fr] pb-2 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 border-l border-[#D4AF37]/60">
                    {link.dropdown.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#D4AF37]"
                      >
                        <child.icon className="size-4 shrink-0 text-[#D4AF37]" />
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <Link
                href={link.href}
                className="flex cursor-pointer items-center gap-2 py-3 font-serif text-lg text-[#1A3A32] transition-colors duration-300 hover:text-[#D4AF37]"
              >
                <link.icon className="size-4" />
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const Header = forwardRef<HTMLElement>(function Header(_, ref) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-[100] w-full bg-white/95 font-sans shadow-sm backdrop-blur-md"
    >
      <div
        className={`hidden overflow-hidden bg-[#1A3A32] text-xs text-[#F9F9F6] transition-[max-height,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex ${
          isScrolled
            ? "pointer-events-none max-h-0 -translate-y-full opacity-0"
            : "max-h-10 translate-y-0 opacity-100"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 md:px-8">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-wider text-[#F9F9F6]/70">
              Follow us
            </span>
            {socialLinks.map(({ name, Icon }) => (
              <Link
                key={name}
                href="#"
                aria-label={name}
                className="transition-colors duration-300 hover:text-[#D4AF37]"
              >
                <Icon className="size-3.5" />
              </Link>
            ))}
          </div>
          <div className="flex min-w-0 items-center gap-3 truncate sm:gap-5">
            <a
              href="mailto:team@globalscholarlynexus.com"
              className="flex items-center gap-1.5 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              <Mail className="size-3.5" />
              <span className="truncate">team@globalscholarlynexus.com</span>
            </a>
            <a
              href="tel:+17178835943"
              className="flex items-center gap-1.5 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              <Phone className="size-3.5" />
              +1 7178835943
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-3 overflow-hidden px-4 py-3 transition-[min-height,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-8 ${
            isScrolled ? "min-h-12 py-1" : "min-h-16 py-2"
          }`}
        >
          <Logo
            className={`max-w-[200px] origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:max-w-none ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          />
          <div className="hidden items-center text-xs font-medium text-[#1A3A32] lg:flex">
            <Link
              href="/academic-library"
              className="px-3 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              Academic Research Library
            </Link>
            <Link
              href="/gallery"
              className="border-l border-gray-300 px-3 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              Gallery
            </Link>
          </div>
          <Sheet>
            <SheetTrigger
              aria-label="Open navigation"
              className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md p-2 text-[#1A3A32] transition-colors duration-300 hover:bg-[#F9F9F6] hover:text-[#D4AF37] lg:hidden"
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="h-[100dvh] w-[80vw] border-l-0 bg-white p-0 sm:max-w-sm"
            >
              <SheetHeader className="shrink-0 border-b border-gray-100 px-4 py-4 text-left">
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
                <SheetDescription className="text-left text-gray-600">
                  Explore conferences, publications, and research opportunities.
                </SheetDescription>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <MobileNavigation />
              </div>
              <div className="shrink-0 border-t border-gray-200 px-4 pb-5 pt-4 text-sm text-gray-600">
                <div className="space-y-3">
                  <a href="mailto:team@globalscholarlynexus.com" className="flex min-w-0 items-center gap-2 truncate transition-colors duration-300 hover:text-[#D4AF37]">
                    <Mail className="size-4 shrink-0 text-[#D4AF37]" />
                    <span className="truncate">team@globalscholarlynexus.com</span>
                  </a>
                  <a href="tel:+17178835943" className="flex items-center gap-2 transition-colors duration-300 hover:text-[#D4AF37]">
                    <Phone className="size-4 shrink-0 text-[#D4AF37]" />
                    +1 7178835943
                  </a>
                </div>
                <div className="mt-4 flex gap-4 border-t border-gray-100 pt-4">
                  {socialLinks.map(({ name, Icon }) => (
                    <Link key={name} href="#" aria-label={name} className="cursor-pointer text-[#1A3A32] transition-colors duration-300 hover:text-[#D4AF37]">
                      <Icon className="size-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <DesktopNavigation />
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
