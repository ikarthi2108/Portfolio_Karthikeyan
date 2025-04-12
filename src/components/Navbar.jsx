import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white shadow-md dark:bg-gray-900"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
        >
          <span className="hidden lg:inline">
            404 Not Found… Just Kidding, It's Me!
          </span>
          <span className="inline lg:hidden">Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className={`font-medium ${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-800"
                  } transition-colors duration-200 relative group`}
                >
                  {link.title}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                      darkMode ? "bg-blue-300" : "bg-blue-800"
                    } transition-all duration-300 group-hover:w-full`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${
              darkMode
                ? "bg-blue-800 hover:bg-blue-700 text-blue-200"
                : "bg-blue-100 hover:bg-blue-200 text-blue-600"
            }`}
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${
              darkMode
                ? "bg-blue-800 hover:bg-blue-700 text-blue-200"
                : "bg-blue-100 hover:bg-blue-200 text-blue-600"
            }`}
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          <button
            onClick={() => setNavOpen(!navOpen)}
            className={`p-2 ${darkMode ? "text-blue-300" : "text-blue-600"}`}
          >
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full ${
          darkMode ? "bg-gray-900" : "bg-white"
        } shadow-md transition-all duration-300 ${
          navOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className={`block py-2 font-medium ${
                  darkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-800"
                } transition-colors duration-200`}
                onClick={() => setNavOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
