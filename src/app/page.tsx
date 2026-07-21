import { About } from "@/components/About";
import { BookShelf, FeaturedCarousel } from "@/components/BookShelf";
import { ConditionGuide, HowToReserve } from "@/components/GuideSections";
import {
  HomeHero,
  NewsSection,
  StoryGuide,
} from "@/components/HomeSections";
import { Visit } from "@/components/Visit";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StoryGuide />
      <FeaturedCarousel />
      <BookShelf />
      <HowToReserve />
      <NewsSection />
      <About />
      <Visit />
      <ConditionGuide />
    </>
  );
}
