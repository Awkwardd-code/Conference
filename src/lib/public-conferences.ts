export interface PublicConference {
  id: number;
  slug: string;
  startDate: string;
  endDate: string;
  city: string;
  country: string;
  venue?: string;
  title: string;
  acronym: string;
  organizer: string;
}

export const publicConferences: PublicConference[] = [
  {
    id: 11,
    slug: "research-bootcamp-1-on-artificial-intelligence-and-cyber-law",
    startDate: "2026-11-07",
    endDate: "2026-11-07",
    city: "Rajshahi",
    country: "Bangladesh",
    venue: "University of Rajshahi",
    title: "Research Bootcamp-1 on Artificial Intelligence and Cyber Law",
    acronym: "AI & CYBER LAW",
    organizer: "Rajshahi University Research & Journal Club, Department of Law",
  },
  {
    id: 1,
    slug: "international-conference-on-soil-fertility-and-nutrient-cycling-in-agroecosystems",
    startDate: "2027-02-09",
    endDate: "2027-02-10",
    city: "Malaga",
    country: "Spain",
    title:
      "International Conference on Soil Fertility and Nutrient Cycling in Agroecosystems",
    acronym: "ICSFNC",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 2,
    slug: "international-conference-on-real-estate-and-economic-development-linkages",
    startDate: "2027-02-18",
    endDate: "2027-02-19",
    city: "Mexico City",
    country: "Mexico",
    title:
      "International Conference on Real Estate and Economic Development Linkages",
    acronym: "ICREEDL",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 3,
    slug: "international-conference-on-advances-in-clinical-medicine-research",
    startDate: "2026-11-17",
    endDate: "2026-11-18",
    city: "Crete",
    country: "Greece",
    title: "International Conference on Advances in Clinical Medicine Research",
    acronym: "ICACMR",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 4,
    slug: "international-conference-on-pediatric-cardiology-and-heart-transplantation",
    startDate: "2027-04-12",
    endDate: "2027-04-13",
    city: "Phuket",
    country: "Thailand",
    title:
      "International Conference on Pediatric Cardiology and Heart Transplantation",
    acronym: "ICPCHT",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 5,
    slug: "international-conference-on-political-movements-and-social-change",
    startDate: "2026-12-29",
    endDate: "2026-12-30",
    city: "Kumasi",
    country: "Ghana",
    title: "International Conference on Political Movements and Social Change",
    acronym: "ICPMSC",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 6,
    slug: "international-conference-on-aerospace-mechanical-automotive-and-materials-engineering",
    startDate: "2027-05-03",
    endDate: "2027-05-04",
    city: "Vienna",
    country: "Austria",
    title:
      "International Conference on Aerospace, Mechanical, Automotive and Materials Engineering",
    acronym: "ICAMAME",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 7,
    slug: "international-conference-on-globalization-poverty-and-urban-human-security",
    startDate: "2026-11-05",
    endDate: "2026-11-06",
    city: "Munich",
    country: "Germany",
    title:
      "International Conference on Globalization, Poverty, and Urban Human Security",
    acronym: "ICGPUHS",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 8,
    slug: "international-conference-on-property-dispute-resolution-and-real-estate-litigation",
    startDate: "2027-05-26",
    endDate: "2027-05-27",
    city: "Saint Petersburg",
    country: "Russia",
    title:
      "International Conference on Property Dispute Resolution and Real Estate Litigation",
    acronym: "ICPDRREL",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 9,
    slug: "international-conference-on-digital-education-and-lifelong-learning",
    startDate: "2027-06-14",
    endDate: "2027-06-15",
    city: "Lisbon",
    country: "Portugal",
    title: "International Conference on Digital Education and Lifelong Learning",
    acronym: "ICDELL",
    organizer: "Global Scholarly Nexus",
  },
  {
    id: 10,
    slug: "international-conference-on-climate-finance-and-sustainable-policy",
    startDate: "2027-07-21",
    endDate: "2027-07-22",
    city: "Cape Town",
    country: "South Africa",
    title: "International Conference on Climate Finance and Sustainable Policy",
    acronym: "ICCFSP",
    organizer: "Global Scholarly Nexus",
  },
];

export function getPublicConferenceBySlug(slug: string) {
  return publicConferences.find((conference) => conference.slug === slug);
}

function ordinal(day: number) {
  const suffix =
    day % 100 >= 11 && day % 100 <= 13
      ? "th"
      : day % 10 === 1
        ? "st"
        : day % 10 === 2
          ? "nd"
          : day % 10 === 3
            ? "rd"
            : "th";

  return `${day}${suffix}`;
}

export function formatConferenceDates(conference: PublicConference) {
  const start = new Date(`${conference.startDate}T00:00:00Z`);
  const end = new Date(`${conference.endDate}T00:00:00Z`);
  const startDay = start.getUTCDate();
  const endDay = end.getUTCDate();
  const month = new Intl.DateTimeFormat("en", {
    month: "long",
    timeZone: "UTC",
  }).format(end);
  const year = end.getUTCFullYear();

  return `${ordinal(startDay)}${startDay === endDay ? "" : ` - ${ordinal(endDay)}`} ${month}, ${year}`;
}
