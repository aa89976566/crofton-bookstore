import { About } from "@/components/About";
import { BookShelf } from "@/components/BookShelf";
import { Visit } from "@/components/Visit";

export default function HomePage() {
  return (
    <div className="wrapper main-content">
      <BookShelf />
      <About />
      <Visit />
    </div>
  );
}
