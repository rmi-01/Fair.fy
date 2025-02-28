import dayjs from "dayjs";
import Image from "next/image";
import {
  ArrowTopRightOnSquareIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function FairCard({ cardDetails }) {
  return (
    <div className="bg-white rounded-lg text-dark w-sm overflow-hidden shadow-md hover:scale-[101%] mx-auto group">
      <div className="h-[200px] p-4">
        <Image
          src={`/fairs/${cardDetails.logo}`}
          alt={cardDetails.name}
          width={2000}
          height={2000}
          className="h-[175px] w-[175px] shadow-lg rounded-full block mx-auto border-4 border-primary-light group-hover:border-secondary/20"
        />
      </div>

      <div className="p-4 space-y-2 text-xs">
        <h2 className="text-xl flex items-center justify-between mb-4 uppercase">
          {cardDetails.name}

          <Link href={cardDetails.website} target="_blank">
            <ArrowTopRightOnSquareIcon className="size-4 font-bold text-primary group-hover:text-secondary" />
          </Link>
        </h2>

        <p className="flex items-center gap-x-2">
          <CalendarIcon className="size-4" />
          {dayjs(cardDetails.start_date).format("DD MMM, YYYY")} -{" "}
          {dayjs(cardDetails.end_date).format("DD MMM, YYYY")}
        </p>

        <p className="flex items-center gap-x-2">
          <MapPinIcon className="size-4" /> {cardDetails.address.zip}{" "}
          {cardDetails.address.city}, {cardDetails.address.state}
        </p>

        <p className="flex items-center gap-x-2 mb-4">
          <ClockIcon className="size-4" />
          {dayjs(cardDetails.start_date).diff(dayjs(), "day")} days left
        </p>

        <Link
          href={`/fair/${cardDetails.id}`}
          className="text-primary text-center block border-t pt-4 border-primary-light group-hover:text-secondary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
