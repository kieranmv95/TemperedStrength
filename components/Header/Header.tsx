import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";

const NavIcon = ({
  toggleNav,
  navOpen,
}: {
  toggleNav: any;
  navOpen: Boolean;
}) => (
  <button
    className="flex items-center px-3 py-2 border rounded text-white border-white"
    onClick={() => toggleNav(!navOpen)}
  >
    <svg
      className="fill-current h-3 w-3"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </button>
);

const Header = () => {
  const [navOpen, toggleNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => toggleNav(false);

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-main p-6 text-white">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/" className="font-bold">
            TemperedStrength
          </Link>
        </div>
        <div className="block lg:hidden">
          <NavIcon toggleNav={toggleNav} navOpen={navOpen} />
        </div>
        <div
          className={cx(
            "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
            {
              hidden: !navOpen,
            }
          )}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              href="/articles"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Articles
            </Link>
            <Link
              href="/workouts"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Workouts
            </Link>
            <Link
              href="/quotes"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Quotes
            </Link>
            <Link
              href="/app"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              App
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
