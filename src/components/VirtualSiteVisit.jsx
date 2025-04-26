// src/components/VirtualSiteVisit.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VirtualSiteVisit() {
  const [showModal, setShowModal] = useState({
    modalStatus: false,
    component: null,
  });
  const [activeTab, setActiveTab] = useState("exterior");

  // Virtual tour data
  const tourOptions = [
    {
      id: "exterior",
      name: "Exterior & Amenities",
      description:
        "Experience the grand exterior architecture and world-class amenities of Godrej Horizon Wadala.",
      thumbnail:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      videoId: "qBPb_9DMPvE?si=tYpOFUMGOQKp1R-z&amp;start=418", // Replace with actual YouTube video ID
    },
    {
      id: "2bhk",
      name: "2 BHK Residences",
      description:
        "Tour our meticulously designed 2 BHK apartments with premium finishes and optimal layouts.",
      thumbnail:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      videoId: "qBPb_9DMPvE?si=tYpOFUMGOQKp1R-z&amp;start=418", // Replace with actual YouTube video ID
    },
    {
      id: "3bhk",
      name: "3 BHK Residences",
      description:
        "Explore our spacious 3 BHK apartments featuring panoramic views and luxurious interiors.",
      thumbnail:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80",
      videoId: "qBPb_9DMPvE?si=tYpOFUMGOQKp1R-z&amp;start=418", // Replace with actual YouTube video ID
    },
    {
      id: "amenities",
      name: "Club House & Facilities",
      description:
        "Discover the 5-storey clubhouse with swimming pool, gym, spa, and other premium facilities.",
      thumbnail:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      videoId: "qBPb_9DMPvE?si=tYpOFUMGOQKp1R-z&amp;start=418", // Replace with actual YouTube video ID
    },
  ];

  // Get active tour option
  const activeTour = tourOptions.find((option) => option.id === activeTab);

  useEffect(() => {
    if (showModal?.modalStatus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal?.modalStatus]);

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Virtual Site Visit
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Experience Godrej Horizon Wadala from the comfort of your home with our
        immersive virtual tours. Explore the property, amenities, and apartment
        layouts in stunning detail.
      </p>

      {/* Featured Video Section */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden shadow-lg aspect-video bg-gray-900"
          >
            {/* Video Thumbnail with Play Button */}
            <div
              className="absolute inset-0 cursor-pointer group"
              onClick={() =>
                setShowModal({
                  modalStatus: true,
                  component: (
                    <>
                      <div className="aspect-video w-3/4 md:w-1/2 mx-auto h-full md:h-1/2  bg-black rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${activeTour.videoId}?autoplay=1&mute=1&rel=0`}
                          title={activeTour.name}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="md:w-1/2 mx-auto md:h-1/2 mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <h3 className="text-xl font-bold text-white">
                          {activeTour.name}
                        </h3>
                        <p className="text-white/80 mt-2">
                          {activeTour.description}
                        </p>
                      </div>{" "}
                    </>
                  ),
                })
              }
            >
              <img
                src={activeTour.thumbnail}
                alt={activeTour.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-emerald-600/90 rounded-full p-5 text-white shadow-lg group-hover:bg-emerald-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">
                  {activeTour.name}
                </h3>
                <p className="text-white/80 text-sm mt-2">
                  {activeTour.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-1">
          {/* Tour Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-xl shadow-lg overflow-hidden h-full"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Tour Options</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                {tourOptions.map((option, index) => (
                  <motion.li
                    key={option.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <button
                      onClick={() => setActiveTab(option.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-start ${
                        activeTab === option.id
                          ? "bg-emerald-50 border-l-4 border-emerald-500"
                          : "bg-white hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex-shrink-0 h-12 w-12 rounded-md overflow-hidden mr-3">
                        <img
                          src={option.thumbnail}
                          alt={option.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4
                          className={`font-medium ${
                            activeTab === option.id
                              ? "text-emerald-700"
                              : "text-gray-800"
                          }`}
                        >
                          {option.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {option.description}
                        </p>
                      </div>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 360° Tour Section */}
      <div
        id="virtual-360-tour"
        className="bg-gray-50 rounded-xl shadow-lg overflow-hidden p-6 mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              360° Virtual Tour
            </h3>
            <p className="text-gray-600 mt-2">
              Explore Godrej Horizon Wadala with our interactive 360° tour.
              Navigate through the property as if you were there in person.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 px-6 py-3 bg-emerald-600 text-white rounded-md shadow-md hover:bg-emerald-700 transition-colors flex items-center self-start"
            onClick={() =>
              setShowModal({ modalStatus: true, component: <Virtual360View /> })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mr-2"
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
            <p>Launch 360° Tour</p>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              label: "Living Room",
              image:
                "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              label: "Bedroom",
              image:
                "https://images.unsplash.com/photo-1565623833408-d77e39b88af6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              label: "Kitchen",
              image:
                "https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((room, index) => (
            <motion.div
              key={index + room.label}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm group"
            >
              <div className="relative">
                <img
                  src={room?.image}
                  alt={`360° view of ${room?.label}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <button
                    className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors flex items-center"
                    onClick={() =>
                      setShowModal({
                        modalStatus: true,
                        component: <Virtual360View />,
                      })
                    }
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
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                      />
                    </svg>
                    View 360°
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-gray-800">{room?.label}</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Explore the {room.label.toLowerCase()} in immersive 360° view
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Schedule Personal Tour Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prefer a Personal Site Visit?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            While our virtual tours offer a comprehensive view of Godrej Horizon
            Wadala, nothing compares to experiencing it in person. Schedule a
            visit at your convenience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-emerald-600 rounded-md shadow-md hover:bg-gray-100 transition-colors flex items-center justify-center"
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Schedule a Visit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-md shadow-md hover:bg-white/30 transition-colors flex items-center justify-center"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Request a Call Back
            </motion.button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showModal.modalStatus && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 ">
          <div className="relative w-full max-w-4xl md:mt-20">
            <button
              onClick={() =>
                setShowModal({
                  modalStatus: false,
                  component: null,
                })
              }
              className="absolute -top-5 -right-1 md:-right-4.5 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {showModal.component}
          </div>
        </div>
      )}
    </>
  );
}

function Virtual360View() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full  mx-auto h-3/4 md:h-[450px]">
      {loading && (
        <div className="flex justify-center items-center w-full h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 animate-spin text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
      )}
      <iframe
        className="w-full h-full"
        src={`https://www.theasys.io/viewer/YSrwT0lkPLqdPg4bhirXuNXe0lJzSu/?s=t3IcTrp`}
        title={"360 Virtual Tour"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setLoading(false)}
      ></iframe>
    </div>
  );
}
