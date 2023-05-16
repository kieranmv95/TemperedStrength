import Link from "next/link";

const Header = () => (
  <header>
    <div className="py-4 px-6 md:px-4 container">
      <Link href="/" className="font-bold">
        TemperedStrength
      </Link>
    </div>
  </header>
);

export default Header;
