import { useState, useEffect } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { getAllJobs } from "../lib/api";
import Job from "../components/job";
import ReactLogo from "../images/react-logo.svg";
import CSSLogo from "../images/css-logo.svg";
import JSLogo from "../images/javascript-logo.svg";
import WebpackLogo from "../images/webpack-logo.svg";
import GitLogo from "../images/git-logo.svg";
import DockerLogo from "../images/docker-logo.svg";
import SanityLogo from "../images/sanity-logo.svg";
import NodeLogo from "../images/node-logo.svg";

const AboutMe = () => (
  <div className="max-w-screen-md m-auto mb-14 ">
    <div>
      <h1 className="font-mono text-3xl md:text-5xl mb-4">
        Obligatory About Section
      </h1>
    </div>
    <div className="font-serif text-xl md:text-2xl leading-8 md:leading-9">
      <p>
        As a front end developer with a diverse skillset, I get to make amazing
        interfaces, try new technologies, and contribute in design matters. My
        focus is always on the user experience: accessibility, responsive
        design, and data accuracy.
      </p>

      <p>
        Everyday, I’m excited to do what I do—creating and improving application
        experiences. Solving challenges and making beautiful interfaces tickles
        my love of design, coding, automation, and learning. Before JavaScript
        became ubiquitous in web and application development, my work revolved
        around CSS and graphic design. Since then however, I have expanded my
        attention upon the entire experience and now do everything in React and
        other frameworks.
      </p>
    </div>
  </div>
);

export default function Resume({ preview }) {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    getAllJobs().then((result) => setAllJobs(result));
  }, []);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Resume | {CMS_NAME}</title>
      </Head>
      <Container>
        <article>
          <section>
            <AboutMe />
          </section>
          <section>
            <Skills />
          </section>
          <section>
            <Jobs allJobs={allJobs} />
          </section>
        </article>
      </Container>
    </Layout>
  );
}

const Jobs = ({ allJobs = [] }) => (
  <div className="max-w-screen-lg m-auto ">
    <ul>
      {allJobs.map((job) => (
        <li key={job._id} className="mb-6">
          <Job {...job}></Job>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <div className=" mb-14 max-w-screen-md m-auto ">
      <ul className="grid grid-cols-7 gap-x-12 items-center ">
        <li>
          <CSSLogo />
        </li>
        <li>
          <NodeLogo />
        </li>
        <li>
          <WebpackLogo />
        </li>
        <li>
          <ReactLogo />
        </li>
        <li>
          <GitLogo />
        </li>
        <li>
          <DockerLogo />
        </li>
        <li>
          <SanityLogo />
        </li>
      </ul>
    </div>
  );
};
