import { About } from "@/components/About";
import { BookShelf, FeaturedCarousel } from "@/components/BookShelf";
import { ConditionGuide } from "@/components/GuideSections";
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
      <NewsSection />
      <About />
      <Visit />
      <ConditionGuide />
    </>
  );
}
