import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import profilePic from '../assets/Profile_Pic.jpg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import aboutPic from '../assets/aboutpicPage.svg';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  useEffect(() => {
    // About Section Animation
    gsap.fromTo(
      '.about-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: '.about-title', start: 'top 80%' } }
    );
    
    gsap.fromTo(
      '.about-text',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.4, duration: 1.5, scrollTrigger: { trigger: '.about-text', start: 'top 80%' } }
    );
    
    gsap.fromTo(
      '.profile-pic',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, stagger: 0.4, duration: 1.5, scrollTrigger: { trigger: '.profile-pic', start: 'top 80%' } }
    );

    // Timeline Section Animation
    gsap.fromTo(
      '.timeline-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: '.timeline-title', start: 'top 80%' } }
    );

    gsap.fromTo(
      '.timeline-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        duration: 1.5,
        scrollTrigger: { trigger: '.timeline-item', start: 'top 80%', toggleActions: 'play none none none' },
      }
    );

    // About Details Section Animation
    gsap.fromTo(
      '.about-details-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: '.about-details-title', start: 'top 80%' } }
    );

    gsap.fromTo(
      '.about-details-text',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.4, duration: 1.5, scrollTrigger: { trigger: '.about-details-text', start: 'top 80%' } }
    );

    gsap.fromTo(
      '.about-details-image',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, stagger: 0.4, duration: 1.5, scrollTrigger: { trigger: '.about-details-image', start: 'top 80%' } }
    );

    // Skills Section Animation
    gsap.fromTo(
      '.skills-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: '.skills-title', start: 'top 80%' } }
    );

    gsap.fromTo(
      '.skills-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        duration: 1.5,
        scrollTrigger: { trigger: '.skills-item', start: 'top 80%', toggleActions: 'play none none none' },
      }
    );

    // Call-to-Action Section Animation
    gsap.fromTo(
      '.cta-button',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, scrollTrigger: { trigger: '.cta-button', start: 'top 80%' } }
    );

  }, []);

  return (
    <div>
      {/* Introduction Section */}
      <section id="about" className="py-12 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center md:text-left">
            <h2 className="about-title text-3xl font-bold tracking-tighter sm:text-5xl mb-4">About Me</h2>
            <p className="about-text text-lg text-blue-500">
              Hi, I'm Vikas Ranaout, a passionate full-stack developer with a focus on building seamless and responsive web applications. I have experience in front-end technologies like React, Vue.js, and back-end technologies like Node.js and Python. I’m dedicated to creating high-quality, scalable software solutions that deliver exceptional user experiences.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex items-center justify-center">
            <div className="w-50 h-50 rounded-lg shadow-lg overflow-hidden">
              <img className="profile-pic w-full h-full object-cover" src={profilePic} alt="Vikas Ranaout" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-12 md:py-24 bg-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="timeline-title text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Timeline</h2>
          <div className="timeline">
            <div className="timeline-item bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold">Early Education</h3>
              <p className="text-gray-400">I discovered my passion for tech and coding during my school years. I always loved problem-solving and exploring new technologies.</p>
            </div>
            <div className="timeline-item bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold">University Graduation</h3>
              <p className="text-gray-400">I graduated with a degree in Computer Science from XYZ University. During my college years, I built a foundation in web development and programming languages like HTML, CSS, and JavaScript.</p>
            </div>
            {/* Add more timeline items similarly */}
          </div>
        </div>
      </section>

      {/* About Details Section */}
      <section id="about-details" className="py-12 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <h2 className="about-details-title text-3xl font-bold tracking-tighter sm:text-5xl mb-4">More About Me</h2>
            <p className="about-details-text text-lg text-gray-400">
              I am a dedicated developer with a strong passion for technology. My values include continuous learning, collaboration, and delivering exceptional user experiences. I am always eager to explore new technologies and take on challenging projects.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full h-full overflow-hidden">
              <img className="about-details-image w-full h-full" src={aboutPic} alt="Vikas Ranaout Working" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-24 bg-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="skills-title text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          

            <div className="skills-item bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold">CSS</h3>
              <p className="text-gray-400">modern CSS, including Flexbox, Grid, and responsive design. Skilled in creating accessible, SEO-friendly, and mobile-first web layouts.</p>
            </div>
            <div className="skills-item bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold">JAVASCRIPT</h3>
              <p className="text-gray-400">Proficient in modern JavaScript (ES6+), including asynchronous programming, DOM manipulation, and event-driven development. Experienced in building dynamic and interactive web applications using frameworks like React and Node.js. Strong understanding of APIs, JSON, and browser compatibility.</p>
            </div>
            <div className="skills-item bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold">React.js</h3>
              <p className="text-gray-400">Experienced in building dynamic and scalable front-end applications with React. Proficient in component-based architecture, hooks, state management (Redux, Context API), and integrating RESTful APIs.</p>
            </div>
            <div className="skills-item bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold">TAILWIND</h3>
              <p className="text-gray-400">Well-versed in Tailwind CSS for efficient, utility-first styling. Capable of creating modern, responsive, and highly customizable UI designs with minimal CSS bloat.</p>
            </div>
            <div className="skills-item bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold">Node.js</h3>
              <p className="text-gray-400">Experienced in building scalable and high-performance backend applications using Node.js. Proficient in Express.js for RESTful API development, middleware handling, and authentication (JWT, OAuth).</p>
            </div>
            <div className="skills-item bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold">MongoDb</h3>
              <p className="text-gray-400">Skilled in working with MongoDB for NoSQL database management. Experienced in designing schemas, aggregations, indexing, and using Mongoose for efficient data modeling and interaction.</p>
            </div>
            {/* Add more skill items similarly */}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="cta" className="py-12 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Link to={'/contact'}>
            <Button className="cta-button px-8 py-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300 ease-in-out">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
