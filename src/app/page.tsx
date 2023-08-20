import Hero from "@/views/Hero";
import Events from "@/views/events";
import FeaturesBanner from "@/views/featuresBanner";
import NewsLetter from "@/views/newsLetter";
import Carousel from "@/views/productsList";

export default function Home() {
  return (
    <div>
      {/* Hero Banner Section*/}
      <Hero />
      {/* Evetns Section */}
      <Events />
      {/* Products Carousel */}
      <Carousel />
      {/* Features Banner */}
      <FeaturesBanner />
      {/* Newsletter */}
      <NewsLetter />
    </div>
  );
}
