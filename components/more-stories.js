import PostPreview from "../components/post-preview";

const DEFAULT_CLASSNAME =
  "grid grid-cols-1 lg:grid-cols-2 col-gap-10 row-gap-10";

export default function MoreStories({ posts, colCount = 1, className = "" }) {
  const gridClasses = [DEFAULT_CLASSNAME];
  switch (true) {
    case colCount > 3:
      gridClasses.push("xl:grid-cols-4");
    case colCount > 2:
      gridClasses.push("xl:grid-cols-3");
  }

  return (
    <section>
      <ul className={`${gridClasses.join(" ")} ${className}`}>
        {posts.map((post) => (
          <li key={post.slug}>
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
