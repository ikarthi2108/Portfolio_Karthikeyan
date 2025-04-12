import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFileAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Hero = ({ darkMode }) => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animation once when it enters the viewport
    });
  }, []);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-16 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-blue-50 to-white"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-12 xl:px-24 2xl:px-32 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          data-aos="fade-right"
        >
          <h3 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-2">
            Hello, I'm
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="blue-text-gradient dark:text-blue-400">
              Karthikeyan R
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-700 dark:text-gray-300">
            FullStack Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Full Stack Developer with 2.5+ years of experience in building
            scalable web and mobile applications. Specialized in the MERN stack
            with added expertise in React Native for cross-platform mobile
            development.
          </p>

          <div className="flex gap-4 justify-center md:justify-start mb-8">
            <a
              href="https://github.com/ikarthi2108"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/karthikeyan-r-7baba2219"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:karthiynot2108@gmail.com"
              className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600 transition-colors"
              aria-label="Email Contact"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1Zyz0y62jiPAnzV3S2q3SuqlJbK0sGgEU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <FaFileAlt className="mr-2" />
              View Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="zoom-in"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-xl">
            <img
              src="profile.jpg"
              alt="Karthikeyan R"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x400?text=Profile+Photo";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
