import { About } from "@/components/About";
import { BookShelf } from "@/components/BookShelf";
import { ConditionGuide, HowToReserve } from "@/components/GuideSections";
import { HomeHero, NewsSection, SellSection } from "@/components/HomeSections";
import { Visit } from "@/components/Visit";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BookShelf />
      <NewsSection />
      <SellSection />
      <HowToReserve />
      <ConditionGuide />
      <About />
      <Visit />
    </>
  );
}
