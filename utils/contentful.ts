export type IArticleSummary = {
  title: string;
  date: string;
  heroImage?: {
    url: string;
  };
  description: string;
  slug: string;
  category: string;
};

export type IQuote = {
  image: {
    url: string;
  };
  quote: string;
  author: string;
};

export type IArticle = IArticleSummary & {
  body: {
    json: any;
    links: any;
  };
};

const POST_GRAPHQL_FIELDS = `
    title
    date
    heroImage {
      url
    }
    description
    slug
    category
`;

const QUOTE_GRAPHQL_FIELDS = `
  image {
    url
  }
  quote
  author
`;

const fetchGraphQL = async (query: string) => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  return res.json();
};

const extractPost = (fetchResponse: any): IArticle => {
  return fetchResponse?.data?.blogPostCollection?.items?.[0];
};

const extractPostEntries = (fetchResponse: any): IArticleSummary[] => {
  return fetchResponse?.data?.blogPostCollection?.items;
};

export const getLatestPosts = async (
  limit: number
): Promise<IArticleSummary[]> => {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: date_DESC, limit: ${limit}) {
        items {
          ${POST_GRAPHQL_FIELDS} 
        }
      }
    }`
  );

  return extractPostEntries(entries);
};

export const getAllPosts = async (): Promise<IArticleSummary[]> => {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}   
        }
      }
    }`
  );

  return extractPostEntries(entries);
};

export const getPost = async (slug: string): Promise<IArticle> => {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
          body {
            json
            links {
              entries {
                block {
                  sys {
                    id
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                }
              }
            }
          }
        }
      }
    }`
  );

  return extractPost(entry);
};

export const getLatestQuotes = async (limit: number): Promise<IQuote[]> => {
  const entries = await fetchGraphQL(
    `query {
      quoteCollection(limit: ${limit}) {
        items {
          ${QUOTE_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return entries?.data?.quoteCollection?.items;
};

export const getAllQuotes = async (): Promise<IQuote[]> => {
  const entries = await fetchGraphQL(
    `query {
      quoteCollection {
        items {
          ${QUOTE_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return entries?.data?.quoteCollection?.items;
};
