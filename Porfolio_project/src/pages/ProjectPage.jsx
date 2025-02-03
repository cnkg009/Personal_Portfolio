import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Website Clone",
    description: " HTML, CSS, and Tailwind CSS responsive user interfaces with JavaScript and React.  ",
    imageUrl: "/public/WEBCLONE.png",
    githubUrl: "https://github.com/cnkg009/WEBSITE_clone"
  },
  {
    id: 2,
    title: "Real Time Chat App",
    description: " chat application using React for the front end and Mongodb/WebSockets for real-time  ",
    imageUrl: "/public/Realtimechat.png",
    githubUrl: "https://github.com/cnkg009/Chat_Application"
  },
  {
    id: 3,
    title: "Ecommerce Website",
    description: "A task management app using React and Shadcn UI.",
    imageUrl: "/public/Ecommerce.jpg",
    githubUrl: "https://github.com/cnkg009/Domination_1"
  }
]

export default function ProjectPage() {
  return (
    <section className="mx-auto px-4 py-8 bg-gray-950">
    <h2 className="text-3xl text-center text-blue-700 font-bold mb-6">Latest Projects</h2>
    <div className="grid grid-cols-1 gap-6 px-20">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="flex justify-around md:flex-row flex-wrap md:flex-nowrap py-10">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="flex-end bg-amber-400 w-[80%] md:w-[30%]">
              <img style={{width:"100%"}} src={project.imageUrl} alt={project.title} className="w-full h-48 md:h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  )
}