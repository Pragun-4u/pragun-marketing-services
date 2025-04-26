// src/App.jsx
import { motion } from "framer-motion";
import EnquiryForm from "./components/EnquiryForm";
import HeroSection from "./components/HeroSection";
import LocationSection from "./components/LocationSection";
import Navbar from "./components/Navbar";
import VirtualSiteVisit from "./components/VirtualSiteVisit";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      <main>
        <HeroSection />

        {/* Main Content - Adjusted to not clash with hero */}
        <div className="relative z-10 bg-white pt-16 sm:pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-2"
              >
                {/* Content Card */}
                <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                  {/* Welcome Section */}
                  <section className="mb-12 border-b border-gray-100 pb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      Welcome To Godrej Horizon Wadala
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      A residential address at the premium locale of Wadala.
                      Signature Tower at Godrej Horizon offers a world of
                      grandeur in the heart of Mumbai. Its modern 2 and 3-BHK
                      residences with balcony offer views of the breathtaking
                      sunrise at Eastern bay and the unique Mumbai skyline.
                      Amenities include a 5-storeyed clubhouse, steam room, sky
                      lounge, and an infinity pool - all crafted to provide a
                      luxurious, almost regal lifestyle.
                    </p>

                    <div className="flex items-center">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-emerald-600 font-medium flex items-center hover:text-emerald-700 transition-colors"
                      >
                        Read more
                        <svg
                          className="h-5 w-5 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.a>

                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="ml-8 flex items-center text-gray-600 hover:text-emerald-600 transition-colors"
                      >
                        <svg
                          className="h-5 w-5 mr-2"
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
                      </motion.a>
                    </div>
                  </section>

                  {/* Price Section */}
                  <section id="price" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      Price
                    </h2>
                    <div className="overflow-hidden bg-gray-50 shadow-sm rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Type
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Carpet Area
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            ></th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {[
                            {
                              type: "2 BHK Premier",
                              area: "745 Sq. ft.",
                              price: "₹ 2.91 Cr Onwards",
                            },
                            {
                              type: "2 BHK Luxe",
                              area: "733 Sq. ft.",
                              price: "₹ 2.94 Cr Onwards",
                            },
                            {
                              type: "2 BHK Premier",
                              area: "745 Sq. ft.",
                              price: "₹ 2.99 Cr Onwards",
                            },
                            {
                              type: "3 BHK Premier",
                              area: "1053/1059/1070 Sq. ft.",
                              price: "₹ 4.26 Cr Onwards",
                            },
                            {
                              type: "3 BHK Royal",
                              area: "1240 Sq. ft.",
                              price: "₹ 4.99 Cr Onwards",
                            },
                          ].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {item.type}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.area}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                {item.price}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md transition-colors"
                                >
                                  Price Breakup
                                </motion.button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-emerald-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-emerald-700 transition-colors flex items-center"
                      >
                        Complete Costing Details
                      </motion.button>
                    </div>
                  </section>
                </div>

                <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                  <section id="virtual-visit">
                    <VirtualSiteVisit />
                  </section>
                </div>

                {/* Site & Floor Plan Section */}
                <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                  <section id="floor-plan">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      Site & Floor Plan Of Godrej Horizon Wadala
                    </h2>

                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Master Plan
                      </h3>
                      <div className="bg-gray-50 p-6 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                          alt="Master Plan"
                          className="w-full h-auto rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Floor Plan
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          "https://images.unsplash.com/photo-1721244653580-79577d2822a2?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          "https://images.unsplash.com/photo-1721244653580-79577d2822a2?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                          "https://images.unsplash.com/photo-1721244653580-79577d2822a2?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        ].map((item, index) => (
                          <motion.div
                            key={item + index}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 rounded-lg overflow-hidden group"
                          >
                            <div className="relative">
                              <img
                                src={`${item}`}
                                alt={`Floor Plan ${index}`}
                                className="w-full h-auto"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                                  ENQUIRE NOW
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>

                <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                  <section id="location">
                    <LocationSection />
                  </section>
                </div>
              </motion.div>

              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white rounded-xl shadow-xl overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-4">
                      <h2 className="text-xl font-bold text-white">
                        Get The Best Quote
                      </h2>
                    </div>
                    <div className="p-6">
                      <EnquiryForm />
                    </div>
                  </motion.div>

                  {/* Quick contact button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-4 bg-white rounded-xl shadow-xl p-4 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      className="h-5 w-5 mr-2 text-emerald-600 group-hover:text-emerald-700 transition-colors"
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
                    <span className="text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors">
                      Instant Call Back
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-20">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Starting Price</p>
            <p className="text-lg font-bold text-emerald-600">₹ 2.91 Cr</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-md shadow-md hover:from-emerald-700 hover:to-teal-800 transition-colors"
            onClick={() => {
              // Scroll to mobile form or open modal
              document
                .getElementById("mobile-form")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Enquire Now
          </motion.button>
        </div>
      </div>

      {/* Hidden mobile form section */}
      <div id="mobile-form" className="lg:hidden mt-8 px-4 pb-20">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-4">
            <h2 className="text-xl font-bold text-white">Get The Best Quote</h2>
          </div>
          <div className="p-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
