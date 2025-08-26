import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when a link is clicked
  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-[#000033] via-[#000080] via-[#0047AB] to-[#00CFFF] text-white font-sans">
      <nav className="flex justify-between items-center px-6 sm:px-8 py-4 border-b border-gray-700">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          ajay<span className="text-orange-500">.</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li
            onClick={() => handleLinkClick("home")}
            className="hover:text-orange-500 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleLinkClick("skills")}
            className="hover:text-orange-500 cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => handleLinkClick("projects")}
            className="hover:text-orange-500 cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => handleLinkClick("contact")}
            className="hover:text-orange-500 cursor-pointer"
          >
            Contact
          </li>
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="hidden md:inline-block border border-gray-950 px-4 py-2 rounded-lg hover:border-blue-900 hover:text-blue-900 transition"
        >
          Download Resume
        </a>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-[#000033] text-gray-300 px-6 py-4 gap-4 border-b border-gray-700">
          <li
            onClick={() => handleLinkClick("home")}
            className="hover:text-orange-500 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleLinkClick("skills")}
            className="hover:text-orange-500 cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => handleLinkClick("projects")}
            className="hover:text-orange-500 cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => handleLinkClick("contact")}
            className="hover:text-orange-500 cursor-pointer"
          >
            Contact
          </li>
          <li>
            <a
              href="/resume.pdf"
              className="block border border-gray-950 px-4 py-2 rounded-lg hover:border-blue-900 hover:text-blue-900 transition text-center"
            >
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
