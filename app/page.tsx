"use client"
// import FeaturedServices from "./components/FeaturedServices";
// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";
// import SearchBar from "./components/SearchBar";
// import ServiceCategories from "./components/ServiceCategories";

import FeaturedServices from "./(home)/components/FeaturedServices";
import HeroSection from "./(home)/components/HeroSection";
import Navbar from "./(home)/components/Navbar";
import SearchBar from "./(home)/components/SearchBar";
import ServiceCategories from "./(home)/components/ServiceCategories";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <FeaturedServices />
      <ServiceCategories />
    </div>
  );
}
