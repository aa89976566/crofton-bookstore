import { About } from "@/components/About";
import { BookShelf } from "@/components/BookShelf";
import { ConditionGuide, HowToReserve } from "@/components/GuideSections";
import { HomeHero, NewsSection, SellSection } from "@/components/HomeSections";
import { Visit } from "@/components/Visit";

export default function HomePage() {
  return (
    <>
      <div className="hero-stage">
        <HomeHero />
      </div>

      <div className="content-sheet">
        <NewsSection />
        <SellSection />
        <BookShelf />
        <HowToReserve />
        <ConditionGuide />
        <About />
        <Visit />
      </div>
    </>
  );
}
