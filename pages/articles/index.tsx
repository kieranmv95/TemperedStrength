import { Pill } from "@/components";
import { IArticleSummary, getAllPosts } from "@/utils/contentful";
import { format } from "date-fns";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type ArticleProps = {
  posts: IArticleSummary[];
};

const Articles = ({ posts }: ArticleProps) => {
  return (
    <>
      <Head>
        <title>Tempered Strength | Articles</title>
        <meta
          name="description"
          content="Discover a treasure trove of fitness knowledge and inspiration on our Articles page. From workout routines and nutrition tips to wellness advice and success stories, our comprehensive articles cover every aspect of your fitness journey. Unleash your potential and achieve your goals with the expert insights and valuable information found in our carefully curated collection. Explore our Articles page now and take a step towards transforming your body and optimizing your health."
        />
        <meta
          name="keywords"
          content="Fitness articles, Workout routines, Nutrition tips, Wellness advice, Success stories, Fitness inspiration, Exercise tips, Health and wellness articles, Fitness knowledge, Fitness resources, Body transformation, Healthy lifestyle, Fitness motivation, Exercise guides, Wellness trends"
        />
      </Head>
      <main>
        <div className="flex items-center h-[50vh] justify-center bg-slate-900 text-white text-center overflow-hidden relative">
          <div className="relative z-10">
            <h1 className="font-bold text-3xl md:text-5xl">Articles</h1>
            <p className="inline-block md:text-lg pt-2 pl-6 pr-6 mt-2 md:pt-3 md:pl-8 md:pr-8 md:mt-4 border-t">
              All The Latest
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
          {posts.map((post) => (
            <Link key={post.slug} href={`/articles/${post.slug}`}>
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

export default Articles;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
