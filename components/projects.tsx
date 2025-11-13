export default function Projects() {
  /*
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A clean and minimal portfolio website built with Next.js and Tailwind CSS to showcase projects and skills.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/Apple-pizza",
    },
    {
      title: "Data Structures Implementation",
      description:
        "Implemented various data structures including linked lists, trees, graphs, and their operations in C++.",
      technologies: ["C++", "Algorithms", "Data Structures"],
      github: "https://github.com/Apple-pizza",
    },
    {
      title: "Competitive Programming",
      description: "Solved 100+ algorithmic problems focusing on optimization, dynamic programming, and graph theory.",
      technologies: ["Python", "C++", "Problem Solving"],
      github: "https://github.com/Apple-pizza",
    },
  ]
  */

  return (
    <section id="projects" className="py-16 border-t border-border">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Projects & Work</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="p-8 rounded-lg bg-card border border-border text-center">
          <p className="text-lg text-muted-foreground">Coming soon...</p>
        </div>

        {/* Uncomment the code below when ready to add projects */}
        {/*
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium pt-2"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  )
}
