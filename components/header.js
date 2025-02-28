import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 px-28 bg-white shadow-lg max-md:px-10">
      <div className="w-fit">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary">FAIR.FY</h1>
        </Link>
      </div>
    </header>
  );
}
