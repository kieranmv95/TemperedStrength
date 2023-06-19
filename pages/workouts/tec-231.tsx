import { WorkoutCard } from "@/components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Workouts = () => {
  return (
    <>
      <Head>
        <title>Tempered Strength | Workouts - Murph</title>
        <meta
          name="description"
          content="A crossFit classic. A brutal and testing for time workout, welcome to murph."
        />
        <meta
          name="keywords"
          content="Workout routines, Fitness inspiration, Exercise tips, Fitness knowledge, Body transformation, Healthy lifestyle, Exercise guides"
        />
      </Head>
      <main>
        <div className="flex items-center h-[50vh] justify-center bg-slate-900 text-white text-center overflow-hidden relative">
          <div className="relative z-10">
            <h1 className="font-bold text-3xl md:text-5xl">TEC 23.1</h1>
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
          <Link href="/workouts" className="inline-block mb-6 w-full">
            Back To All Workouts
          </Link>
          <h3 className="text-4xl font-bold mb-4">Description</h3>
          <p>
            The European Championships (TEC) is a yearly CrossFit competition
            and this is was the first workoiut as part of the qualifying
            workouts for 2023. Its a fast paced chipper and the aim is to not
            stop, or if you have to stop, take a breath and crack on.
          </p>
          <ul className="list-disc pl-6">
            <li className="mt-1">
              <b>Duration:</b> 7 minutes time cap
            </li>
            <li className="mt-1">
              <b>Difficulty:</b> 3/5
            </li>
            <li className="mt-1">
              <b>Works:</b> Back, Legs, Cardio
            </li>
          </ul>

          <div className="w-full inline-block md:w-auto mb-6">
            <WorkoutCard title="TEC 23.1">
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

          <h3 className="text-4xl font-bold mb-4">Breakdown</h3>

          <ul className="list-disc pl-6">
            <li className="mt-1">
              This one is short and all about speed. Push through the pain and
              finish as fast as possible.
            </li>
            <li className="mt-1">
              The more you put in the more it hurts, but the sooner its over
            </li>
          </ul>

          <h3 className="text-4xl font-bold mb-4">Scaling</h3>
          <ul className="list-disc pl-6">
            <li className="mt-1">
              <b>Row</b>. If you cant row due to equipment, use a bike or ski
              erg and google a conversion chart to get the calories or distance
              correct
            </li>
            <li className="mt-1">
              <b>Deadlift</b>. If you cant deadlift the weight, scale it down to
              a more appropriaate weight, This is supposed to be a challenging
              workout so dont go too light, if your doing it all in one set, its
              absolutely too light
            </li>
            <li className="mt-1">
              <b>Burpees</b>. If you cant do burpees, scale to a burpee box jump
              or a burpee to a plate or something similar that you can do
              safely. This one gets hard as you are gassed out from the last 2
              movements. but no matter how challenging it gets keep moving, even
              if its a slow pace dont stop, its the home stretch. This is where
              time is made, or lost.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Workouts;
