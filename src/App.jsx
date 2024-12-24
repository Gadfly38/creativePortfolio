import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import AboutSection from "./components/aboutsection";
import ServiceSection from "./components/servicesection";
import Marque from "./components/marque";
import CaseStudySection from "./components/casestudysection";
import WatchSection from "./components/watchsection";
import TeamSection from "./components/teamsection";
import Marque1 from "./components/marque1";
import TestimonialSection from "./components/testimonialsection";
import HomeBlogSection from "./components/homeblogsection";
import Marque2 from "./components/marque2";
import Footer from "./components/footer";
import ProgressBar from "./components/progressbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="bg-[#161616]">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <Marque />
        <CaseStudySection />
        <WatchSection />
        <TeamSection />
        <Marque1 />
        <TestimonialSection />
        <HomeBlogSection />
        <Marque2 />
      </main>
      <Footer />
      <ProgressBar />
    </>
  );
}

export default App;
