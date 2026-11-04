import ConferenceHighlightsCarousel from "./ConferenceHighlightsCarousel";

export default function EventHighlightsRow() {
  return (
    <section
      aria-label="Conference highlights"
      className="min-w-0 bg-[#efefef]"
    >
      <ConferenceHighlightsCarousel />
    </section>
  );
}
