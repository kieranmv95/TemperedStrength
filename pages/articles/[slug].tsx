import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { IArticle, getAllPosts, getPost } from "@/utils/contentful";
import { RichTextRenderer, Pill } from "@/components";
import { format } from "date-fns";

type ArticleProps = {
  post: IArticle;
};

const Article = ({ post }: ArticleProps) => {
  return (
    <>
      <Head>
        <title>Tempered Strength | Articles</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta
          property="og:url"
          content={`https://www.temperedstrength.com/articles/${post.slug}`}
        />
        <meta property="og:type" content="article" />
        {/* TODO: Configure images for articles and use the below as a fallback */}
        <meta
          property="og:image"
          content="https://www.temperedstrength.com/images/eleiko.png"
        />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Kieran Venison" />
      </Head>
      <main>
        <div className="flex items-center justify-center bg-slate-900 text-white text-center overflow-hidden relative">
          <div className="relative z-10 py-[7.5rem] md:py-[10rem] ">
            <h1 className="font-bold text-3xl md:text-5xl">{post.title}</h1>
            <p className="inline-block md:text-lg pt-2 pl-6 pr-6 mt-2 md:pt-3 md:pl-8 md:pr-8 md:mt-4">
              {post.description}
            </p>
          </div>
        </div>
        <div className="py-12 px-6 container space-y-[1.25rem] lg:py-16 lg:text-md md:px-4">
          <div>
            <Pill>{post.category}</Pill>
            <p className="inline-block pl-4">
              {format(new Date(post.date), "yyyy-MM-dd")}
            </p>
          </div>

          <RichTextRenderer data={post.body} />
        </div>
      </main>
    </>
  );
};

export default Article;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const post = await getPost(slug);

  return {
    props: {
      post: post ?? null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts();

  const paths = allPosts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
