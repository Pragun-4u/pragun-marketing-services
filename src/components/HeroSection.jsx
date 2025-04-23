// src/components/HeroSection.jsx - Fixed version
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroMedia = [
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1677568554453-ae5baf28da6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Luxury apartment exterior",
  },
  {
    type: "video",
    url: "/assets/heroSectionVideo.mp4",
    poster:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    alt: "Luxury swimming pool",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const currentItem = heroMedia[currentIndex];
  const isVideo = currentItem.type === "video";

  // Auto-advance carousel
  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroMedia.length);
    };

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set timeout for next slide
    timeoutRef.current = setTimeout(nextSlide, isVideo ? 15000 : 6000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isVideo]);

  // Handle video playback
  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, [isVideo, currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Media carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
          style={{ marginTop: "0px" }} // Ensure no margin at top
        >
          {isVideo ? (
            <video
              ref={videoRef}
              src={"src/assets/heroSectionVideo.mp4"}
              //   poster={currentItem.poster}
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
              playsInline
            />
          ) : (
            <img
              src={currentItem.url}
              alt={currentItem.alt}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroMedia.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl md:mt-16" // Added margin-top to account for navbar
            >
              <div className="inline-block bg-emerald-600 text-white px-4 py-1 text-sm font-medium rounded-full mb-4">
                BOOKING OPEN: LIMITED TIME ONLY
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
                <span className="block">Godrej Horizon</span>
                <span className="block text-emerald-400">Wadala</span>
              </h1>
              <p className="text-white/80 text-base sm:text-lg mb-4 sm:mb-6">
                At Wadala By Godrej Properties
              </p>

              {/* Project details - Responsive grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4 text-center">
                  <div className="text-white/70 text-xs sm:text-sm">
                    Land Parcel
                  </div>
                  <div className="text-white font-bold text-sm sm:text-xl">
                    5 Acres
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4 text-center">
                  <div className="text-white/70 text-xs sm:text-sm">Floors</div>
                  <div className="text-white font-bold text-sm sm:text-xl">
                    44 Storeys
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4 text-center">
                  <div className="text-white/70 text-xs sm:text-sm">
                    Possession
                  </div>
                  <div className="text-white font-bold text-sm sm:text-xl">
                    Dec 2026
                  </div>
                </div>
              </div>

              {/* Payment plans - Hidden on small screens */}
              <div className="hidden sm:block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <ul className="space-y-2 text-white">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Get 1% Monthly Payment Plan Benefit
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    30:30:30:10 Payment Plan Available
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Exclusive Flexi Payment Plan
                  </li>
                </ul>
              </div>

              {/* Price section */}
              <div>
                <h2 className="text-white text-base sm:text-xl font-medium">
                  Luxurious 2 & 3 BHK Starts At
                </h2>
                <div className="flex items-baseline">
                  <span className="text-2xl sm:text-4xl font-bold text-emerald-400">
                    ₹ 2.91 Cr
                  </span>
                  <span className="ml-2 text-white/80 text-sm sm:text-base">
                    Onwards
                  </span>
                </div>

                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-6 py-2 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md shadow-lg flex items-center transition-all duration-300 text-sm sm:text-base"
                  >
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Brochure
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-6 py-2 sm:py-3 bg-gray-500/80 hover:bg-white/30 backdrop-blur-sm text-white rounded-md shadow-lg flex items-center transition-all duration-300 text-sm sm:text-base"
                  >
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Virtual Tour
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
