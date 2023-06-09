import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { format } from "date-fns";
import {
  IArticleSummary,
  IQuote,
  getLatestPosts,
  getLatestQuotes,
} from "@/utils/contentful";
import { Pill, WorkoutCard } from "@/components";
import Link from "next/link";

type HomeProps = {
  posts: IArticleSummary[];
  quotes: IQuote[];
};

const Home = ({ posts, quotes }: HomeProps) => {
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
        <div className="flex items-center h-[30vh] md:h-[50vh] justify-center bg-slate-900 text-white text-center overflow-hidden relative">
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
            Latest Quotes
          </h2>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 mb-6">
            {quotes.map((quote) => (
              <div key={quote.quote}>
                <Image
                  className="object-cover shadow-lg"
                  alt={`${quote.author} - ${quote.author}`}
                  src={quote.image.url}
                  width={500}
                  height={500}
                  quality={75}
                />
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold md:text-2xl lg:text-3xl mb-6">
            Latest Workouts
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
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
  const quotes = await getLatestQuotes(3);

  return {
    props: {
      posts,
      quotes,
    },
  };
};
