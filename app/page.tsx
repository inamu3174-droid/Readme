import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { Studio } from "@/components/Studio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <FeaturedCollections />
        <Studio />
      </main>
      <Footer />
    </>
  );
}
