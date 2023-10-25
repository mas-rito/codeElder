import { useEffect, useState } from "react";
import AboutSection from "../components/Layouts/AboutSection";
import HeroSection from "../components/Layouts/HeroSection";
import ServicesSection from "../components/Layouts/ServicesSection";
import ProjectSection from "../components/Layouts/ProjectSection";

const Home = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScroll(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isScroll);

  return (
    <>
      <HeroSection isScrolled={isScroll} />
      <section id="about">
        <AboutSection />
      </section>
      <section id="services" className="mt-20">
        <ServicesSection />
      </section>
      <section id="project" className="mt-20">
        <ProjectSection />
      </section>
    </>
  );
};

export default Home;
