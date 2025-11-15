import Header from "@/app/components/core/Header";
import Footer from "@/app/components/core/Footer";
import Hero from "@/app/components/sections/Hero";
import Gallery from "@/app/components/gallery/Gallery";
import SectionDivider from "@/app/components/shared/SectionDivider";
import FeaturedArtist from "@/app/components/sections/FeaturedArtist";
import { fetchEntries } from "@/app/lib/contentful";
import AboutSection from "./components/sections/AboutSection";

export default async function Home() {
  const artworks = await fetchEntries("artCollections");
  
  console.log(`[Home Page] Received ${artworks?.length || 0} artworks from Contentful`);

  return (
    <>
        <Hero />
        <AboutSection />
        {/* <SectionDivider /> */}
        <Gallery artworks={artworks} />
        <SectionDivider flip={true} />
        <FeaturedArtist />
    </>
  );
}
