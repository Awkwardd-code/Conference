import Link from "next/link";
import { Link2 } from "lucide-react";

const quickLinks = [
  ["Publication Process", "/journal/publication-process"],
  ["Speaker Guidelines", "/speaker/criteria"],
  ["Upcoming Conferences", "/conferences"],
  ["Apply for Speaker", "/speaker/apply"],
  ["Apply for Committee", "/committee/application"],
  ["Invitation Letter", "/invitation-letter"],
  ["Collaboration", "/about/collaboration"],
  ["Journal Insights", "/journal"],
];

export default function QuickLinksSidebar() {
  return (
    <aside className="w-full lg:sticky lg:top-6 lg:max-w-xs">
      <h2 className="mb-5 text-center text-3xl font-extrabold text-[#1A3A32]">Quick <span className="text-[#D4AF37]">Links</span></h2>
      <nav className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {quickLinks.map(([label, href]) => (
          <Link key={href} href={href} className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white p-0 text-sm font-bold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <span className="flex size-12 shrink-0 items-center justify-center bg-gradient-to-r from-[#1A3A32] to-[#D4AF37] text-white"><Link2 className="size-4" /></span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
