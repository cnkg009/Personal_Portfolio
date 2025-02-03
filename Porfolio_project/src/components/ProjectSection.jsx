import React, { useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const projects = document.querySelectorAll(".p-6");
    projects.forEach((project, index) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });
    });
  }, []);
  return (
    <section id="projects" className="py-12 md:py-24 bg-gray-200 text-white">
      <div className=" mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-blue-800  sm:text-5xl text-center mb-8">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-4">
          <div className="p-6 space-y-2 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
            <div className="bg-gray-700 rounded-lg w-full h-40 mb-4 flex items-center justify-center">
              <img
                src="/public/WEBCLONE.png"
                alt="Web-Clone"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-gray-400">
              Website Clone – Skilled in replicating and enhancing existing
              websites using modern web technologies. Proficient in recreating
              UI/UX designs with HTML, CSS, and Tailwind CSS while ensuring
              responsiveness and accessibility
            </p>
          </div>

          <div className="p-6 space-y-2 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
            <div className="bg-gray-700 rounded-lg w-full h-40 mb-4 flex items-center justify-center">
              <img
                src="/public/Realtimechat.png"
                alt="Chat Application"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-gray-400">
              Real-Time Chat Application – Developed a responsive and
              interactive chat application using React for the front end and
              Mongodb/WebSockets for real-time communication.
            </p>
          </div>

          <div className="p-6 space-y-2 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
            <div className="bg-gray-700 rounded-lg w-full h-40 mb-4 flex items-center justify-center">
              <img
                src="/public/Ecommerce.jpg"
                alt="Ecommerce"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold">Project 3</h3>
            <p className="text-gray-400">
              E-Commerce Website – Designed and developed a fully responsive
              e-commerce platform using HTML, CSS, Tailwind CSS, and React.
              Implemented interactive UI components, product listings,
              filtering, and a dynamic shopping cart.
            </p>
          </div>
        </div>
        <Link to="/projects">
          <Button
            variant="outline"
            className="hover:bg-gray-700 hover:text-white"
          >
            Explore All Projects
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
