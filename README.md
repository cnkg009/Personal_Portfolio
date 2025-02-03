# Personal_Portfolio
Vikas Ranaout – Frontend Developer & Tech Enthusiast
Welcome to my portfolio! I’m Vikas Ranaout, a passionate frontend  and backend developer with a keen interest in building responsive and dynamic web applications. With a strong foundation in HTML, CSS, and JavaScript,React.js and Node.js I specialize in creating user-friendly interfaces that enhance the digital experience.

I have worked on various projects, including interactive web applications, real-time chat apps, and animation-based UI designs. My expertise extends to modern frontend technologies like React.js and Vite, ensuring high-performance and efficient web solutions.

Beyond coding, I continuously explore new technologies to improve my skill set. My portfolio showcases my journey, highlighting projects that demonstrate my problem-solving abilities and attention to detail.

1>App.jsx
Component Structure

Header: Likely contains navigation links.
FooterSection: Footer content.
ScrollWrapper: A custom hook/component for handling scrolling behavior.
Pages (HomePage, AboutPage, etc.): Represent different sections of the portfolio.

2>Components

The Header component is a responsive navigation bar built with React, Tailwind CSS, and Lucide icons. It includes a mobile-friendly menu toggle and links to different sections of a portfolio website.

Key Features:
Fixed Navigation Bar

The header stays at the top (fixed top-0 left-0 right-0) while users scroll.
Styled with a black background (bg-black) and white text (text-white) for a sleek, modern look.
Uses a subtle shadow (shadow-md) to create depth.
Navigation Links with Icons

Uses Lucide icons (e.g., Home, Users, Play) for a visually appealing UI.
Links navigate to Home, About, Projects, and Contact sections.
Includes hover effects (hover:underline underline-offset-4) for a smooth user experience.
--------------------------------------------------------------------------------------------------------------------------------------------------
AboutSection Component - Description
The AboutSection component is a React functional component that introduces the portfolio owner,
Introduction & Skills Summary

A brief introduction to Vikas Ranaout’s background in React, Vue.js, Node.js, and Python.
Emphasizes user experience and scalable software solutions.
"Read More" Button & Navigation

Uses React Router’s <Link> to navigate to the /about page.
Custom Button component for consistent styling.
----------------------------------------------------------------------------------------------------------------------------------------------

Button Component - Description
The Button component is a reusable, customizable button designed with Tailwind CSS. It provides a consistent styling for buttons used throughout the portfolio.

Key Features:
Customizable Props:
className: Allows additional custom styles to be passed in.
children: Defines the button label or content.
-------------------------------------------------------------------------------------------------------------------------------------------------
>>footer
Copyright Notice

Displays "© {current year} Vikas Ranaout. All rights reserved." dynamically using new Date().getFullYear().
Ensures the copyright year updates automatically.
Navigation Links

Includes quick links to:
Terms of Service
Privacy Policy
Contact Us
About Us
Uses hover effects (hover:underline underline-offset-4) for better user experience.
---------------------------------------------------------------------------------------------------------------------------------------------------

The ProjectSection component is a React functional component that showcases a list of projects with animations and interactive elements. It highlights three main projects with images, descriptions, and a call-to-action button.

Project Cards with Hover Effects

Each project card (p-6 bg-gray-900) has a modern dark-themed UI.
Hover effect:
hover:scale-105 → Slight zoom effect.
hover:shadow-xl → Elevates on hover for better visual feedback.
-----------------------------------------------------------------------------------------------------------------------------------------------------
hero section

The HeroSection component serves as the introductory section of the portfolio website, typically displayed at the top of the page. It combines GSAP animations, a background video, and a profile image to create a visually striking and dynamic first impression.

Background Video

Video as a full-screen background (absolute top-0 left-0 w-full h-full object-cover), creating an immersive experience.
Video plays automatically, is muted, and loops seamlessly.
The fallback message ensures a functional experience for users with older browsers.

----------------------------------------------------------------------------------------------------------------------------------------------------
last one is  Hook>>
The ScrollWrapper component uses Lenis (a smooth scroll library) to enhance the user experience by creating a smooth, natural scrolling effect for the entire page. The smooth scrolling is especially noticeable when interacting with mouse wheels or touchpads, providing an alternative to the default browser scroll behavior.
Wrapper for Children

The ScrollWrapper component wraps around any children elements that you want to have smooth scrolling. This means the scroll effect will be applied to the content inside this wrapper.
useRef and useEffect Hooks

useRef is used to get a reference to the wrapper element, but in this case, it's not used to directly control the scroll behavior. Instead, Lenis handles it programmatically.
useEffect initializes the Lenis instance and starts the smooth scroll behavior when the component mounts. It also cleans up (lenis.destroy()) when the component unmounts to prevent memory leaks.

-----------------------------------------------------------------------------copyright  by   vikas Ranaut -------------------------------------------------------------------Thanks

