import { About } from "@/components/About";
import { BookShelf } from "@/components/BookShelf";
import { Hero } from "@/components/Hero";
import { Visit } from "@/components/Visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookShelf />
      <About />
      <Visit />
    </>
  );
}
