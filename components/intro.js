import styles from "./intro.module.css";

export default function Intro(props) {
  return (
    <section className="">
      <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl tracking-tighter leading-tight md:pr-8 mb-6 font-mono">
        Hi, I'm Aaron Neville.
      </h1>
      <div className="text-gray-600 font-mono leading-7 tracking-tighter">
        <p className="mb-6">
          As a front end developer, I get to build some really cool and useful
          things. <i>You</i> might not find this site very useful, but that's
          not on me. For me, it was a fun couple days learning{" "}
          <a className={styles.link} href="https://sanity.io">
            Sanity.io
          </a>
          {", "}
          finally playing with{" "}
          <a className={styles.link} href="https://tailwindcss.com">
            TailwindCSS
          </a>{" "}
          and getting to know{" "}
          <a className={styles.link} href="https://postcss.org">
            PostCSS
          </a>{" "}
          more.
        </p>
        <p className="mb-6">
          Making a blog is also an incentive to actually write something, so
          keep an eye out.
        </p>
      </div>
    </section>
  );
}
