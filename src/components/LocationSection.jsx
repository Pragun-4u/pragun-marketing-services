// src/components/LocationSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function LocationSection() {
  const [activeTab, setActiveTab] = useState("overview");

  // Location highlights data
  const locationHighlights = [
    {
      category: "Education",
      places: [
        { name: "IIT Bombay", distance: "4.5 km" },
        { name: "Tata Institute of Social Sciences", distance: "3.2 km" },
        { name: "St. Joseph's High School", distance: "1.8 km" },
        { name: "Bombay Scottish School", distance: "5.1 km" },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
    {
      category: "Healthcare",
      places: [
        { name: "Lilavati Hospital", distance: "7.3 km" },
        { name: "Sion Hospital", distance: "2.5 km" },
        { name: "Fortis Hospital", distance: "6.8 km" },
        { name: "Wockhardt Hospital", distance: "4.2 km" },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      ),
    },
    {
      category: "Shopping",
      places: [
        { name: "Phoenix Marketcity", distance: "5.7 km" },
        { name: "R City Mall", distance: "8.3 km" },
        { name: "High Street Phoenix", distance: "9.1 km" },
        { name: "Inorbit Mall", distance: "12.5 km" },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      category: "Transport",
      places: [
        { name: "Wadala Railway Station", distance: "1.2 km" },
        { name: "Monorail Station", distance: "0.8 km" },
        { name: "Eastern Freeway", distance: "2.3 km" },
        {
          name: "Chhatrapati Shivaji International Airport",
          distance: "15.6 km",
        },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
    },
  ];

  // Connectivity data
  const connectivityData = [
    { name: "Eastern Freeway", time: "5 mins" },
    { name: "BKC", time: "15 mins" },
    { name: "Nariman Point", time: "25 mins" },
    { name: "Domestic Airport", time: "30 mins" },
    { name: "International Airport", time: "35 mins" },
    { name: "Navi Mumbai", time: "20 mins" },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Location Of Godrej Horizon Wadala
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Strategically located in Wadala, Mumbai, offering excellent
            connectivity to key areas of the city while providing a serene
            living environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="lg:col-span-2">
            {/* Google Map Embed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4775603498093!2d72.86523931490055!3d19.02557458712244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2f9f79b13b%3A0x13f55c3f86868312!2sWadala%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Godrej Horizon Wadala Location Map"
                className="rounded-xl"
              ></iframe>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            {/* Quick Connectivity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden mb-8"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white">
                  Quick Connectivity
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {connectivityData.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                        {item.time}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          <div>
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white">Address</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Godrej Horizon, Wadala East, Mumbai, Maharashtra 400037
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-emerald-600 text-white rounded-md font-medium shadow-md hover:bg-emerald-700 transition-colors flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Get Directions
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Location Highlights Tabs */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px overflow-x-auto">
              <button
                onClick={() => setActiveTab("overview")}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-emerald-500 text-emerald-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Overview
              </button>
              {locationHighlights.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(category.category.toLowerCase())}
                  className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === category.category.toLowerCase()
                      ? "border-emerald-500 text-emerald-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "overview" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {locationHighlights.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-gray-50 rounded-lg p-5"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 mr-3">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {category.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {category.places.slice(0, 2).map((place, placeIndex) => (
                        <li
                          key={placeIndex}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-gray-600">{place.name}</span>
                          <span className="text-emerald-600 font-medium">
                            {place.distance}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() =>
                        setActiveTab(category.category.toLowerCase())
                      }
                      className="mt-3 text-emerald-600 text-sm font-medium hover:text-emerald-700 flex items-center"
                    >
                      View all
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Individual category view
              locationHighlights.map((category) => {
                if (activeTab === category.category.toLowerCase()) {
                  return (
                    <div key={category.category} className="space-y-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 mr-3">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {category.category} Near Godrej Horizon Wadala
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.places.map((place, placeIndex) => (
                          <motion.div
                            key={placeIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.1 * placeIndex,
                            }}
                            className="bg-gray-50 rounded-lg p-4 flex justify-between items-center"
                          >
                            <span className="text-gray-700">{place.name}</span>
                            <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                              {place.distance}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-gray-600 italic text-sm mt-4">
                        *Distances are approximate and may vary based on the
                        exact route taken.
                      </p>
                    </div>
                  );
                }
                return null;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
