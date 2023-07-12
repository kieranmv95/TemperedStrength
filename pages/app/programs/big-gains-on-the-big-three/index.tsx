import Head from "next/head";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import { BackButton, UserProfileCard } from "@/components";
import Link from "next/link";

const BigGainsOnTheBigThree = () => {
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
                className={`text-md lg:text-3xl font-bold`}
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
                className={`text-md lg:text-3xl font-bold text-gray-400`}
              >
                FAQ
              </Link>
            </div>
            <p className="mb-3">
              Beginner Big lifts is a 5 day program from the Lifting Dev. This
              program aims to get you more stable and stronger in the Big 3.
            </p>
            <ul className="list-disc pl-6 mb-3">
              <li>Deadlift</li>
              <li>Bench</li>
              <li>Squat</li>
            </ul>
            <p className="mb-3">
              This program is a 10 week program, in which we aim to have
              measurable results in each of the big lifts. So don’t forget to
              log your weights and don’t digress from the program, Stick with it
              and trust the numbers. Each session should last 60 minutes on
              average but could last slightly longer on some occasions.
            </p>
            <h2 className="text-xl font-bold mb-3 mt-6">
              Who is this program for
            </h2>
            <p className="mb-3">
              This program is for everyone, Beginner to advanced. We go off a
              percentage of your 1 rep max to determine percentages at which we
              lift throughout the program. This means the program scales with
              you!
            </p>

            <p className="mb-3">
              And don’t worry if you don’t have 1 rep maxes as we use the first
              week to set them so we have something to go off for the remainder
              of the program.
            </p>

            <h2 className="text-xl font-bold mb-3 mt-6">Program Format</h2>
            <p className="mb-3">
              The typical format of this program is as follows, with tests weeks
              differing slightly to reduce fatigue on test weeks
            </p>
            <table className="min-w-full text-left text-sm font-light mb-3">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Day
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Focus
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Monday
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Deadlift</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Tuesday
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Bench</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Wednesday
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Accessory Work
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Thursday
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Squat</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Friday
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Shoulder Press
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Saturday
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    (optional) Active recovery
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    Sunday
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Rest</td>
                </tr>
              </tbody>
            </table>
            <p className="mb-3">
              Each session Consists of up to 4 clear sections.
            </p>
            <ul className="list-disc pl-6 mb-3">
              <li>
                <span className="font-bold">Warm up</span> 8 - 16 minutes
              </li>
              <li>
                <span className="font-bold">Big Lifts</span> (if included on
                session) 20 - 30 minutes
              </li>
              <li>
                <span className="font-bold">Accessory Work</span> 20-30 minutes
              </li>
              <li>
                <span className="font-bold">Optional Stretching</span> 5 - 10
                minutes
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default BigGainsOnTheBigThree;
