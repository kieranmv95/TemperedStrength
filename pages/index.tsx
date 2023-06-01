import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { format } from "date-fns";
import { IArticleSummary, getLatestPosts } from "@/utils/contentful";
import { Pill } from "@/components";
import Link from "next/link";

type HomeProps = {
  posts: IArticleSummary[];
};

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Tempered Strength | Forged in Resilience</title>
        <meta
          name="description"
          content="Welcome to Tempered Strength, the ultimate fitness destination offering honest reviews, engaging content, and innovative workout programs to enhance your strength, endurance, and overall well-being. Join us on this transformative journey to achieve your fitness goals and unlock your true potential."
        />
        <meta
          name="keywords"
          content="fitness resource, boost strength, enhance endurance, honest reviews, engaging content, workout programs, transformative journey, achieve fitness goals, unlock true potential"
        />
      </Head>
      <main>
        <div className="flex items-center h-[50vh] justify-center bg-slate-900 text-white text-center overflow-hidden relative">
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
        <div className="py-12 px-6 container lg:py-16 lg:text-md md:px-4">
          <h2 className="text-2xl font-bold md:text-2xl lg:text-3xl mb-6">
            Workouts
          </h2>
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
            <Link
              className="w-full inline-block text-center bg-yellow-400 p-3"
              href="/workouts/murph"
            >
              View Details
            </Link>
          </div>
          <h2 className="text-2xl font-bold md:text-2xl lg:text-3xl mb-6">
            Latest Articles
          </h2>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/articles/${post.slug}`}
              className="mb-6 block"
            >
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <Pill condensed={true}>{post.category}</Pill>
              <p className="inline-block pl-2">
                {format(new Date(post.date), "yyyy-MM-dd")}
              </p>
              <p className="mt-2">{post.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getLatestPosts(3);

  return {
    props: {
      posts,
    },
  };
};
