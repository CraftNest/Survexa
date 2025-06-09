"use client";

import Button from "@/src/app/_components/button";
import Card from "@/src/app/_components/card";
import Navbar from "@/src/app/_components/navbar";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"; // Import Chevron icons
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react"; // Import useRef and useState

// CountingNumbers component (as defined before)
const CountingNumbers = ({
  from,
  to,
  duration,
  suffix,
}: {
  from: number;
  to: number;
  duration: number;
  suffix: string;
}) => {
  const [displayed, setDisplayed] = useState(from);

  useEffect(() => {
    let frameId: number;
    const startTime = Date.now();

    const animateCount = () => {
      const elapsedTime = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsedTime / duration, 1);
      const current = from + (to - from) * progress;
      setDisplayed(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animateCount);
      } else {
        setDisplayed(to);
      }
    };

    animateCount();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [from, to, duration]);

  return (
    <p className="text-white font-[800] text-[30px] md:text-[48px] z-20">
      {`${Math.floor(displayed)}${suffix}`}
    </p>
  );
};

export default function Hero() {
  const statsRef = useRef(null);
  const statsIsInView = useInView(statsRef, { once: true });
//   const mainControls = useAnimation();

  const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref for the scrollable card container
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true); // Start with true since we expect content to overflow

  useEffect(() => {
    if (statsIsInView) {
      // You could trigger a specific animation here if needed,
      // but for individual motion components, `initial` and `animate` suffice.
    }
  }, [statsIsInView]);

  // Function to check scrollability
  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      console.log('Scroll Check:', { scrollLeft, clientWidth, scrollWidth });

      setCanScrollLeft(scrollLeft > 0);
      // Add a small buffer (1px) to handle sub-pixel rendering issues
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  // Effect to set up and clean up scroll event listener
  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScrollability);
      
      // Use ResizeObserver to detect when content is loaded and check scrollability
      const resizeObserver = new ResizeObserver(() => {
        // Small delay to ensure DOM is updated
        setTimeout(checkScrollability, 10);
      });
      
      resizeObserver.observe(currentRef);
      
      // Initial check with multiple attempts to ensure content is loaded
      const checkMultipleTimes = () => {
        checkScrollability();
        setTimeout(checkScrollability, 100);
        setTimeout(checkScrollability, 300);
        setTimeout(checkScrollability, 500);
      };
      
      checkMultipleTimes();

      return () => {
        currentRef.removeEventListener("scroll", checkScrollability);
        resizeObserver.disconnect();
      };
    }
  }, []); // Empty dependency array means this runs once on mount

  const scrollCards = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 300; // Card width
      const gap = 80; // Gap between cards (gap-20 = 80px)
      const scrollAmount = cardWidth + gap;
      const currentScrollLeft = scrollContainerRef.current.scrollLeft;

      if (direction === "left") {
        scrollContainerRef.current.scrollTo({
          left: currentScrollLeft - scrollAmount,
          behavior: "smooth"
        });
      } else {
        scrollContainerRef.current.scrollTo({
          left: currentScrollLeft + scrollAmount,
          behavior: "smooth"
        });
      }
      
      // Check scrollability after animation completes
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="max-sm:pb-10 min-h-screen flex flex-col relative pt-[30px] px-5 md:pt-[45px]">
      <div className="w-[235px] h-[235px] rounded-full absolute top-[-117px] left-[50%] bg-[#9011FF] blur-[272.5px]" />
      <div className="w-[275px] h-[275px] rounded-full absolute top-[433px] right-[6px] bg-[#9011FF] blur-[272.5px]" />

      <Navbar />
      <main className="flex flex-col max-sm:gap-10 md:gap-10 lg:flex-row lg:justify-between items-center w-full">
        <motion.div
          className="flex flex-col w-full h-full md:items-center lg:items-start lg:pl-[80px] xl:pl-[104px]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="pt-[68px]">
            <motion.p
              className="text-white flex items-center font-[800] text-[40px] md:text-[80px] xl:text-[96px] z-20"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Earn{" "}
              <span>
                <Image
                  src={"/hero/coin.svg"}
                  width={300}
                  height={300}
                  alt="coin"
                  className="w-[60px] md:w-[110px]"
                />
              </span>{" "}
              for Your
            </motion.p>
            <motion.p
              className="font-playfair font-[700] italic text-[#9011FF] text-[40px] md:text-[80px] xl:text-[96px] flex items-center gap-5 md:gap-10 lg:-mt-5"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Opinion{" "}
              <Image
                src={"/hero/star.svg"}
                width={300}
                height={300}
                alt="hand"
                className="w-[60px] md:w-[110px]"
              />
            </motion.p>
            <motion.p
              className="text-[#B1B1B1] max-sm:mt-2 md:text-[20px] md:w-[635px] md:text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Participate in surveys, earn{" "}
              <span className="font-[700]">STRK tokens</span>, without any
              personal information and it&apos;s that simple!
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-3 pt-10 md:pt-[60px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button text="Take a Survey" />
            <Link
              href={"/"}
              className="text-white font-[700] text-[16px] flex items-center gap-2"
            >
              Want to carry out a Survey? <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            className="flex max-sm:justify-between max-sm:w-full md:gap-[96px] pt-[60px]"
            ref={statsRef}
            initial={{ y: 40, opacity: 0 }}
            animate={statsIsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <CountingNumbers from={0} to={2.5} duration={2} suffix="k+" />
              <p className="text-[#B1B1B1] font-[400] text-[16px]">Surveys</p>
            </div>

            <div className="flex flex-col items-center">
              <CountingNumbers from={0} to={120} duration={2} suffix="k+" />
              <p className="text-[#B1B1B1] font-[400] text-[16px]">
                Active Users
              </p>
            </div>

            <div className="flex flex-col items-center">
              <CountingNumbers from={0} to={1.2} duration={2} suffix="M+" />
              <p className="text-[#B1B1B1] font-[400] text-[16px]">
                STRK Earned
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Card Section with Scroll Buttons (Desktop View) */}
        <motion.div
          className="max-sm:hidden md:w-[600px] flex justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {/* Left Arrow Button */}
          <button
            onClick={() => scrollCards("left")}
            className={`p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg z-10 text-white hover:bg-white/20 transition-all duration-200 ${
              canScrollLeft 
                ? 'opacity-100 cursor-pointer' 
                : 'opacity-40 cursor-not-allowed'
            }`}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Cards Container */}
          <div
            className="flex overflow-x-hidden gap-6 scroll-smooth flex-1 w-[350px] xl:w-[500px] snap-x snap-mandatory"
            ref={scrollContainerRef}
          >
            <Card
              title="Web3 User Experience Research"
              note="Share your experiences with decentralized applications and help improve the ecosystem."
              time="~10 minutes"
              questions="12"
              strk="10"
              className="shrink-0 snap-center"
            />

            <Card
              title="Decentralized Finance Survey"
              note="Your insights on DeFi platforms are crucial for future development."
              time="~15 minutes"
              questions="15"
              strk="15"
              className="shrink-0 snap-center"
            />

            <Card
              title="NFT Marketplace Feedback"
              note="Help shape the next generation of NFT trading experiences."
              time="~8 minutes"
              questions="10"
              strk="8"
              className="shrink-0 snap-center"
            />

            <Card
              title="Blockchain Gaming Survey"
              note="Share your thoughts on play-to-earn games and blockchain integration."
              time="~12 minutes"
              questions="14"
              strk="12"
              className="shrink-0 snap-center"
            />
          </div>
          
          {/* Right Arrow Button */}
          <button
            onClick={() => scrollCards("right")}
            className={`p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg z-10 text-white hover:bg-white/20 transition-all duration-200 ${
              canScrollRight 
                ? 'opacity-100 cursor-pointer' 
                : 'opacity-40 cursor-not-allowed'
            }`}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>

        {/* Mobile Section (No explicit arrows for mobile, relies on touch scroll) */}
        <motion.div
          className="md:hidden flex flex-col justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-white font-semibold flex items-center gap-2 pb-5">
            Scroll <ArrowRight size={17} />
          </p>

          <div
            className="flex overflow-x-auto gap-8 px-4 no-scrollbar scroll-smooth snap-x snap-mandatory w-full"
          >
            {/* Cards for mobile view */}
            <Card
              title="Web3 User Experience Research"
              note="Share your experiences with decentralized applications and help improve the ecosystem."
              time="~10 minutes"
              questions="12"
              strk="10"
              className="snap-center shrink-0"
            />

            <Card
              title="NFT Marketplace Feedback"
              note="Help shape the next generation of NFT trading experiences."
              time="~8 minutes"
              questions="10"
              strk="8"
              className="snap-center shrink-0"
            />

            <Card
              title="Decentralized Finance Survey"
              note="Your insights on DeFi platforms are crucial for future development."
              time="~15 minutes"
              questions="15"
              strk="15"
              className="snap-center shrink-0"
            />

            <Card
              title="Blockchain Gaming Survey"
              note="Share your thoughts on play-to-earn games and blockchain integration."
              time="~12 minutes"
              questions="14"
              strk="12"
              className="snap-center shrink-0"
            />
          </div>
        </motion.div>
      </main>
    </section>
  );
}