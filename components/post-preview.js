import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="bg-gray-800 p-5 transform hover:scale-110 transition-all duration-200 hover:shadow-2xl">
      <h3 className="text-xl lg:text-2xl mb-3 leading-7  font-mono tracking-tighter">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-sm lg:text-md mb-4 font-mono tracking-tighter font-light">
        <Date dateString={date} />
      </div>
      {excerpt && <p className="text-lg leading-relaxed mb-4">{excerpt}</p>}
    </div>
  );
}
