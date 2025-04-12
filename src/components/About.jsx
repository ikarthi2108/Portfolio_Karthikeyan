// src/components/About.jsx
import { FaCode, FaMobileAlt, FaDatabase, FaUserGraduate } from "react-icons/fa";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`section-padding ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">About Me</h2>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a Full Stack Developer with nearly 2.5 years of experience in building scalable and performant web and mobile applications. I specialize in the MERN stack and have strong proficiency in React Native for cross-platform mobile development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I’ve worked extensively with technologies like React.js, Next.js, Node.js, MongoDB, MySQL, and have hands-on experience with API integration, JWT authentication, server-side rendering (SSR), and static site generation (SSG).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My development approach is user-centric, performance-driven, and guided by Agile methodologies using Git, GitHub, and Jira. I also make use of AI tools like ChatGPT to enhance productivity and documentation.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Outside of coding, I enjoy playing cricket and table tennis, and I have a deep interest in stocks, investments, and economics.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  <FaCode size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">
                  Full Stack Development
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Proficient in building scalable applications with the MERN stack, integrating APIs, and optimizing performance.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  <FaMobileAlt size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">
                  Mobile Development
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Cross-platform app development using React Native, focused on seamless UI/UX and high performance.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="bg-blue-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  <FaDatabase size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">
                  Backend & Database
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Experience with Node.js, Express.js, MongoDB, and MySQL to build robust and secure backend services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
