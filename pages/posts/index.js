import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import { getAllPostsForHome } from "../../lib/api";

export default function Post({ allPosts, preview }) {
  return (
    <Layout preview={preview}>
      <Container>
        <h1 className="font-mono text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8">
          Articles
        </h1>
        <MoreStories posts={allPosts} colCount={3} className="mb-10" />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
