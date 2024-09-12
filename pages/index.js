import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const sections = ['Section 1', 'Section 2', 'Section 3'];

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
        <div key={index} className={`h-screen flex items-center justify-center text-white text-4xl ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-red-500'}`}>
          {section}
        </div>
      ))}
    </div>
  );
}
