import React from 'react';

const projects = [
  {
    title: 'Beer Website',
    image: '/public/Screenshot 2025-07-08 085845.png',
    description:
      'A brewery-themed website designed to showcase a product catalog and ordering system. Built with a focus on clean UI and responsive experience.',
    demoLink: 'https://project-assignment-kenoir-store.vercel.app',
    codeLink: 'https://github.com/Kanhary/ProjectAssignment',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Old Portfolio',
    image: '/public/Screenshot 2025-07-08 093232.png',
    description:
      'My old portfolio website',
    demoLink: 'https://react-test-eight-peach.vercel.app/',
    codeLink: 'https://github.com/Kanhary/ReactTest',
    techStack: ['React', 'CSS', 'JavaScript'],
  },
  {
    title: 'Assignment Collection',
    image: '/public/Screenshot 2025-07-08 094122.png',
    description:
      'Website for collect assignment of student',
    demoLink: 'https://react-test-eight-peach.vercel.app/',
    codeLink: 'https://github.com/Kanhary/S2Assignment',
    techStack: ['PHP','HTML', 'CSS', 'JavaScript'],
  },
   {
    title: 'Static Disney Website',
    image: '/public/Screenshot 2025-07-08 094529.png',
    description:
      `This is my rewrite for static disney's website`,
    demoLink: 'https://disney-project-six.vercel.app/',
    codeLink: 'https://github.com/Kanhary/DisneyProject',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
];

const Project = () => {
  return (
    <section className="px-6 md:px-16 pt-10 font-khmer ">
      <h2 className="text-center font-bold text-3xl text-gray-800">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative h-[220px] w-full overflow-hidden rounded-xl mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 flex gap-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm px-4 py-1.5 bg-blue-600 rounded-full hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm px-4 py-1.5 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  Code
                </a>
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-bold text-blue-900">{project.title}</h3>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-white text-sm px-3 py-1 bg-slate-600 rounded-full hover:bg-slate-500 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
