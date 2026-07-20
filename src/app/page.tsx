import { About } from "@/components/About";
import { BookShelf } from "@/components/BookShelf";
import { ConditionGuide, HowToReserve } from "@/components/GuideSections";
import { Visit } from "@/components/Visit";

export default function HomePage() {
  return (
    <div className="wrapper main-content">
      <BookShelf />
      <HowToReserve />
      <ConditionGuide />
      <About />
      <Visit />
    </div>
  );
}
