import FairCard from "@/components/fair-card";
import fairsData from "@/data/fairs.mock.json";

export default function Home() {
  return (
    <div className="py-8 px-28 max-md:px-10">
      <h1 className="text-center heading">
        Here are some of the <span className="text-primary">exciting</span>{" "}
        fairs in <span className="text-primary">Deutschland</span>
      </h1>

      <div className="flex flex-wrap gap-8 pt-8">
        {fairsData.fairs.map((fair) => (
          <FairCard key={fair.id} cardDetails={fair} />
        ))}
      </div>
    </div>
  );
}
