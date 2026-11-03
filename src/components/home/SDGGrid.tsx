import Image from "next/image";

const sdgGoals = [
  {
    number: 1,
    title: "No Poverty",
    image: "SDG_01_No_Poverty.png",
  },
  {
    number: 2,
    title: "Zero Hunger",
    image: "SDG_02_Zero_Hunger.png",
  },
  {
    number: 3,
    title: "Good Health and Well-being",
    image: "SDG_03_Good_Health_and_Well-being.png",
  },
  {
    number: 4,
    title: "Quality Education",
    image: "SDG_04_Quality_Education.png",
  },
  {
    number: 5,
    title: "Gender Equality",
    image: "SDG_05_Gender_Equality.png",
  },
  {
    number: 6,
    title: "Clean Water and Sanitation",
    image: "SDG_06_Clean_Water_and_Sanitation.png",
  },
  {
    number: 7,
    title: "Affordable and Clean Energy",
    image: "SDG_07_Affordable_and_Clean_Energy.png",
  },
  {
    number: 8,
    title: "Decent Work and Economic Growth",
    image: "SDG_08_Decent_Work_and_Economic_Growth.png",
  },
  {
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    image: "SDG_09_Industry_Innovation_and_Infrastructure.png",
  },
  {
    number: 10,
    title: "Reduced Inequalities",
    image: "SDG_10_Reduced_Inequalities.png",
  },
  {
    number: 11,
    title: "Sustainable Cities and Communities",
    image: "SDG_11_Sustainable_Cities_and_Communities.png",
  },
  {
    number: 12,
    title: "Responsible Consumption and Production",
    image: "SDG_12_Responsible_Consumption_and_Production.png",
  },
  {
    number: 13,
    title: "Climate Action",
    image: "SDG_13_Climate_Action.png",
  },
  {
    number: 14,
    title: "Life Below Water",
    image: "SDG_14_Life_Below_Water.png",
  },
  {
    number: 15,
    title: "Life on Land",
    image: "SDG_15_Life_on_Land.png",
  },
  {
    number: 16,
    title: "Peace, Justice and Strong Institutions",
    image: "SDG_16_Peace_Justice_and_Strong_Institutions.png",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    image: "SDG_17_Partnerships_for_the_Goals.png",
  },
] as const;

export default function SDGGrid() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <h2 className="mb-4 max-w-3xl text-center font-serif text-xl font-bold leading-tight text-[#1A3A32] sm:mb-6 sm:text-2xl md:text-3xl">
          Mobilizing Research for{" "}
          <span className="text-[#D4AF37]">
            Equitable Growth and Development
          </span>
        </h2>
        <p className="mx-auto mb-8 max-w-4xl text-center text-xs leading-relaxed text-gray-600 sm:mb-12 sm:text-sm md:text-base">
          Global Scholarly Nexus contributes to the Sustainable Development
          Goals by empowering researchers, connecting institutions, and
          transforming academic insight into collaborative action for equitable
          growth and sustainable development.
        </p>

        <div className="grid w-full grid-cols-4 gap-1.5 sm:grid-cols-4 sm:gap-2 md:grid-cols-4 md:gap-3 lg:grid-cols-6 xl:grid-cols-9">
          {sdgGoals.map((goal) => (
            <div
              key={goal.number}
              className="group relative aspect-square w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={`/SDG_17_Goals_4K/${goal.image}`}
                alt={`Sustainable Development Goal ${goal.number}: ${goal.title}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16vw, 11vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
