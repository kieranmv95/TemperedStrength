import cx from "classnames";

type PillProps = {
  condensed?: boolean;
  children: React.ReactNode;
};

const Pill = ({ children, condensed }: PillProps) => (
  <div
    className={cx(
      `inline-block bg-[#57a1e8] rounded-full font-semibold text-white`,
      condensed ? `text-sm px-3 py-1` : `text-base px-4 py-1`
    )}
  >
    {children}
  </div>
);

export default Pill;
