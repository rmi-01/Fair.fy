import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 px-28 bg-white shadow-lg">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary">FAIR.FY</h1>
        </Link>
      </div>
    </header>
  );
}
