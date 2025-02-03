import React, { useEffect } from 'react'
import video from '../assets/video.mp4'
import profilePic from '../assets/Profile_Pic.jpg' 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
      trigger: '.profile-section',
      markers: false, // Set to true to see scroll trigger markers during development
      },
    });

    tl.from('.profile-image', {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from('.profile-heading', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.5')
    .from('.profile-description', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.5');
  }, []);
  return (
    <section id="home" className="py-24 md:py-0 md:h-screen  md:flex md:justify-center md:items-center relative overflow-hidden">
    
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  
    
    <div className="relative z-10 px-4 md:px-6 profile-section">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="profile-image w-30 h-30 rounded-full flex items-center justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h1 className="profile-heading text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Vikas Ranaout
        </h1>
        <p className="profile-description mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Passionate developer with a focus on building scalable web applications.
        </p>
      </div>
    </div>
  </section>
  
  )
}

export default HeroSection