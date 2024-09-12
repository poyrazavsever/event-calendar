import { useEffect, useState, useRef } from 'react';
import AboutProject from '../sections/AboutProject'; // Import the AboutProject component
import FuturePlans from '../sections/FuturePlans'; // Import the FuturePlans component
import AboutMe from '../sections/AboutMe'; // Import the AboutMe component

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

  // Define the sections with their corresponding components
  const sections = [
    <AboutProject key="about-project" />, // First section with AboutProject component
    <FuturePlans key="future-plans" />, // Second section with FuturePlans component
    <AboutMe key="about-me" />, // Third section with AboutMe component
  ];

  const handleScroll = (event) => {
    if (isScrolling.current) return;

    isScrolling.current = true;

    const newSection = event.deltaY > 0
      ? Math.min(currentSection + 1, sections.length - 1)
      : Math.max(currentSection - 1, 0);

    setCurrentSection(newSection);

    setTimeout(() => {
      isScrolling.current = false;
    }, 800); // Scroll geçiş süresi (ms cinsinden)
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection]);

  return (
    <div
      style={{ transform: `translateY(-${currentSection * 100}vh)`, transition: 'transform 0.8s ease-out' }}
      className="overflow-hidden"
    >
      {sections.map((section, index) => (
        <div key={index} className="h-screen">
          {section}
        </div>
      ))}
    </div>
  );
}