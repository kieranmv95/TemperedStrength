import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/hooks/redux";

const App = () => {
  const userProfile = useAppSelector(
    ({ featureToggle }) => featureToggle.userProfile
  );

  const data = {
    user: {
      nickname: "John Doe",
      memberSince: "July 2023",
      foundingMember: true,
    },
    oneRepMax: [
      {
        name: "Deadlift",
        weight: 200,
        date: "22nd May 2023",
      },
      {
        name: "Squat",
        weight: 150,
        date: "22nd May 2023",
      },
      {
        name: "Bench Press",
        weight: null,
        date: null,
      },
    ],
    programs: [
      {
        name: "Big Gains on The Big 3",
        durationWeeks: 10,
        sessionsPerWeek: 5,
        slug: "big-gains-on-the-big-3",
      },
    ],
  };
  const [gridView, setGridView] = useState<"programs" | "1rm">("1rm");

  return (
    <>
      <Head>
        <title>Tempered Strength | App</title>
      </Head>
      <main>
        <div className="flex items-center h-[30vh] justify-center bg-slate-900 text-white text-center overflow-hidden relative">
          <div className="relative z-10">
            <h1 className="font-bold text-3xl md:text-5xl">
              TEMPERED STRENGTH
            </h1>
            <p className="inline-block md:text-lg pt-2 pl-6 pr-6 mt-2 md:pt-3 md:pl-8 md:pr-8 md:mt-4 border-t">
              Forged in Resilience
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
          {userProfile && (
            <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
              <div className="inline-block w-[5.25rem] h-[5.25rem] bg-gray-700 rounded-full" />
              <div>
                <h2 className="font-bold text-lg leading-none mb-1">
                  {data.user.nickname}
                </h2>
                <p className="leading-none mb-1">
                  Member Since - {data.user.memberSince}
                </p>
                {data.user.foundingMember && (
                  <div className="bg-main text-white rounded-full px-3 py-2 inline-block mt-1 leading-none text-sm">
                    Founding Member
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-7">
            <button
              className={`text-lg lg:text-3xl font-bold ${
                gridView !== "1rm" && "text-gray-400"
              }`}
              onClick={() => setGridView("1rm")}
            >
              1RM Tracker
            </button>
            <button
              className={`text-lg lg:text-3xl font-bold ${
                gridView !== "programs" && "text-gray-400"
              }`}
              onClick={() => setGridView("programs")}
            >
              Programs
            </button>
          </div>

          {gridView === "1rm" && (
            <div className="grid gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
              {data.oneRepMax.map((lift) => (
                <div
                  key={lift.name}
                  className="bg-main text-white rounded-md overflow-hidden"
                >
                  <div className="p-3">
                    <h3 className="text-xl">{lift.name}</h3>
                    <p>
                      {lift.weight ? (
                        <>
                          <span className="font-bold">{lift.weight}KG</span> -
                          22nd May 2023
                        </>
                      ) : (
                        <span className="font-bold">
                          {lift.weight}Not Logged
                        </span>
                      )}
                    </p>
                  </div>
                  <Link
                    className="bg-main-light inline-block w-full p-2 text-center"
                    href={`/app/${lift.name.toLocaleLowerCase()}`}
                  >
                    View
                  </Link>
                </div>
              ))}
              <div className="bg-gray-200 rounded-md overflow-hidden text-center items-center grid p-4">
                <p className="font-bold">More coming soon</p>
              </div>
            </div>
          )}

          {gridView === "programs" && (
            <div className="grid gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
              {data.programs.map((program) => (
                <div
                  key={program.name}
                  className="bg-main text-white rounded-md overflow-hidden"
                >
                  <div className="p-3">
                    <h3 className="text-xl font-bold">{program.name}</h3>
                    <p>
                      Duration (Weeks):{" "}
                      <span className="font-bold">{program.durationWeeks}</span>
                    </p>
                    <p>
                      Sessions per week:{" "}
                      <span className="font-bold">
                        {program.sessionsPerWeek}
                      </span>
                    </p>
                  </div>
                  <Link
                    className="bg-main-light inline-block w-full p-2 text-center"
                    href={`/app/${program.slug}`}
                  >
                    View
                  </Link>
                </div>
              ))}
              <div className="bg-gray-200 rounded-md overflow-hidden text-center items-center grid p-4">
                <p className="font-bold">More coming soon</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
