import fairsData from "@/data/fairs.mock.json";
import {
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  if (!id) {
    return null;
  }

  const fair = fairsData.fairs.find((fair) => fair.id === Number(id));

  if (!fair) {
    return null;
  }

  return {
    title: fair.name,
    description: `${fair.name} is taking place in ${fair.address.city}, ${
      fair.address.state
    } from ${dayjs(fair.start_date).format("DD MMM, YYYY")} till ${dayjs(
      fair.end_date
    ).format("DD MMM, YYYY")}`,
    openGraph: {
      type: "article",
      title: fair.name,
      description: `${fair.name} is taking place in ${fair.address.city}, ${
        fair.address.state
      } from ${dayjs(fair.start_date).format("DD MMM, YYYY")} till ${dayjs(
        fair.end_date
      ).format("DD MMM, YYYY")}`,
      url: `https://fairfy.vercel.app/fair/${fair.id}`,
      siteName: "Fair.fy",
      images: [
        {
          url: `/fairs/${fair.cover_img}`,
          width: 1200,
          height: 630,
          alt: fair.name,
        },
        {
          url: `/fairs/${fair.logo}`,
          width: 1200,
          height: 630,
          alt: fair.name,
        },
      ],
    },
  };
};

export default async function Fair({ params }) {
  const { id } = await params;

  if (!id) {
    return <div>Fair not found</div>;
  }

  const fair = fairsData.fairs.find((fair) => fair.id === Number(id));

  if (!fair) {
    return (
      <div className="py-48 px-28">
        <h1 className="heading font-bold text-center">
          No <span className="text-primary">fair</span> found
        </h1>
        <Link href="/" className="btn-primary mx-auto block my-12">
          Go to home
        </Link>
      </div>
    );
  }

  return (
    <div className="">
      <div className="h-[350px] shadow-md relative">
        <Image
          src={`/fairs/${fair.cover_img}`}
          alt={fair.name}
          width={2000}
          height={2000}
          className="h-full w-full object-cover"
        />
        <Image
          src={`/fairs/${fair.logo}`}
          alt={fair.name}
          width={2000}
          height={2000}
          className="h-[150px] w-[150px] shadow-lg rounded-full block mx-auto border-4 border-primary-light absolute bottom-[-75px] left-[7rem]"
        />
      </div>

      <div className="pt-24 pb-8 px-28 space-y-4 text-dark">
        <Link href="/" className="text-xs flex items-center gap-x-2 w-fit">
          <ArrowLeftIcon className="size-3" />
          Back to home
        </Link>
        <div className="flex items-center justify-between gap-4 mb-8">
          <h1 className="heading">{fair.name}</h1>
          <Link
            href={fair.website}
            target="_blank"
            className="flex items-center gap-x-2 btn-primary !text-xs"
          >
            View Website
            <ArrowTopRightOnSquareIcon className="size-4" />
          </Link>
        </div>

        <p className="flex items-center gap-x-2">
          <CalendarIcon className="size-5" />
          <strong>DATES: </strong>
          {dayjs(fair.start_date).format("DD MMM, YYYY")} -{" "}
          {dayjs(fair.end_date).format("DD MMM, YYYY")}
        </p>

        <p className="flex items-center gap-x-2">
          <BuildingOfficeIcon className="size-5" />
          <strong>BOOTH NUMBER: </strong>
          {fair.booth_number}
        </p>

        <p className="flex items-center gap-x-2">
          <MapPinIcon className="size-5" />
          <strong>ADDRESS: </strong>
          {`${fair.address.street} ${fair.address.house_number}, ${fair.address.zip} ${fair.address.city}, ${fair.address.state}`}
        </p>

        <p className="flex items-center gap-x-2">
          <ClockIcon className="size-5" />
          <strong>DAYS REMAINING: </strong>
          {dayjs(fair.start_date).diff(dayjs(), "day")} days left
        </p>

        <p className="text-xs font-semibold pt-12">
          For more information, please visit the website of the fair.
        </p>
      </div>
    </div>
  );
}
