import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import PageHeroSlider from "@/components/home/PageHeroSlider";

export default function PublicContactPage() {
  return (
    <>
      <PageHeroSlider />
      <main className="relative overflow-hidden bg-[#f7faf8] px-4 py-10 sm:px-6 sm:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 size-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-20 size-72 rounded-full bg-[#1A3A32]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <header className="relative mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
              We&apos;re here to help
            </p>
            <h1 className="text-3xl font-extrabold text-[#1A3A32] sm:text-4xl">
              Contact Us <span className="text-[#D4AF37]">- Global Scholarly Nexus</span>
            </h1>
            <p className="mx-auto mt-5 text-base leading-relaxed text-gray-700 sm:text-lg">
              Have a question about our conferences, publications, or
              partnership opportunities? Our team is ready to help.
            </p>
          </header>

          <section className="relative mx-auto mt-10 grid max-w-6xl overflow-hidden rounded-3xl border border-[#dce8e2] bg-white shadow-[0_16px_44px_rgba(26,58,50,0.13)] lg:grid-cols-[0.82fr_1.5fr]" aria-label="Contact information and form">
            <div className="relative overflow-hidden bg-[#1A3A32] p-7 text-white sm:p-10">
              <div aria-hidden="true" className="absolute -bottom-16 -right-16 size-48 rounded-full border-[18px] border-[#D4AF37]/20" />
              <div aria-hidden="true" className="absolute -right-8 top-12 size-24 rounded-full bg-[#D4AF37]/10 blur-2xl" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Contact details</p>
                <h2 className="mt-3 font-serif text-3xl font-bold leading-tight">Let&apos;s start a conversation.</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  Reach out to discuss research, events, speaking opportunities, or academic collaboration.
                </p>
                <div className="mt-9 space-y-6">
                  <a href="tel:+17178835943" className="flex items-start gap-3 text-sm transition hover:text-[#D4AF37]">
                    <Phone className="mt-0.5 size-5 shrink-0 text-[#D4AF37]" />
                    <span><strong className="block text-white">Call or WhatsApp</strong><span className="text-white/75">+1 717 883 5943</span></span>
                  </a>
                  <a href="mailto:team@globalscholarlynexus.com" className="flex min-w-0 items-start gap-3 text-sm transition hover:text-[#D4AF37]">
                    <Mail className="mt-0.5 size-5 shrink-0 text-[#D4AF37]" />
                    <span className="min-w-0"><strong className="block text-white">Email us</strong><span className="break-all text-white/75">team@globalscholarlynexus.com</span></span>
                  </a>
                  <div className="flex items-start gap-3 text-sm">
                    <Clock3 className="mt-0.5 size-5 shrink-0 text-[#D4AF37]" />
                    <span><strong className="block text-white">Response time</strong><span className="text-white/75">Usually within 1–2 business days</span></span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-[#D4AF37]" />
                    <span><strong className="block text-white">Serving globally</strong><span className="text-white/75">Connecting researchers across borders</span></span>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </section>
        </div>
      </main>
    </>
  );
}
