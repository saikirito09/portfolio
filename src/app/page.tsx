"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Code,
  Bookmark,
  User,
  Send,
} from "lucide-react";

const MangaPortfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "デジタルの冒険",
      subtitle: "Digital Adventure",
      description:
        "Full-stack application with real-time collaboration features",
      tags: ["React", "Node.js", "MongoDB"],
      status: "Completed",
    },
    {
      title: "未来への扉",
      subtitle: "Gateway to Future",
      description: "Next-generation serverless architecture implementation",
      tags: ["TypeScript", "Next.js", "Firebase"],
      status: "In Progress",
    },
    {
      title: "創造の旅",
      subtitle: "Creation Journey",
      description: "Enterprise-scale data visualization platform",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      status: "Deployed",
    },
  ];

  const skills = [
    { name: "Frontend Development", level: 90, icon: "⚡️" },
    { name: "Backend Architecture", level: 85, icon: "🔮" },
    { name: "System Design", level: 88, icon: "💫" },
    { name: "Cloud Services", level: 82, icon: "☁️" },
    { name: "API Development", level: 87, icon: "🌟" },
  ];

  const NavButton = ({ section, icon }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`
        group flex items-center space-x-2 px-6 py-3
        transition-all duration-300 hover:bg-black hover:text-white
        ${activeSection === section ? "bg-black text-white" : ""}
      `}
    >
      {icon}
      <span className="uppercase tracking-wider">{section}</span>
    </button>
  );

  return (
    <div
      className={`min-h-screen bg-white text-black transition-all duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Manga-style Header */}
      <header className="relative h-screen border-b-4 border-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10" />

        {/* Speed lines with better positioning */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-0.5 bg-black opacity-20"
              style={{
                left: `${i * 7}%`,
                transform: `rotate(${45 + i * 2}deg)`,
                animation: `speedLine ${1 + i * 0.1}s infinite linear`,
              }}
            />
          ))}
        </div>

        {/* Main title content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <div className="space-y-8 text-center">
            <div
              className={`transform transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-8xl font-bold mb-4 relative inline-block">
                MANDAVA
                <div className="absolute -inset-2 border-4 border-black transform -rotate-1" />
                <div className="absolute -inset-2 border-4 border-black transform rotate-1" />
              </h1>
            </div>

            <div
              className={`transition-all delay-300 duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-6xl font-bold tracking-wider">SAI SANDEEP</p>
              <div className="mt-4 flex items-center justify-center space-x-3">
                <Sparkles className="w-6 h-6" />
                <p className="text-2xl tracking-widest">SOFTWARE ENGINEER</p>
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black">
        <div className="container mx-auto">
          <div className="flex justify-between items-stretch">
            <NavButton section="about" icon={<User className="w-5 h-5" />} />
            <NavButton section="projects" icon={<Code className="w-5 h-5" />} />
            <NavButton
              section="skills"
              icon={<Bookmark className="w-5 h-5" />}
            />
            <NavButton section="contact" icon={<Send className="w-5 h-5" />} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {activeSection === "about" && (
          <section className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <div className="relative p-8 border-4 border-black bg-white">
              <div className="absolute -inset-2 border-4 border-black -z-10 bg-white transform rotate-1" />
              <h2 className="text-4xl font-bold mb-6 tracking-wider">
                ABOUT ME
              </h2>
              <p className="text-xl leading-relaxed">
                As a software engineer with a passion for clean code and
                innovative solutions, I bridge the gap between complex technical
                challenges and elegant user experiences. My approach combines
                the precision of engineering with the creativity of design,
                resulting in scalable and maintainable solutions that make a
                difference.
              </p>
            </div>
          </section>
        )}

        {activeSection === "projects" && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-6 border-4 border-black bg-white
                         hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className="absolute -inset-2 border-4 border-black -z-10 bg-white
                              transform -rotate-1 group-hover:rotate-1 transition-transform duration-300"
                />
                <div className="mb-4">
                  <h3 className="text-3xl font-bold mb-1">{project.title}</h3>
                  <p className="text-xl text-gray-700">{project.subtitle}</p>
                </div>
                <p className="mb-4 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 border-2 border-black text-sm
                               transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1 border-2 border-black
                              rotate-12 text-sm font-bold"
                >
                  {project.status}
                </div>
              </div>
            ))}
          </section>
        )}

        {activeSection === "skills" && (
          <section className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative p-6 border-4 border-black bg-white
                           hover:transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-2 border-4 border-black -z-10 bg-white transform rotate-1" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-xl font-bold">{skill.name}</span>
                    </div>
                    <div className="w-48 h-4 border-2 border-black bg-white">
                      <div
                        className="h-full bg-black transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "contact" && (
          <section className="max-w-2xl mx-auto animate-fadeIn">
            <div className="relative p-8 border-4 border-black bg-white">
              <div className="absolute -inset-2 border-4 border-black -z-10 bg-white transform -rotate-1" />
              <h2 className="text-4xl font-bold mb-8 tracking-wider">
                GET IN TOUCH
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    text: "email@example.com",
                  },
                  {
                    icon: <Github className="w-6 h-6" />,
                    text: "github.com/username",
                  },
                  {
                    icon: <Linkedin className="w-6 h-6" />,
                    text: "linkedin.com/in/username",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="group relative p-4 border-4 border-black bg-white
                             flex items-center space-x-4 hover:transform hover:scale-105
                             transition-all duration-300"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div
                      className="absolute -inset-2 border-4 border-black -z-10
                                  bg-white transform rotate-1
                                  group-hover:-rotate-1 transition-transform duration-300"
                    />
                    {contact.icon}
                    <span className="text-xl">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default MangaPortfolio;
