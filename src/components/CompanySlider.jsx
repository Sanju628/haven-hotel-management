import React, { useRef, useEffect, useState } from "react";

const companyLogo = [
  { companyLogo: "/company1.png" },
  { companyLogo: "/company2.png" },
  { companyLogo: "/company3.png" },
  { companyLogo: "/company4.png" },
  { companyLogo: "/company5.png" },
  { companyLogo: "/company6.png" },
  { companyLogo: "/company8.png" },
  { companyLogo: "/company9.png" },
  { companyLogo: "/company10.png" },
  { companyLogo: "/company11.png" },
  { companyLogo: "/company12.png" },
  { companyLogo: "/company13.png" },
  { companyLogo: "/company14.png" },
  { companyLogo: "/company15.png" },
  { companyLogo: "/company16.png" },
  { companyLogo: "/company17.png" },
  { companyLogo: "/company18.png" },
  { companyLogo: "/company19.png" },
  { companyLogo: "/company20.png" },
  { companyLogo: "/company21.png" },
  { companyLogo: "/company22.png" },
  { companyLogo: "/company23.png" },
  { companyLogo: "/company24.png" },
  { companyLogo: "/company25.png" },
];

export default function CompanySlider() {
  const sectionRef = useRef(null);
  const logoContainerRef = useRef(null);
  const [scrollState, setScrollState] = useState({
    isFullyVisible: false,
    hasScrolledToTop: false,
    hasScrolledToBottom: false,
  });

  // Monitor when component becomes fully visible
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isFullyVisible = entry.intersectionRatio >= 0.98;

        setScrollState((prev) => ({
          ...prev,
          isFullyVisible,
          // Reset scroll completion when entering view
          hasScrolledToTop: !isFullyVisible ? false : prev.hasScrolledToTop,
          hasScrolledToBottom: !isFullyVisible
            ? false
            : prev.hasScrolledToBottom,
        }));

        // When component becomes fully visible, snap it into position
        if (isFullyVisible && logoContainerRef.current) {
          // Scroll section into view smoothly
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
      {
        threshold: [
          0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.98, 1,
        ],
        rootMargin: "0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Monitor internal scroll position
  useEffect(() => {
    const logoContainer = logoContainerRef.current;
    if (!logoContainer) return;

    const handleScroll = () => {
      const scrollTop = logoContainer.scrollTop;
      const scrollHeight = logoContainer.scrollHeight;
      const clientHeight = logoContainer.clientHeight;

      const tolerance = 10;
      const isAtTop = scrollTop <= tolerance;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - tolerance;

      setScrollState((prev) => ({
        ...prev,
        hasScrolledToTop: isAtTop,
        hasScrolledToBottom: isAtBottom,
      }));
    };

    logoContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      logoContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Advanced scroll hijacking logic
  useEffect(() => {
    const handleWheel = (e) => {
      const { isFullyVisible, hasScrolledToTop, hasScrolledToBottom } =
        scrollState;

      // Don't hijack if not fully visible
      if (!isFullyVisible) {
        return;
      }

      const logoContainer = logoContainerRef.current;
      const section = sectionRef.current;

      if (!logoContainer || !section) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // SCROLLING DOWN LOGIC
      if (scrollingDown) {
        // If not at bottom, hijack the scroll and scroll internal content
        if (!hasScrolledToBottom) {
          e.preventDefault();
          e.stopPropagation();
          logoContainer.scrollTop += e.deltaY;
        }
        // If at bottom, allow page scroll to continue to next section
        // (don't prevent default)
      }

      // SCROLLING UP LOGIC
      if (scrollingUp) {
        // If not at top, hijack the scroll and scroll internal content
        if (!hasScrolledToTop) {
          e.preventDefault();
          e.stopPropagation();
          logoContainer.scrollTop += e.deltaY;
        }
        // If at top, allow page scroll to continue to previous section
        // (don't prevent default)
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (section) {
        section.removeEventListener("wheel", handleWheel);
      }
    };
  }, [scrollState]);

  return (
    <>
      <section
        ref={sectionRef}
        className="flex h-screen sticky top-0"
        style={{ fontFamily: "'Roboto Mono', monospace" }}
      >
        {/* Fixed Left Section */}
        <div className="w-1/2 flex flex-col justify-center px-16 py-20">
          <div className="mb-8">
            <h3
              className="text-left mb-2"
              style={{
                fontFamily: "'Koulen', sans-serif",
                fontSize: "95px",
                letterSpacing: "-1.5px",
                lineHeight: "1em",
                color: "rgb(47, 47, 47)",
                fontWeight: "normal",
              }}
            >
              SOME OF{" "}
              <span
                style={{
                  fontFamily: "'Pinyon Script', cursive",
                  fontSize: "100px",
                  letterSpacing: "0px",
                  color: "rgb(123, 101, 34)",
                  fontWeight: "normal",
                }}
              >
                our
              </span>
            </h3>

            <h3
              className="text-right"
              style={{
                fontFamily: "'Koulen', sans-serif",
                fontSize: "95px",
                letterSpacing: "-1.5px",
                lineHeight: "0.9em",
                color: "rgb(47, 47, 47)",
                fontWeight: "normal",
              }}
            >
              Cherised Clients
            </h3>
          </div>
        </div>

        {/* Scrollable Right Section */}
        <div
          ref={logoContainerRef}
          className="w-1/2 h-screen overflow-y-auto py-20 scrollbar-hide"
        >
          <div className="flex flex-col gap-6 pr-8">
            {companyLogo.map((logo, index) => (
              <div
                key={index}
                className="transition-all duration-300 p-8 flex items-center justify-center h-48 ml-8 flex-shrink-0"
              >
                <img
                  src={logo.companyLogo}
                  alt={`Company ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                  style={{
                    filter: "none",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }

            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `,
          }}
        />
      </section>
    </>
  );
}
