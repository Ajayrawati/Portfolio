import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // to show success/error

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/xyzdynab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("Thank you! Your message has been sent.");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000033] via-[#000080] via-[#0047AB] to-[#00CFFF] flex flex-col items-center p-6">
      <div className="mt-[100px] w-full max-w-6xl flex flex-col lg:flex-row items-center gap-10">

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-4 text-2xl lg:text-xl text-white">
          <a href="https://github.com/ajayrawati" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ajay-singh-346393191/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/ajayrawat0016/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaInstagram />
          </a>
          <div className="w-px h-16 bg-white mt-2"></div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-[#1A1A85] rounded-xl shadow-lg p-8 w-full">
          <h2 className="text-3xl font-bold mb-4 text-white">Let's connect.</h2>
          <p className="text-white mb-6">
            If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 text-white rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 text-white rounded-lg px-4 py-2 h-32 resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition"
            >
              Send &rarr;
            </button>
          </form>

          {status && <p className="mt-4 text-green-400">{status}</p>}
        </div>

        {/* Illustration */}
        <div className="hidden lg:flex flex-1 justify-center">
          <img
            src="/ballon.png"
            alt="Contact Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Right vertical email */}
      <div className="fixed right-0 top-2/3 rotate-90 text-white text-sm lg:text-base tracking-widest hidden lg:block">
        ajaysinghrawat244@gmail.com
      </div>
    </div>
  );
}

export default ContactPage;
