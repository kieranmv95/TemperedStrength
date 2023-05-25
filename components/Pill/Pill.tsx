import cx from "classnames";

type PillProps = {
  condensed?: boolean;
  children: React.ReactNode;
};

const Pill = ({ children, condensed }: PillProps) => (
  <div
    className={cx(
      `inline-block bg-yellow-400 rounded-full font-semibold`,
      condensed ? `text-sm px-3 py-1` : `text-base px-4 py-1`
    )}
  >
    {children}
  </div>
);

export default Pill;
