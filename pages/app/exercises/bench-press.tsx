import Head from "next/head";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import useUser from "@/hooks/useUser";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { updateOneRepMax } from "@/redux/slice/userProfile";
import Link from "next/link";
import { BackButton, BreakdownGrid, UserProfileCard } from "@/components";

const BenchPress = () => {
  const { userProfile } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [showFives, setShowFives] = useState(false);

  const oneRepMaxes = useAppSelector(
    ({ userProfile }) => userProfile.oneRepMax
  );
  const dispatch = useAppDispatch();

  const oneRepMax = oneRepMaxes.find(
    (max) => max.slug === "bench-press"
  )?.weight;

  const ValidationSchema = Yup.object().shape({
    benchPress: Yup.string(),
  });

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
          <UserProfileCard />

          <div className="mt-7">
            <BackButton />
            <h1 className="text-lg lg:text-3xl font-bold mb-3">Bench Press</h1>
            <h2 className="text-md lg:text-2xl font-bold flex gap-3 items-center">
              1RM {oneRepMax ? <>{oneRepMax}kg</> : "Log your first!"}
              <button
                className="bg-main text-white rounded px-3 py-2 inline leading-none text-xs lg:text-sm font-normal"
                onClick={() => setShowModal(!showModal)}
              >
                {oneRepMax ? "Update" : "Log"}
              </button>
            </h2>
            {oneRepMax && (
              <BreakdownGrid
                title="Breakdown of your 1RM"
                className="mt-8"
                oneRepMax={oneRepMax}
                showFives={showFives}
                setShowFives={setShowFives}
              />
            )}
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={() => setShowModal(!showModal)}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <Formik
                initialValues={{
                  benchPress: oneRepMax,
                }}
                validationSchema={ValidationSchema}
                onSubmit={(values) => {
                  dispatch(
                    updateOneRepMax({
                      slug: "bench-press",
                      weight: values.benchPress || "",
                    })
                  );

                  setShowModal(!showModal);
                }}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit} className="p-6">
                    <h2 className="text-xl font-bold mb-2">
                      User personal best
                    </h2>
                    <div>
                      <label htmlFor="benchPress">Bench Press 1RM (KG)</label>
                      <input
                        id="benchPress"
                        type="number"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.benchPress || ""}
                        name="benchPress"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight"
                      />
                      {props.errors.benchPress && (
                        <div id="feedback">{props.errors.benchPress}</div>
                      )}
                    </div>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BenchPress;