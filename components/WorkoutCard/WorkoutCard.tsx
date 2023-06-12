import Link from "next/link";

type WorkoutCardProps = {
  title: string;
  link: string;
  children: React.ReactNode;
};

const WorkoutCard = ({ title, link, children }: WorkoutCardProps) => (
  <div className="shadow-lg rounded-md w-full inline-block md:w-auto overflow-hidden md:grid md:grid-rows-[auto_1fr_auto]">
    <div className="p-5 bg-zinc-700 text-white">
      <p>
        <b>{title}</b>
      </p>
    </div>
    <div className="p-5">{children}</div>
    <Link
      className="w-full inline-block text-center bg-yellow-400 p-3"
      href={link}
    >
      View Details
    </Link>
  </div>
);

export default WorkoutCard;
