"use client";

import Link from "next/link";
import { ArrowRight, ArrowUp, Globe, Mail, Phone, PlayCircle, Radio } from "lucide-react";
import Logo from "@/components/shared/Logo";

type FooterLink = readonly [string, string];

const quickLinks: FooterLink[] = [
  ["About Us", "/about"],
  ["Speaker Application", "/speaker/apply"],
  ["Apply for Committee", "/committee/application"],
  ["Our Committee", "/committee"],
];

const resourceLinks: FooterLink[] = [
  ["Journal Insights", "/journal"],
  ["Upcoming Conferences", "/conferences"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact"],
];

const socialLinks = [
  { label: "Facebook", Icon: Globe },
  { label: "LinkedIn", Icon: Radio },
  { label: "YouTube", Icon: PlayCircle },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#1A3A32] bg-[#0B1310] font-sans text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_80%_0%,#1A3A32_0%,transparent_38%),linear-gradient(120deg,transparent_0%,rgba(212,175,55,0.04)_50%,transparent_100%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 overflow-hidden px-6 py-12 md:grid-cols-2 md:px-12 lg:grid-cols-4">
        <div className="min-w-0">
          <Logo variant="dark" className="origin-left scale-90" />
          <p className="mb-6 mt-4 max-w-sm text-sm leading-relaxed text-gray-300">
            GSN is a global platform dedicated to fostering academic excellence,
            meaningful collaboration, and knowledge exchange across disciplines.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ label, Icon }) => (
              <Link key={label} href="#" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A3A32] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-[#1A3A32]">
                <Icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        <FooterLinks title="Quick Links" links={quickLinks} />
        <FooterLinks title="Resources" links={resourceLinks} />

        <div className="min-w-0">
          <h2 className="mb-4 font-serif text-lg text-[#D4AF37]">Contact &amp; Newsletter</h2>
          <div className="space-y-2">
            <a href="mailto:team@globalscholarlynexus.com" className="flex cursor-pointer items-center gap-3 rounded-lg border border-transparent bg-[#1A3A32] p-3 text-sm text-gray-200 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#1A3A32]/80 hover:text-[#D4AF37]">
              <Mail className="size-4 shrink-0 text-[#D4AF37]" />
              team@globalscholarlynexus.com
            </a>
            <a href="tel:+17178835943" className="flex cursor-pointer items-center gap-3 rounded-lg border border-transparent bg-[#1A3A32] p-3 text-sm text-gray-200 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#1A3A32]/80 hover:text-[#D4AF37]">
              <Phone className="size-4 shrink-0 text-[#D4AF37]" />
              +1 717 883 5943
            </a>
          </div>
          <p className="mt-5 text-sm text-gray-300">Subscribe to our Newsletter</p>
          <form className="mt-2 flex rounded-lg bg-white p-1.5">
            <input type="email" placeholder="Your email address" aria-label="Newsletter email" className="min-w-0 flex-1 bg-transparent px-2 text-sm text-gray-800 outline-none placeholder:text-gray-400" />
            <button type="submit" aria-label="Subscribe" className="flex size-9 cursor-pointer items-center justify-center rounded-md bg-[#D4AF37] text-[#1A3A32] transition-all hover:bg-[#1A3A32] hover:text-white">
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl border-t border-[#1A3A32] px-6 pb-6 pt-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-gray-400 md:flex-row md:text-left">
          <p>Copyright © 2026 Global Scholarly Nexus. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="cursor-pointer transition-colors hover:text-[#D4AF37]">Terms &amp; Conditions</Link>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-[#1A3A32] transition-all hover:-translate-y-1 hover:border-[#D4AF37] hover:text-[#D4AF37]">
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <div>
      <h2 className="mb-4 font-serif text-lg text-[#D4AF37]">{title}</h2>
      <nav className="flex flex-col gap-2">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="block text-sm text-gray-300 transition-all duration-300 hover:ml-1 hover:text-[#D4AF37]">{label}</Link>
        ))}
      </nav>
    </div>
  );
}
