import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import aboutpic from "../assets/about.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {

  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about-text",
      },
      x: -200,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: ".about-image",
      },
      x: 200,
      opacity: 0,
      duration: 1,
    });
  }, []);
  return (
    <section id="about" className="py-12 md:py-24 ">
      <div className=" px-6 md:px-6">
        <h2 className="about-text text-3xl font-bold text-blue-700 tracking-tighter sm:text-5xl text-center py-8 mb-4">
          About my Journey
        </h2>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 text-center md:text-left">
            <p className="about-text mx-auto max-w-[700px] line-clamp-5 text-gray-500 text-lg md:text-xl dark:text-gray-400 mb-4">
              Hi, I'm Vikas Ranaout, a passionate full-stack developer with a
              focus on building seamless and responsive web applications. I have
              experience in front-end technologies like React, Vue.js, and
              back-end technologies like Node.js and Python. I’m dedicated to
              creating high-quality, scalable software solutions that deliver a
              great user experience.
            </p>
            <Link to="/about" className=" ">
              <Button>Read More</Button>
            </Link>
          </div>

          <div className="flex-1 ">
            <img
              src={aboutpic}
              alt="Full Stack Developer"
              className="w-full h-auto about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
