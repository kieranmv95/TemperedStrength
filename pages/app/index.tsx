import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/hooks/redux";
import useUser from "@/hooks/useUser";

const App = () => {
  const [gridView, setGridView] = useState<"programs" | "1rm">("1rm");
  const { userProfile } = useUser();

  const programsToggle = useAppSelector(
    ({ featureToggle }) => featureToggle.programs
  );

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
              TEMPERED STRENGTH
            </h1>
            <p className="inline-block md:text-lg pt-2 pl-6 pr-6 mt-2 md:pt-3 md:pl-8 md:pr-8 md:mt-4 border-t">
              Members Area
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
          <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
            <div className="grid w-[5.25rem] h-[5.25rem] bg-main rounded-full text-center font-bold text-white content-center text-4xl">
              {userProfile.user?.name.substring(0, 1)}
            </div>
            <div>
              <h2 className="font-bold text-lg leading-none mb-1">
                {userProfile.user?.name}
              </h2>
              <p className="leading-none mb-1">
                {userProfile.user?.memberSince.toLocaleString("en-GB", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
              {userProfile.user?.foundingMember && (
                <div className="bg-main text-white rounded-full px-3 py-2 inline-block mt-1 leading-none text-sm">
                  Founding Member
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 mt-7">
            <button
              className={`text-lg lg:text-3xl font-bold ${
                gridView !== "1rm" && "text-gray-400"
              }`}
              onClick={() => setGridView("1rm")}
            >
              1RM Tracker
            </button>
            {programsToggle && (
              <button
                className={`text-lg lg:text-3xl font-bold ${
                  gridView !== "programs" && "text-gray-400"
                }`}
                onClick={() => setGridView("programs")}
              >
                Programs
              </button>
            )}
          </div>

          {gridView === "1rm" && (
            <div className="grid gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
              {userProfile.oneRepMax.map((lift) => (
                <div
                  key={lift.name}
                  className="bg-main text-white rounded-md overflow-hidden"
                >
                  <div className="p-3">
                    <h3 className="text-xl">{lift.name}</h3>
                    <p>
                      {lift.weight ? (
                        <>
                          <span className="font-bold">{lift.weight}KG</span>
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
                    href={`/app/log/${lift.slug}`}
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
