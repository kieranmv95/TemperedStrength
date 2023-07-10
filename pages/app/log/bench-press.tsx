import Head from "next/head";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/hooks/redux";
import useUser from "@/hooks/useUser";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { updateOneRepMax } from "@/redux/slice/userProfile";
import Link from "next/link";

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

          <div className="mt-7">
            <Link href="/app" className="font-bold py-3 inline-block">
              &#8592; Back
            </Link>
            <h1 className="text-lg lg:text-3xl font-bold">
              Bench Press 1RM:{" "}
              {oneRepMax ? <>{oneRepMax}kg</> : "Log your first one rep max!"}
            </h1>
            <div className="mt-4">
              <button
                className="bg-main text-white rounded px-3 py-2 inline-block mt-1 leading-none"
                onClick={() => setShowModal(!showModal)}
              >
                {oneRepMax
                  ? "Update One Rep Max"
                  : "Log your first one rep max!"}
              </button>
            </div>
            {oneRepMax && (
              <div className="mt-8">
                <h1 className="text-md lg:text-xl font-bold">
                  Breakdown of your 1RM
                </h1>
                <div className="text-sm p-3 bg-orange-100 rounded text-orange-600 mb-2 mt-2">
                  <p>Rounded to the nearest whole number</p>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    checked={showFives}
                    onClick={() => setShowFives(!showFives)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium"
                  >
                    Show increments of 5%
                  </label>
                </div>

                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                          <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                              <th scope="col" className="px-6 py-4">
                                %
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Weight
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                100%
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {oneRepMax}kg
                              </td>
                            </tr>
                            {showFives && (
                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  95%
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {Math.round((Number(oneRepMax) / 100) * 95)}kg
                                </td>
                              </tr>
                            )}
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                90%
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {Math.round((Number(oneRepMax) / 100) * 90)}kg
                              </td>
                            </tr>
                            {showFives && (
                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  85%
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {Math.round((Number(oneRepMax) / 100) * 85)}kg
                                </td>
                              </tr>
                            )}
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                80%
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {Math.round((Number(oneRepMax) / 100) * 80)}kg
                              </td>
                            </tr>
                            {showFives && (
                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  75%
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {Math.round((Number(oneRepMax) / 100) * 75)}kg
                                </td>
                              </tr>
                            )}
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                70%
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {Math.round((Number(oneRepMax) / 100) * 70)}kg
                              </td>
                            </tr>
                            {showFives && (
                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  65%
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {Math.round((Number(oneRepMax) / 100) * 65)}kg
                                </td>
                              </tr>
                            )}
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                60%
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {Math.round((Number(oneRepMax) / 100) * 60)}kg
                              </td>
                            </tr>
                            {showFives && (
                              <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  55%
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                  {Math.round((Number(oneRepMax) / 100) * 55)}kg
                                </td>
                              </tr>
                            )}
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                50%
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {Math.round((Number(oneRepMax) / 100) * 50)}kg
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
