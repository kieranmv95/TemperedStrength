import Head from "next/head";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import { BackButton, UserProfileCard } from "@/components";
import Link from "next/link";

const BigGainsOnTheBigThreeFAQ = () => {
  const { userProfile } = useUser();

  if (!userProfile.user) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Tempered Strength | App</title>
      </Head>
      <main>
        <div className="flex items-center justify-center bg-slate-900 text-white text-center overflow-hidden relative py-8 lg:py-0 lg:h-[20vh]">
          <div className="relative z-10">
            <h1 className="font-bold text-3xl md:text-5xl">
              Big Gains on The Big 3
            </h1>
            <p className="inline-block md:text-lg pt-2 pl-6 pr-6 mt-2 md:pt-3 md:pl-8 md:pr-8 md:mt-4 border-t">
              Get big numbers in Squat, Bench and Deadlift
            </p>
          </div>
          <Image
            className="object-cover h-full w-full absolute w-full z-0 opacity-40"
            alt="Eleiko calibrated plates"
            src="/images/eleiko.png"
            width={1000}
            height={500}
            quality={75}
          />
        </div>
        <div className="py-12 px-4 container lg:py-16 lg:text-md">
          <UserProfileCard />

          <div className="mt-7">
            <BackButton />

            <div className="flex gap-3 lg:gap-6 mt-5 mb-7">
              <Link
                href="/app/programs/big-gains-on-the-big-three"
                className={`text-md lg:text-3xl font-bold text-gray-400`}
              >
                Description
              </Link>
              <Link
                href="/app/programs/big-gains-on-the-big-three/program"
                className={`text-md lg:text-3xl font-bold text-gray-400`}
              >
                Program
              </Link>
              <Link
                href="/app/programs/big-gains-on-the-big-three/faq"
                className={`text-md lg:text-3xl font-bold`}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BigGainsOnTheBigThreeFAQ;
