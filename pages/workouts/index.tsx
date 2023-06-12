import { WorkoutCard } from "@/components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Workouts = () => {
  return (
    <>
      <Head>
        <title>Tempered Strength | Workouts</title>
        <meta
          name="description"
          content="Discover a treasure trove of curated workouts."
        />
        <meta
          name="keywords"
          content="Workout routines, Fitness inspiration, Exercise tips, Fitness knowledge, Body transformation, Healthy lifestyle, Exercise guides"
        />
      </Head>
      <main>
        <div className="flex items-center h-[50vh] justify-center bg-slate-900 text-white text-center overflow-hidden relative">
          <div className="relative z-10">
            <h1 className="font-bold text-3xl md:text-5xl">Workouts</h1>
            <p className="inline-block md:text-lg pt-2 pl-6 pr-6 mt-2 md:pt-3 md:pl-8 md:pr-8 md:mt-4 border-t">
              The best workouts for all your needs
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
        <div className="py-12 px-6 container space-y-[1.25rem] lg:py-16 lg:text-md md:px-4">
          <h3 className="text-4xl font-bold mb-4">Wods</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <WorkoutCard title="Murph" link="/workouts/murph">
              <p>
                <b>For time</b>, wearing a (
                <span className="text-red-500 font-bold">10kg</span>/
                <span className="text-red-500 font-bold">22lbs</span>) weighted
                vest
              </p>
              <ul className="list-disc pl-6">
                <li className="mt-1">
                  <span className="text-red-500 font-bold">1</span> mile run
                </li>
                <li className="mt-1">
                  <span className="text-red-500 font-bold">100</span> Pull-ups
                </li>
                <li className="mt-1">
                  <span className="text-red-500 font-bold">200</span> Push-ups
                </li>
                <li className="mt-1">
                  <span className="text-red-500 font-bold">300</span> Air Squats
                </li>
                <li className="mt-1">
                  <span className="text-red-500 font-bold">1</span> mile run
                </li>
              </ul>
            </WorkoutCard>
            <WorkoutCard title="TEC 23.1" link="/workouts/tec-231">
              <p>
                <b>For time</b>{" "}
                <span className="text-red-500 font-bold">7</span> min time cap
              </p>
              <ul className="list-disc pl-6">
                <li className="mt-1">
                  <span className="text-red-500 font-bold">30</span> cal row
                </li>
                <li className="mt-1">
                  <span className="text-red-500 font-bold">30</span> Deadlifts{" "}
                  <span className="text-red-500 font-bold">(100/70kg)</span>
                </li>
                <li className="mt-1">
                  <span className="text-red-500 font-bold">30</span> Overbar
                  burpees
                </li>
              </ul>
            </WorkoutCard>
          </div>
        </div>
      </main>
    </>
  );
};

export default Workouts;
