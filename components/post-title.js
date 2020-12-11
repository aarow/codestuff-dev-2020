export default function PostTitle({ children }) {
  return (
    <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-mono leading-tight md:leading-13 mb-12 md:text-left">
      {children}
    </h1>
  );
}
