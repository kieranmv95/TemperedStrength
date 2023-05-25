import Link from "next/link";

const Header = () => (
  <header>
    <div className="py-4 px-6 md:px-4 container flex justify-between">
      <Link href="/" className="font-bold">
        TemperedStrength
      </Link>
      <Link href="/articles">Articles</Link>
    </div>
  </header>
);

export default Header;
