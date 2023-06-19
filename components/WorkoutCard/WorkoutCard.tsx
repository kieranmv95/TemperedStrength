import Link from "next/link";

type WorkoutCardProps = {
  title: string;
  link?: string;
  children: React.ReactNode;
};

const WorkoutCard = ({ title, link, children }: WorkoutCardProps) => (
  <div className="shadow-lg w-full inline-block md:w-auto overflow-hidden md:grid md:grid-rows-[auto_1fr_auto]">
    <div className="p-5 bg-[#dadada]">
      <p>
        <b>{title}</b>
      </p>
    </div>
    <div className="p-5">{children}</div>
    {link && (
      <Link
        className="w-full inline-block text-center bg-[#57a1e8] p-3 font-bold text-white"
        href={link}
      >
        View Details
      </Link>
    )}
  </div>
);

export default WorkoutCard;
