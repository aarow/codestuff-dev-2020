import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Aaron Neville
          </h3>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
              &copy;{(new Date()).getFullYear()} Aaron Neville
          </div>
        </div>
      </Container>
    </footer>
  );
}
