import Link from "next/link";

type IBackButton = {
  link?: string;
};
const BackButton = ({ link }: IBackButton) => (
  <Link href={link ? link : "/app"} className="font-bold py-3 inline-block">
    &#8592; Back
  </Link>
);

export default BackButton;
