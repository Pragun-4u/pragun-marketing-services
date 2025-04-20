// src/components/Navbar.jsx
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Price", href: "#price" },
    { name: "Virtual Site Visit", href: "#virtual-visit" },
    { name: "Virtual 360", href: "#virtual-360-tour" },
    { name: "Site & Floor Plan", href: "#floor-plan" },
    { name: "Location", href: "#location" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <a href="#" className="flex items-center">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                    HORIZON
                  </div>
                  <div className="text-xs font-medium text-gray-500 tracking-wider">
                    WADALA
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  // href={item.href}
                  onClick={() => {
                    const element = document.getElementById(item.href.slice(1));
                    if (element) {
                      const topOffset = 125; // adjust this as needed
                      const elementPosition =
                        element.getBoundingClientRect().top + window.scrollY;
                      const offsetPosition = elementPosition - topOffset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                      setTimeout(() => {
                        window.location.hash = item.href;
                      }, 100);
                    } else {
                      window.location.hash = item.href;
                    }
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors whitespace-nowrap"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 w-0"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center ml-6 space-x-3 whitespace-nowrap">
              <motion.a
                href="tel:+912248970339"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm font-medium">+91 2248970339</span>
              </motion.a>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="px-4 py-2 text-sm font-medium text-emerald-600 border border-emerald-600 rounded-md hover:bg-emerald-50 transition-colors"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Download Brochure
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-teal-700 rounded-md hover:from-emerald-700 hover:to-teal-800 transition-colors"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Pre Register
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              {({ open }) => (
                <>
                  <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-teal-700 rounded-md hover:from-emerald-700 hover:to-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Menu
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className={`size-6 ml-2 -mr-1 text-white transition-transform ${
                        open ? "transform rotate-180" : ""
                      }`}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Menu.Button>
                  <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        {navItems.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={`${
                                  active
                                    ? "bg-emerald-50 text-emerald-600"
                                    : "text-gray-700"
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="tel:+912248970339"
                              className={`${
                                active
                                  ? "bg-emerald-50 text-emerald-600"
                                  : "text-gray-700"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>
                              Call Us
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-emerald-50 text-emerald-600"
                                  : "text-gray-700"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              Download Brochure
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-emerald-50 text-emerald-600"
                                  : "text-gray-700"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm font-medium`}
                            >
                              Pre Register
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
