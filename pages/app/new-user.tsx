import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Formik } from "formik";
import { useAppDispatch } from "@/hooks/redux";
import * as Yup from "yup";
import { setUserProfile } from "@/redux/slice/userProfile";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  deadlift: Yup.number(),
  squat: Yup.number(),
  bench: Yup.number(),
});

const NewUser = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { userProfile } = useUser(false);

  useEffect(() => {
    if (userProfile.user) {
      router.push("/app");
    }
  }, [userProfile, router]);

  return (
    <>
      <Head>
        <title>Tempered Strength | App - New User</title>
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
        <div className="py-12 px-4 lg:py-16 lg:text-md container md:max-w-[640px]">
          <h1 className="text-3xl font-bold mb-4">Hi, you must be new here.</h1>
          <div className="text-sm p-3 bg-orange-100 rounded text-orange-600 mb-4">
            <p className="mb-1">
              This app is in Beta, there&apos;s lots missing and lot&apos;s to
              come.
            </p>
            <p className="mb-1">
              Data is stored per device and per browser, we will soon be
              migrating to real accounts. This means data is lost upon resetting
              device data or clearing cache and storage on your device.
            </p>
          </div>

          <p className="mb-3">
            To get started we need to collect a small amount of infomation.
          </p>
          <Formik
            initialValues={{
              name: "",
              deadlift: "",
              squat: "",
              bench: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
              dispatch(
                setUserProfile({
                  user: {
                    name: values.name,
                    memberSince: new Date(),
                    foundingMember: false,
                  },
                  oneRepMax: [
                    {
                      name: "Deadlift",
                      weight: values.deadlift || null,
                      slug: "deadlift",
                    },
                    {
                      name: "Squat",
                      weight: values.squat || null,
                      slug: "back-squat",
                    },
                    {
                      name: "Bench Press",
                      weight: values.bench || null,
                      slug: "bench-press",
                    },
                  ],
                })
              );
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <h2 className="text-xl font-bold mb-2">User information</h2>
                <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight"
                  />
                  {props.errors.name && (
                    <div id="feedback">{props.errors.name}</div>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-2">Lift Numbers (KG)</h2>
                <p className="text-sm p-3 bg-orange-100 rounded text-orange-600 mb-3">
                  If you do not know your One rep max numbers don&apos;t worry.
                  You can add these at any point.
                </p>
                <div className="grid gap-3 md:grid-cols-3 md:gap-4 mb-3">
                  <div>
                    <label htmlFor="deadlift">Deadlift</label>
                    <input
                      id="deadlift"
                      type="number"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.deadlift}
                      name="deadlift"
                      className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight"
                    />
                    {props.errors.deadlift && (
                      <div id="feedback">{props.errors.deadlift}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="squat">Squat</label>
                    <input
                      id="squat"
                      type="number"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.squat}
                      name="squat"
                      className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight"
                    />
                    {props.errors.squat && (
                      <div id="feedback">{props.errors.squat}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="bench">Bench Press</label>
                    <input
                      id="bench"
                      type="number"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.bench}
                      name="bench"
                      className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight"
                    />
                    {props.errors.bench && (
                      <div id="feedback">{props.errors.bench}</div>
                    )}
                  </div>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </main>
    </>
  );
};

export default NewUser;
