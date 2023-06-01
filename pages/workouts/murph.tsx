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
            <h1 className="font-bold text-3xl md:text-5xl">Murph</h1>
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
            The CrossFit workout named Murph is a challenging and renowned
            workout that is often performed on Memorial Day in the United States
            to honor fallen military members. It was originally created to honor
            Navy Lieutenant Michael P. Murphy, who was killed in action in
            Afghanistan on June 28, 2005.
          </p>
          <ul className="list-disc pl-6">
            <li className="mt-1">
              <b>Duration:</b> 40-90 minutes
            </li>
            <li className="mt-1">
              <b>Difficulty:</b> 5/5
            </li>
            <li className="mt-1">
              <b>Works:</b> Everything
            </li>
          </ul>

          <div className="shadow-lg rounded-md w-full inline-block md:w-auto mb-6 overflow-hidden">
            <div className="p-5 bg-zinc-700 text-white">
              <p>
                <b>MURPH</b>
              </p>
            </div>
            <div className="p-5">
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
            </div>
          </div>

          <h3 className="text-4xl font-bold mb-4">Breakdown</h3>

          <ul className="list-disc pl-6">
            <li className="mt-1">
              Start with a <b>1-mile run</b>: The workout typically begins with
              a one-mile run, which is meant to simulate the initial run
              Lieutenant Murphy performed as part of his mission.
            </li>
            <li className="mt-1">
              Followed by <b>100 Pull-ups</b>: After completing the run, you
              move on to 100 pull-ups. These can be performed using various grip
              styles such as strict, kipping, or assisted pull-ups.
            </li>
            <li className="mt-1">
              Then, <b>200 Push-ups</b>: Once the pull-ups are done, you move on
              to 200 push-ups. You can choose to do regular push-ups or modify
              them to knee push-ups if needed.
            </li>
            <li className="mt-1">
              Next, <b>300 Air Squats</b>: After the push-ups, you perform 300
              air squats. Keep your feet shoulder-width apart and lower your
              hips down as if sitting on an imaginary chair, ensuring your
              thighs go parallel to the ground.
            </li>
            <li className="mt-1">
              Finish with another <b>1-mile run</b>: To complete the workout,
              you finish with another one-mile run, mirroring the initial run.
              This final run can be physically demanding after the preceding
              exercises.
            </li>
          </ul>

          <h3 className="text-4xl font-bold mb-4">Scaling</h3>
          <ul className="list-disc pl-6">
            <li className="mt-1">
              <b>Weighted Vest</b>. If your scaling anything back start here,
              the workout is hard enough without a vest so assess if you have
              the capability to go with the vest before you start
            </li>
            <li className="mt-1">
              <b>Alternative partitioning / Volume</b>. If doing 100 Pull-ups
              and 200 Push-ups is too large a volume break it up to rest your
              body. do your mile runs unbroken but then do something like 20
              rounds of 5 pull ups, 10 push ups, 15 air squats. This will allow
              you to keep moving and get the work done. Alternatively you can do
              half murph or 1/4 murph if your fitness isnt ready for the full
              thing
            </li>
            <li className="mt-1">
              <b>Running</b>. This isnt a race. its meant to be hard. If you
              struggle to run walk, as long as you keep moving and treat it as a
              chipper your getting something out of this.
            </li>
            <li className="mt-1">
              <b>Pull ups</b>. If pull-ups are your weakness move to jumping
              pull ups, banded pull ups or ring rows
            </li>
            <li className="mt-1">
              <b>Push ups</b>. If push-ups are failing you dial it back to
              kneeling push ups or box push ups
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Workouts;
