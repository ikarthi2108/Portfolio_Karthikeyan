// src/components/Projects.jsx
import { useState } from 'react';

const Projects = ({ darkMode }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (index) => {
    setExpandedProject(prev => (prev === index ? null : index));
  };

  const projects = [
    {
      title: "Ticketing Management System",
      shortDescription: "A system for efficient ticket creation, tracking, and resolution.",
      fullDescription: [
        "Streamlined company operations with efficient ticket creation, tracking, and resolution workflows.",
        "Developed departmental management modules using React.js & MUI for seamless user experience.",
        "Implemented interactive maps for better visualization of tickets across locations.",
        "Optimized frontend components for faster load times and smoother interactions."
      ],
      role: "Frontend Developer",
      technologies: ["React.js", "GraphQL", "MUI"],
      showLinks: false,
      icon: "🎫",
      accentColor: "bg-purple-100 dark:bg-purple-900"
    },
    {
      title: "Quiz, Donation, and Waste Collection",
      shortDescription: "A waste management app with interactive quizzes and challenges.",
      fullDescription: [
        "Developed waste management web app with interactive quizzes, increasing user engagement.",
        "Optimized performance with Redux state management and Bootstrap responsive design.",
        "Integrated RESTful APIs for dynamic content delivery and seamless communication.",
        "Implemented secure authentication and role-based access control using JWT."
      ],
      role: "Frontend Developer",
      technologies: ["React.js", "Redux", "Bootstrap", "Chart.js", "JWT"],
      showLinks: false,
      icon: "♻️",
      accentColor: "bg-green-100 dark:bg-green-900"
    },
    {
      title: "Shows, Events, Artist Info Guide",
      shortDescription: "Mobile app for managing and exploring festival events.",
      fullDescription: [
        "Built mobile app for festival events management with seamless browsing experience.",
        "Integrated SQLite for offline functionality in low-connectivity areas.",
        "Designed intuitive UI with React Native for both iOS and Android platforms."
      ],
      role: "Mobile App Frontend Developer",
      technologies: ["React Native", "SQLite"],
      showLinks: false,
      icon: "🎪",
      accentColor: "bg-yellow-100 dark:bg-yellow-900"
    },
    {
      title: "Employee Management App",
      shortDescription: "Manage employee profiles, schedules, timesheets, and time-offs.",
      fullDescription: [
        "Built mobile app to manage employee timesheets, schedules, profiles, and time-off requests.",
        "Developed responsive UI components using React Native ensuring cross-platform compatibility.",
        "Integrated secure login and profile management features for smooth user experience.",
        "Optimized performance and implemented offline support using local storage."
      ],
      role: "Frontend Developer",
      technologies: ["React Native", "Redux", "AsyncStorage"],
      showLinks: false,
      icon: "👩‍💼",
      accentColor: "bg-blue-100 dark:bg-blue-900"
    }
  ];

  return (
    <section
      id="projects"
      className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Here are some of my notable projects. Click "View More" to learn about my contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index;
            const pointsToShow = isExpanded ? project.fullDescription : project.fullDescription.slice(0, 2);

            return (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } ${isExpanded ? 'ring-2 ring-blue-500' : ''}`}
              >
                <div className={`p-6 ${project.accentColor} flex items-center`}>
                  <span className="text-4xl mr-4">{project.icon}</span>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {project.role}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-4`}>
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? "bg-gray-700 text-blue-300" 
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div 
                    className={`transition-all duration-300 ${
                      isExpanded ? "max-h-96" : "max-h-40"
                    } overflow-hidden`}
                  >
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className={`font-semibold mb-3 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                        Project Details:
                      </h4>
                      <ul className="space-y-3">
                        {pointsToShow.map((point, i) => (
                          <li 
                            key={i} 
                            className={`flex items-start ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                          >
                            <span className={`inline-block mr-2 mt-1 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <button
                      onClick={() => toggleExpand(index)}
                      className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                        darkMode 
                          ? "text-blue-400 hover:bg-gray-700" 
                          : "text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {isExpanded ? 'Show Less' : 'View More'}
                    </button>

                    {project.showLinks && (
                      <div className="flex gap-3">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            darkMode 
                              ? "bg-blue-600 hover:bg-blue-700 text-white" 
                              : "bg-blue-100 hover:bg-blue-200 text-blue-700"
                          }`}
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            darkMode 
                              ? "bg-gray-700 hover:bg-gray-600 text-white" 
                              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                          }`}
                        >
                          View Code
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
