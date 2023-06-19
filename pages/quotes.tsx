import { WorkoutCard } from "@/components";
import { getAllQuotes, IQuote } from "@/utils/contentful";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

const Quotes = ({ quotes }: { quotes: IQuote[] }) => {
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
            <h1 className="font-bold text-3xl md:text-5xl">Quotes</h1>
            <p className="inline-block md:text-lg pt-2 pl-6 pr-6 mt-2 md:pt-3 md:pl-8 md:pr-8 md:mt-4 border-t">
              All the weekly quotes from the lifting dev in one place
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quotes.map((quote) => (
              <div key={quote.quote}>
                <Image
                  className="object-cover"
                  alt={`${quote.author} - ${quote.author}`}
                  src={quote.image.url}
                  width={500}
                  height={500}
                  quality={75}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Quotes;

export const getStaticProps: GetStaticProps = async () => {
  const quotes = await getAllQuotes();

  return {
    props: {
      quotes,
    },
  };
};
