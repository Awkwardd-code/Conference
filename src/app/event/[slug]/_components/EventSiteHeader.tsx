"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  FileText,
  Headset,
  Home,
  Info,
  Mail,
  Menu,
  Mic2,
  Phone,
  Users,
  X,
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
import type { PublicConference } from "@/lib/public-conferences";

type EventNavItem =
  | {
      name: string;
      path: string;
      icon: typeof Home;
    }
  | {
      name: string;
      icon: typeof Home;
      dropdown: { name: string; path: string; icon: typeof Home }[];
    };

const navigation: EventNavItem[] = [
  { name: "Home", path: "", icon: Home },
  {
    name: "About",
    icon: Info,
    dropdown: [
      { name: "About Conference", path: "about/about-conference", icon: Info },
      {
        name: "Who Should Attend?",
        path: "about/who-should-attend",
        icon: Users,
      },
      {
        name: "Why Should Attend?",
        path: "about/why-should-attend",
        icon: CalendarDays,
      },
    ],
  },
  {
    name: "Submission",
    icon: FileText,
    dropdown: [
      {
        name: "Call for Papers",
        path: "submission/call-for-papers",
        icon: FileText,
      },
      {
        name: "Submission Guidelines",
        path: "submission/guidelines",
        icon: BookOpen,
      },
      {
        name: "Conference Topics",
        path: "submission/topics",
        icon: CalendarDays,
      },
    ],
  },
  {
    name: "Registration",
    icon: CalendarDays,
    dropdown: [
      {
        name: "Conference Registration",
        path: "registration/conference-registration",
        icon: CalendarDays,
      },
      {
        name: "Registration Guidelines",
        path: "registration/guidelines",
        icon: FileText,
      },
      {
        name: "Registration Benefits",
        path: "registration/benefits",
        icon: Users,
      },
    ],
  },
  {
    name: "Advisory Committee",
    icon: Users,
    dropdown: [
      {
        name: "Focus, Responsibilities & Eligibility",
        path: "advisory-committee/focus-responsibilities-eligibility",
        icon: Info,
      },
      {
        name: "Join as Advisory Member",
        path: "advisory-committee/join",
        icon: Users,
      },
      {
        name: "Our Advisory Committee",
        path: "advisory-committee/members",
        icon: Users,
      },
    ],
  },
  {
    name: "Conference Speakers",
    icon: Mic2,
    dropdown: [
      {
        name: "Speaker Guidelines",
        path: "speakers/guidelines",
        icon: FileText,
      },
      {
        name: "Speaker Application",
        path: "speakers/application",
        icon: Mic2,
      },
      {
        name: "Past Speakers",
        path: "speakers/past-speakers",
        icon: Users,
      },
    ],
  },
  { name: "Subscribe", path: "subscribe", icon: Mail },
  {
    name: "Journals Publication",
    path: "journals-publication",
    icon: BookOpen,
  },
  { name: "FAQ", path: "faq", icon: CircleHelp },
  { name: "Contact Us", path: "contact", icon: Headset },
];

export default function EventSiteHeader({
  conference,
}: {
  conference: PublicConference;
}) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigationRef = useRef<HTMLElement>(null);
  const eventPath = `/event/${conference.slug}`;

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !navigationRef.current?.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 1280px)");
    function closeMobileMenuOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) {
        setMobileMenuOpen(false);
        setOpenMobileDropdown(null);
      }
    }

    desktopBreakpoint.addEventListener("change", closeMobileMenuOnDesktop);
    return () =>
      desktopBreakpoint.removeEventListener("change", closeMobileMenuOnDesktop);
  }, []);

  function getHref(path: string) {
    return path ? `${eventPath}/${path}` : eventPath;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white font-sans shadow-sm">
      <div className="bg-[#762838] text-[#fffafa]">
        <div className="mx-auto flex min-h-10 max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-1 px-4 py-2 text-xs md:px-8">
          <a
            href="mailto:team@globalscholarlynexus.com"
            className="inline-flex min-w-0 items-center gap-2 transition-colors hover:text-[#f1c2c8]"
          >
            <Mail aria-hidden="true" className="size-3.5 shrink-0" />
            <span className="truncate">team@globalscholarlynexus.com</span>
          </a>
          <a
            href="tel:+17178835943"
            className="hidden items-center gap-2 transition-colors hover:text-[#f1c2c8] sm:inline-flex"
          >
            <Phone aria-hidden="true" className="size-3.5 shrink-0" />
            +1 717 883 5943
          </a>
        </div>
      </div>

      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl flex-nowrap items-center justify-between gap-3 px-4 py-2 md:px-8">
        <Logo
          href={eventPath}
          theme="event"
          className="shrink-0"
          showName={false}
        />

        <nav
          ref={navigationRef}
          aria-label="Event navigation"
          className="hidden min-w-0 flex-1 xl:block"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setActiveDropdown(null);
            }
          }}
        >
          <ul className="flex flex-nowrap items-center justify-end gap-x-2 whitespace-nowrap xl:gap-x-3">
            {navigation.map((item) => {
              const isOpen = activeDropdown === item.name;
              const itemId = `event-nav-${item.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`;

              return (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if ("dropdown" in item) setActiveDropdown(item.name);
                  }}
                  onMouseLeave={() => {
                    if ("dropdown" in item) setActiveDropdown(null);
                  }}
                >
                  {"path" in item ? (
                    <Link
                      href={getHref(item.path)}
                      className="group relative flex min-h-10 items-center whitespace-nowrap px-1 text-xs font-semibold text-[#762838] transition-colors after:absolute after:inset-x-1 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#c96c78] after:transition-transform hover:text-[#a34758] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c96c78]"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={itemId}
                        onClick={() => setActiveDropdown(item.name)}
                        className="group relative flex min-h-10 items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold text-[#762838] transition-colors after:absolute after:inset-x-1 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#c96c78] after:transition-transform hover:text-[#a34758] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c96c78]"
                      >
                        {item.name}
                        <ChevronDown
                          aria-hidden="true"
                          className={`size-3.5 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        id={itemId}
                        className={`absolute left-0 top-full z-[110] mt-1 w-72 origin-top-left rounded-md border border-gray-100 bg-white/95 py-2 shadow-xl backdrop-blur-md transition-[opacity,transform,visibility] duration-200 ${
                          isOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-1 opacity-0"
                        }`}
                      >
                        {item.dropdown.map((child) => (
                          <Link
                            key={child.path}
                            href={getHref(child.path)}
                            onClick={() => setActiveDropdown(null)}
                            className="group relative flex min-h-10 items-center gap-2 overflow-hidden px-4 py-2 text-sm text-gray-600 transition-colors before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:origin-bottom before:scale-y-0 before:bg-[#c96c78] before:transition-transform hover:bg-[#fff4f5] hover:text-[#762838] hover:before:scale-y-100"
                          >
                            <child.icon
                              aria-hidden="true"
                              className="size-4 shrink-0 text-[#a34758]"
                            />
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <Sheet
          open={mobileMenuOpen}
          onOpenChange={(open) => {
            setMobileMenuOpen(open);
            if (!open) setOpenMobileDropdown(null);
          }}
        >
          <SheetTrigger
            aria-label="Open event navigation"
            className="inline-flex shrink-0 items-center justify-center rounded-md p-2 text-[#762838] transition-colors hover:bg-[#fff4f5] hover:text-[#a34758] xl:hidden"
          >
            {mobileMenuOpen ? (
              <X aria-hidden="true" className="size-6" />
            ) : (
              <Menu aria-hidden="true" className="size-6" />
            )}
          </SheetTrigger>
          <SheetContent
            side="right"
            className="h-[100dvh] w-[85vw] border-l border-[#e8c9cd] bg-white p-0 sm:max-w-sm"
          >
            <SheetHeader className="border-b border-[#f1dfe2] bg-[#fff4f5] px-5 py-5 text-left">
              <SheetTitle className="font-serif text-lg font-bold text-[#762838]">
                {conference.acronym}
              </SheetTitle>
              <SheetDescription className="text-left text-gray-600">
                Event navigation
              </SheetDescription>
            </SheetHeader>
            <nav
              aria-label="Mobile event navigation"
              className="flex-1 overflow-y-auto px-5 py-4"
            >
              <ul>
                {navigation.map((item) => (
                  <li key={item.name} className="border-b border-gray-100">
                    {"path" in item ? (
                      <Link
                        href={getHref(item.path)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex min-h-12 items-center gap-3 py-3 text-base font-semibold text-[#762838] transition-colors hover:text-[#a34758]"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-4 text-[#a34758]"
                        />
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          aria-expanded={openMobileDropdown === item.name}
                          onClick={() =>
                            setOpenMobileDropdown((current) =>
                              current === item.name ? null : item.name,
                            )
                          }
                          className="flex min-h-12 w-full items-center gap-3 py-3 text-left text-base font-semibold text-[#762838] transition-colors hover:text-[#a34758]"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-4 text-[#a34758]"
                          />
                          <span className="flex-1">{item.name}</span>
                          <ChevronDown
                            aria-hidden="true"
                            className={`size-4 transition-transform ${
                              openMobileDropdown === item.name
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {openMobileDropdown === item.name ? (
                          <ul className="mb-3 ml-2 border-l border-[#e8c9cd] pl-3">
                            {item.dropdown.map((child) => (
                              <li key={child.path}>
                                <Link
                                  href={getHref(child.path)}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex min-h-10 items-center gap-2 px-2 py-2 text-sm text-gray-600 transition-colors hover:text-[#762838]"
                                >
                                  <child.icon
                                    aria-hidden="true"
                                    className="size-4 shrink-0 text-[#a34758]"
                                  />
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
