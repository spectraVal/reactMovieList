import { useState, useEffect } from "react";

const TitleWithIcons = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleIcons = () => {
    if (isMobile) {
      setShowIcons((prev) => !prev);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative inline-flex group" onClick={toggleIcons}>
        {/* Judul */}
        <h1
          className="text-center text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white 
            cursor-pointer px-2 py-1 rounded-md select-none
            transition duration-300
            hover:bg-gradient-to-tr hover:from-[#010030] hover:to-[#160078] hover:bg-clip-text hover:text-transparent
            hover:drop-shadow-[0_0_6px_rgba(0,183,255,0.6)]"
        >
          Rival Movie
        </h1>

        {/* Container Icons */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 mt-10 backdrop-blur-md bg-[#282c34]/70 p-1 rounded-lg flex gap-1 transition-all duration-300 shadow-lg shadow-cyan-500/30
            ${
              isMobile
                ? showIcons
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
                : "opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4"
            }`}
        >
          {[
            {
              href: "https://github.com/spectraVal",
              img: `${process.env.PUBLIC_URL}/github-svgrepo-com.svg`,
              alt: "GitHub spectraVal",
              delay: "delay-100",
            },
            {
              href: "https://www.instagram.com/_mrvlana/",
              img: `${process.env.PUBLIC_URL}/instagram-1-svgrepo-com.svg`,
              alt: "Instagram _mrvlana",
              delay: "delay-200",
            },
            {
              href: "https://www.linkedin.com/in/rival-maulana-107001377",
              img: `${process.env.PUBLIC_URL}/linkedin-linked-in-svgrepo-com.svg`,
              alt: "LinkedIn",
              delay: "delay-300",
            },
          ].map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transform hover:scale-110 transition-all duration-300 ${
                icon.delay
              }
                ${
                  isMobile
                    ? showIcons
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                    : "opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2"
                }`}
              style={{
                transitionDelay: isMobile
                  ? showIcons
                    ? `${(index + 1) * 100}ms`
                    : "0ms"
                  : `${(index + 1) * 100}ms`,
              }}
            >
              <img src={icon.img} alt={icon.alt} className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitleWithIcons;
