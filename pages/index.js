import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

const POST_LIMIT = 10;
const POST_COL_COUNT = 2;

export default function Index({ allPosts, preview }) {
  console.log(allPosts)
  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Layout preview={preview}>
        <Container>
          <div className="grid md:grid-cols-6 gap-0 mt-32">
            <div className="md:col-span-3 lg:col-span-2">
              <Intro />
            </div>
            <div className="md:col-span-3 lg:col-span-4 lg:ml-10 md:p-10 mt-10 md:mt-20 md:overflow-y-auto">
              {allPosts.length > 0 && (
                <MoreStories
                  posts={allPosts}
                  colCount={POST_COL_COUNT}
                  className="mb-10"
                />
              )}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview, POST_LIMIT);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
