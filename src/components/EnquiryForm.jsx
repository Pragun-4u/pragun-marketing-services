// ContactForm.jsx
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("8zImhcXtW28l2EHjr"); // ✅ Use your actual public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_owrvbho", "template_pz5xdmm", formRef.current)
      .then((res) => {
        alert("Email sent:", res.text);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((err) => {
        alert("Error sending email:", err);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-secondary-700 mb-6">
        Get in Touch
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <div>
          <label htmlFor="name">Full Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Pragun Karande"
            className=" border border-gray-200 rounded-md-gray-200 rounded-md p-2 w-full outline-none  focus:border-green-600"
          />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="pragunkarande.work@gmail.com"
            className="border border-gray-200 outline-none rounded-md p-2 w-full focus:border-green-600"
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 1234567890"
            className="border border-gray-200 rounded-md p-2 w-full outline-none rounded-md p-2 w-full focus:border-green-600"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            placeholder="How can we help you?"
            className="border border-gray-200 rounded-md p-2 w-full outline-none rounded-md p-2 w-full focus:border-green-600"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="bg-green-600 text-white p-2 rounded w-full outline-none rounded-md p-2 w-full focus:border-green-600"
        >
          Submit Request
        </motion.button>
      </form>
    </motion.div>
  );
}
