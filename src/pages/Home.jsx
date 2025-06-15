import NavBar from "../components/NavBar";
import Logo from "../assets/me-art.png";
import Wave1 from "../assets/wave (3).svg";
import Wave2 from "../assets/wave (4).svg"
import { Mail, Github, Linkedin } from "lucide-react";
import {
  FaPhp,
  FaJs,
  FaPython,
  FaJava,
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaCode
} from "react-icons/fa";
import { SiCplusplus, SiFlutter, SiDart, SiFlask } from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProjectsSection from "./contents/ProjectsSection";
import ContactSection from "./contents/ContactsSection";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true     // only animate once
    });
  }, []);

  const skills = [
    { name: "PHP", icon: <FaPhp /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "React", icon: <FaReact /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "Linux", icon: <FaLinux /> },
  ];

  return (
    <>
      <NavBar />
      <section id="Home" className="flex flex-col text-white bg-dark-500 scroll-mt-20">
        <div className="mt-24 px-4 flex items-center justify-center gap-10 flex-col md:flex-row">
          <div className="flex flex-col md:flex-row items-center gap-20 max-w-4xl w-full">
            {/* Avatar */}
            <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden bg-orange-300 flex-shrink-0">
              <img src={Logo} alt="Avatar" className="w-full h-full object-cover shadow-lg" />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left max-w-xl">
              <p className="text-sm text-gray-400 mb-2">Hi There!</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                I’m <span className="text-orange-400">Laighton Thaxter Bacalso</span>
              </h1>

              <p className="mb-4">
                I’m a computer science student and{" "}
                <span className="text-blue-400">aspiring full-stack developer</span> based in Davao City.
              </p>

              <p className="mb-4">
                I enjoy building things with{" "}
                <span className="text-green-400">Laravel</span>,{" "}
                <span className="text-green-400">React</span>, and{" "}
                <span className="text-blue-400">Python</span> scripts that automate the boring stuff. Whether it’s a{" "}
                <span className="text-pink-400">job matching platform</span> or a quick tool to clean up data, I like
                turning ideas into working code—<span className="text-blue-300">clean</span>,{" "}
                <span className="text-yellow-300">maintainable</span>, and{" "}
                <span className="text-indigo-300">(hopefully)</span> not too buggy.
              </p>

              <p className="mb-6">
                You’ll find some of my <span className="text-purple-400 font-medium">projects on GitHub</span>. Always down to{" "}
                <span className="text-emerald-400 font-medium">connect</span> or{" "}
                <span className="text-emerald-400 font-medium">collaborate</span>—feel free to{" "}
                <span className="text-blue-400 font-medium">reach out</span>!
              </p>
              <div className="flex items-center gap-4 mt-6">
                {/* See My Work button */}
                <a
                  href="#Projects"
                  className="inline-flex items-center bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 transition"
                >
                  See My Work
                </a>

                {/* Icons */}
                <a
                  href="https://github.com/bakaraw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Github size={20} />
                </a>

                {
                  //<a
                  //  href="https://linkedin.com/in/yourusername"
                  //  target="_blank"
                  //  rel="noopener noreferrer"
                  //  className="opacity-50 hover:opacity-100 transition-opacity"
                  //>
                  //  <Linkedin size={20} />
                  //</a>
                }

                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&to=bacalso.ton2x@gmail.com&tf=cm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen overflow-hidden leading-none">
        <img
          src={Wave1}
          alt="wave1"
          className="w-full h-auto object-cover block"
        />
      </div>
      <section className="w-screen bg-dark-300 py-12 scroll-mt-20" id="Skills">
        {/* Title */}
        <h2
          className="text-2xl md:text-3xl font-bold text-center text-white mb-12"
          data-aos="fade-up"
        >
          Skills & Tools
        </h2>

        {/* Skills Grid */}
        <div
          className="max-w-5xl mx-auto px-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center"
        >
          {skills.map(({ name, icon }, i) => (
            <div
              key={name}
              className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity"
              title={name}
              data-aos="zoom-in"
              data-aos-delay={i * 50} // staggered effect
            >
              <div className="text-4xl">{icon}</div>
              <p className="text-sm mt-1 text-gray-400">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-screen rotate-180 overflow-hidden leading-none">
        <img
          src={Wave2}
          alt="wave2"
          className="w-full h-auto object-cover block"
        />
      </div>
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

