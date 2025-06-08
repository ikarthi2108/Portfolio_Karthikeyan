// src/components/Skills.jsx
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaSass,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiJest,
  SiGraphql,
  SiPostman,
  SiSwagger,
  SiJira,
  SiAmazonaws,
  SiReact,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt size={40} />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs size={40} />, color: "text-yellow-500" },

    { name: "React.js", icon: <FaReact size={40} />, color: "text-blue-400" },
    { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "text-black dark:text-white" },

    { name: "Node.js", icon: <FaNode size={40} />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress size={40} />, color: "text-gray-500" },
    { name: "React Native", icon: <SiReact size={40} />, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, color: "text-teal-500" },
    { name: "Bootstrap", icon: <FaBootstrap size={40} />, color: "text-purple-600" },
    { name: "Material UI", icon: <span className="text-4xl">MUI</span>, color: "text-blue-600" },

    { name: "MongoDB", icon: <SiMongodb size={40} />, color: "text-green-600" },

    { name: "Microsoft SQL Server", icon: <SiMicrosoftsqlserver size={40} />, color: "text-red-500" },


    { name: "RESTful APIs", icon: <span className="text-4xl">REST</span>, color: "text-green-700" },



    { name: "Git", icon: <FaGitAlt size={40} />, color: "text-orange-600" },
    { name: "GitHub", icon: <FaGitAlt size={40} />, color: "text-gray-800 dark:text-white" },


    { name: "Jira", icon: <SiJira size={40} />, color: "text-blue-600" },

    { name: "Generative AI", icon: <span className="text-4xl">AI</span>, color: "text-purple-500" },
  ];

  return (
    <section
      id="skills"
      className={`section-padding ${darkMode ? "bg-gray-800" : "bg-blue-50"}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform hover:scale-105"
            >
              <div className={`mb-4 ${skill.color}`}>{skill.icon}</div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;