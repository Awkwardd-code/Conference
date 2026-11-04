"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Globe2,
  MapPin,
  RotateCcw,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  formatConferenceDates,
  publicConferences,
  type PublicConference,
} from "@/lib/public-conferences";

const months = Array.from({ length: 9 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 10 + index, 1));

  return {
    value: date.toISOString().slice(0, 7),
    label: new Intl.DateTimeFormat("en", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(date),
  };
});

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getMonthDays(month: string) {
  const [year, monthNumber] = month.split("-").map(Number);
  const firstWeekday = new Date(Date.UTC(year, monthNumber - 1, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, monthNumber, 0)).getUTCDate();
  const cellCount = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;

  return Array.from({ length: cellCount }, (_, index) => {
    const day = index - firstWeekday + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });
}

function dateKey(month: string, day: number) {
  return `${month}-${String(day).padStart(2, "0")}`;
}

function ConferenceCard({ conference }: { conference: PublicConference }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#e4e9e5] bg-white shadow-[0_4px_18px_rgb(26,58,50,0.07)] transition duration-200 hover:-translate-y-0.5 hover:border-[#d4af37]/60 hover:shadow-[0_12px_28px_rgb(26,58,50,0.12)]">
      <div className="relative mx-3 mt-3 flex min-h-24 flex-col items-center justify-center overflow-hidden rounded-lg border border-[#e8e4d7] bg-gradient-to-br from-[#f7f8f2] via-[#fffdf5] to-[#f3f6f1] px-4 py-3 text-center">
        <div aria-hidden="true" className="absolute bottom-2 left-2 flex gap-1">
          <span className="size-3 border border-[#1a3a32]/50" />
          <span className="size-4 bg-[#d4af37]/60" />
          <span className="absolute -bottom-2 left-0 size-6 bg-[#1a3a32]/80" />
        </div>
        <div aria-hidden="true" className="absolute right-2 top-2 flex gap-1">
          <span className="size-4 bg-[#1a3a32]/15" />
          <span className="absolute right-0 top-5 size-3 border border-[#1a3a32]/50" />
          <span className="absolute right-0 top-9 size-4 bg-[#d4af37]/80" />
        </div>
        <p className="relative z-10 text-sm font-bold text-[#1a3a32] sm:text-base">
          {formatConferenceDates(conference)}
        </p>
        <p className="relative z-10 mt-1 flex flex-wrap items-center justify-center gap-1.5 text-sm font-medium text-[#39463f]">
          <MapPin aria-hidden="true" className="size-4 shrink-0 text-[#b08b18]" />
          {conference.city}, {conference.country}
        </p>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5">
        <h2 className="line-clamp-3 break-words text-base font-semibold leading-6 text-[#1a3a32]">
          {conference.title}
        </h2>
        <div className="mt-3">
          <span className="inline-flex rounded-full border border-[#d4af37]/50 bg-[#fbf8eb] px-3 py-1 text-xs font-semibold tracking-wide text-[#69530e]">
            {conference.acronym}
          </span>
        </div>
        <p className="mt-3 line-clamp-2 break-words text-xs leading-5 text-[#5f6b63]">
          Organized by {conference.organizer}
        </p>
        <Link
          href={`/event/${conference.slug}`}
          className="mt-auto flex min-h-10 items-center justify-between gap-3 border-t border-[#edf0ed] pt-3 font-semibold text-[#1a3a32] transition-colors hover:text-[#9a7810] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a3a32]"
        >
          View conference
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 shrink-0 text-[#b08b18] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}

export default function ConferenceDirectory() {
  const [selectedMonth, setSelectedMonth] = useState("2026-11");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const countries = useMemo(
    () =>
      [...new Set(publicConferences.map((conference) => conference.country))]
        .sort((left, right) => left.localeCompare(right)),
    [],
  );
  const cities = useMemo(
    () =>
      [
        ...new Set(
          publicConferences
            .filter(
              (conference) =>
                !selectedCountry || conference.country === selectedCountry,
            )
            .map((conference) => conference.city),
        ),
      ].sort((left, right) => left.localeCompare(right)),
    [selectedCountry],
  );
  const conferences = useMemo(
    () =>
      publicConferences
        .filter(
          (conference) =>
            conference.startDate.slice(0, 7) === selectedMonth &&
            (!selectedCountry || conference.country === selectedCountry) &&
            (!selectedCity || conference.city === selectedCity),
        )
        .sort((left, right) => left.startDate.localeCompare(right.startDate)),
    [selectedCity, selectedCountry, selectedMonth],
  );
  const activeMonth =
    months.find((month) => month.value === selectedMonth) ?? months[0];

  function resetFilters() {
    setSelectedCountry("");
    setSelectedCity("");
  }

  return (
    <main className="min-h-screen bg-[#F9F9F6] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-7 text-center sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b7118] sm:text-sm sm:tracking-[0.18em]">
            Find your next academic event
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#1a3a32] sm:text-4xl md:text-5xl">
            Our Upcoming <span className="text-[#b08b18]">Conferences</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl px-1 text-sm leading-6 text-[#5f6b63] sm:text-base">
            Browse upcoming events by month, country, or city and find the
            conference that fits your research.
          </p>
        </header>

        <div className="grid min-w-0 items-start gap-5 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-7 xl:grid-cols-[275px_minmax(0,1fr)] xl:gap-9">
          <aside
            aria-label="Conference filters"
            className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-col lg:gap-5"
          >
            <section className="min-w-0 overflow-hidden rounded-xl border border-[#e4e9e5] bg-white shadow-[0_4px_18px_rgb(26,58,50,0.06)]">
              <h2 className="border-b-2 border-[#d4af37] bg-[#1a3a32] px-4 py-3 text-base font-bold text-white sm:px-5 sm:py-4 sm:text-lg">
                <span className="flex items-center gap-2">
                  <Globe2 aria-hidden="true" className="size-4 text-[#d4af37]" />
                  Conference by Country
                </span>
              </h2>
              <div className="p-3 sm:p-4">
                <Select
                  value={selectedCountry || "all"}
                  onValueChange={(country) => {
                    setSelectedCountry(country === "all" ? "" : (country ?? ""));
                    setSelectedCity("");
                  }}
                >
                  <SelectTrigger
                    aria-label="Filter conferences by country"
                    className="h-12 w-full rounded-lg border-[#d6dfda] bg-[#fbfcfa] px-3 text-sm text-[#263a31] shadow-sm hover:border-[#1a3a32]/40 hover:bg-white focus-visible:border-[#b08b18] focus-visible:ring-2 focus-visible:ring-[#d4af37]/25 data-popup-open:border-[#b08b18] data-popup-open:bg-white [&_svg]:text-[#9b7c1c]"
                  >
                    <SelectValue placeholder="Choose a country">
                      {selectedCountry || "All countries"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent
                    align="start"
                    className="rounded-xl border-[#dce4de] bg-white p-1.5 shadow-[0_12px_30px_rgb(26,58,50,0.16)] ring-1 ring-[#1a3a32]/5"
                  >
                    <SelectItem
                      value="all"
                      className="min-h-10 rounded-lg px-3 text-sm text-[#1a3a32] data-highlighted:bg-[#eef3ec] data-highlighted:text-[#1a3a32]"
                    >
                      All countries
                    </SelectItem>
                    {countries.map((country) => (
                      <SelectItem
                        key={country}
                        value={country}
                        className="min-h-10 rounded-lg px-3 text-sm text-[#1a3a32] data-highlighted:bg-[#eef3ec] data-highlighted:text-[#1a3a32]"
                      >
                      {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </section>

            <section className="min-w-0 overflow-hidden rounded-xl border border-[#e4e9e5] bg-white shadow-[0_4px_18px_rgb(26,58,50,0.06)]">
              <h2 className="border-b-2 border-[#d4af37] bg-[#1a3a32] px-4 py-3 text-base font-bold text-white sm:px-5 sm:py-4 sm:text-lg">
                <span className="flex items-center gap-2">
                  <MapPin aria-hidden="true" className="size-4 text-[#d4af37]" />
                  Conference by Cities
                </span>
              </h2>
              <div className="p-3 sm:p-4">
                <Select
                  value={selectedCountry ? selectedCity || "all" : "all"}
                  disabled={!selectedCountry}
                  onValueChange={(city) => {
                    setSelectedCity(city === "all" ? "" : (city ?? ""));
                  }}
                >
                  <SelectTrigger
                    aria-label="Filter conferences by city"
                    className="h-12 w-full rounded-lg border-[#d6dfda] bg-[#fbfcfa] px-3 text-sm text-[#263a31] shadow-sm hover:border-[#1a3a32]/40 hover:bg-white focus-visible:border-[#b08b18] focus-visible:ring-2 focus-visible:ring-[#d4af37]/25 disabled:bg-[#f4f5f3] disabled:opacity-70 data-popup-open:border-[#b08b18] data-popup-open:bg-white [&_svg]:text-[#9b7c1c]"
                  >
                    <SelectValue
                      placeholder={
                        selectedCountry
                          ? "All cities"
                          : "Select a country first"
                      }
                    >
                      {selectedCountry
                        ? selectedCity || "All cities"
                        : "Select a country first"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent
                    align="start"
                    className="rounded-xl border-[#dce4de] bg-white p-1.5 shadow-[0_12px_30px_rgb(26,58,50,0.16)] ring-1 ring-[#1a3a32]/5"
                  >
                    <SelectItem
                      value="all"
                      className="min-h-10 rounded-lg px-3 text-sm text-[#1a3a32] data-highlighted:bg-[#eef3ec] data-highlighted:text-[#1a3a32]"
                    >
                      All cities
                    </SelectItem>
                    {cities.map((city) => (
                      <SelectItem
                        key={city}
                        value={city}
                        className="min-h-10 rounded-lg px-3 text-sm text-[#1a3a32] data-highlighted:bg-[#eef3ec] data-highlighted:text-[#1a3a32]"
                      >
                      {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </section>

            <button
              type="button"
              onClick={() => setShowCalendar((shown) => !shown)}
              aria-expanded={showCalendar}
              aria-controls="conference-calendar"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#d6dfda] bg-white px-4 text-sm font-semibold text-[#1a3a32] shadow-sm transition hover:border-[#d4af37] hover:bg-[#fbf9ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a3a32] sm:col-span-2 lg:col-span-1"
            >
              <CalendarDays aria-hidden="true" className="size-4 text-[#b08b18]" />
              {showCalendar ? "Hide calendar" : "Conference Calendar"}
            </button>
          </aside>

          <section aria-label="Upcoming conferences" className="min-w-0">
            <nav
              aria-label="Select conference month"
              className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto border-b border-[#dce4de] px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-1 sm:px-1"
            >
              {months.map((month) => (
                <button
                  key={month.value}
                  type="button"
                  aria-pressed={selectedMonth === month.value}
                  onClick={() => setSelectedMonth(month.value)}
                  className={`min-h-11 shrink-0 snap-start rounded-lg px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                    selectedMonth === month.value
                      ? "bg-[#1a3a32] font-bold text-white shadow-sm ring-1 ring-[#d4af37]"
                      : "text-[#1a3a32] hover:bg-[#edf2ed]"
                  }`}
                >
                  {month.label}
                </button>
              ))}
            </nav>

            <div className="flex flex-wrap items-center justify-between gap-2 py-4 sm:gap-3 sm:py-5">
              <p className="text-xs text-[#5f6b63] sm:text-sm" aria-live="polite">
                <span className="font-semibold text-[#1a3a32]">
                  {conferences.length}
                </span>{" "}
                {conferences.length === 1 ? "conference" : "conferences"} in{" "}
                <span className="font-medium">{activeMonth.label}</span>
                {selectedCountry ? ` · ${selectedCountry}` : ""}
                {selectedCity ? ` · ${selectedCity}` : ""}
              </p>
              {(selectedCountry || selectedCity) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex min-h-9 items-center gap-1.5 text-xs font-semibold text-[#1a3a32] underline decoration-[#d4af37] underline-offset-4 hover:text-[#8b7118] sm:text-sm"
                >
                  <RotateCcw aria-hidden="true" className="size-3.5" />
                  Clear filters
                </button>
              )}
            </div>

            {conferences.length ? (
              <div className="grid min-w-0 grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-4 sm:gap-5">
                {conferences.map((conference) => (
                  <ConferenceCard
                    key={conference.id}
                    conference={conference}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-[#cfd9d2] bg-white px-5 py-10 text-center sm:py-12">
                <CalendarDays
                  aria-hidden="true"
                  className="mx-auto size-9 text-[#b08b18]"
                />
                <h2 className="mt-3 text-lg font-semibold text-[#1a3a32]">
                  No conferences listed for {activeMonth.label}
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#5f6b63]">
                  Try another month or clear your location filters to see
                  available conferences.
                </p>
              </div>
            )}

            {showCalendar && (
              <section
                id="conference-calendar"
                aria-label={`${activeMonth.label} conference calendar`}
                className="mt-6 rounded-xl border border-[#dce4de] bg-white p-3 shadow-sm sm:mt-8 sm:p-6"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-lg font-bold text-[#1a3a32]">
                    {activeMonth.label} calendar
                  </h2>
                  <p className="text-xs text-[#5f6b63]">
                    Conference dates are shown in their local event listing.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <div className="grid min-w-[490px] grid-cols-7 border-l border-t border-[#dce4de] sm:min-w-0">
                  {weekdays.map((weekday) => (
                    <div
                      key={weekday}
                      className="border-b border-r border-[#dce4de] bg-[#f2f5f1] py-2 text-center text-xs font-semibold text-[#526056]"
                    >
                      {weekday}
                    </div>
                  ))}
                  {getMonthDays(selectedMonth).map((day, index) => {
                    const key = day ? dateKey(selectedMonth, day) : "";
                    const dayConferences = day
                      ? publicConferences.filter(
                          (conference) =>
                            conference.startDate <= key &&
                            conference.endDate >= key &&
                            (!selectedCountry ||
                              conference.country === selectedCountry) &&
                            (!selectedCity || conference.city === selectedCity),
                        )
                      : [];

                    return (
                      <div
                        key={`${selectedMonth}-${index}`}
                        className={`min-h-20 border-b border-r border-[#dce4de] p-1.5 sm:min-h-24 sm:p-2 ${
                          day ? "bg-white" : "bg-[#f7f8f6]"
                        }`}
                      >
                        {day && (
                          <>
                            <span className="text-xs font-medium text-[#526056]">
                              {day}
                            </span>
                            <div className="mt-1 space-y-1">
                              {dayConferences.map((conference) => (
                                <Link
                                  key={conference.id}
                                  href={`/event/${conference.slug}`}
                                  title={conference.title}
                                  className="block truncate rounded bg-[#f1f5ef] px-1 py-0.5 text-[10px] font-medium text-[#1a3a32] hover:bg-[#e5eddc] sm:text-xs"
                                >
                                  {conference.city}: {conference.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                  </div>
                </div>
              </section>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
