import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`py-12 ${darkMode ? "bg-gray-900" : "bg-gray-50"} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand Section */}
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Karthikeyan
            </h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Full Stack Developer
            </p>
            <p className={`mt-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Creating beautiful, functional websites with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`font-medium ${
                      darkMode 
                        ? "text-blue-400 hover:text-blue-300" 
                        : "text-blue-600 hover:text-blue-800"
                    } transition-colors duration-200 relative group`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                        darkMode ? 'bg-blue-300' : 'bg-blue-800'
                      } transition-all duration-300 group-hover:w-full`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
              Connect With Me
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/ikarthi2108"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-blue-800 hover:bg-blue-700 text-blue-200"
                    : "bg-blue-100 hover:bg-blue-200 text-blue-600"
                } transition-colors`}
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/karthikeyan-r-7baba2219"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-blue-800 hover:bg-blue-700 text-blue-200"
                    : "bg-blue-100 hover:bg-blue-200 text-blue-600"
                } transition-colors`}
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:Karthikeyanzx21@gmail.com"
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-blue-800 hover:bg-blue-700 text-blue-200"
                    : "bg-blue-100 hover:bg-blue-200 text-blue-600"
                } transition-colors`}
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className={`mt-12 pt-8 border-t ${darkMode ? "border-gray-700" : "border-gray-200"} text-center`}
        >
          <p
            className={`flex flex-wrap items-center justify-center gap-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            <span>© {year} Karthikeyan R.</span>
            <span className="flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> using React & Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
