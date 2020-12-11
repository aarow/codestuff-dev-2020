import Link from "next/link";
import * as styles from "./header.module.css";
import Menu from "./menu";

export default function Header() {
  return (
    <div className="flex items-center justify-between  mb-20 mt-8">
      <h2 className="text-2xl md:text-4xl font-mono  tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">
            ~/code-stuff<span className={styles.blinkingBlock}></span>
          </a>
        </Link>
      </h2>
      <Menu />
    </div>
  );
}
