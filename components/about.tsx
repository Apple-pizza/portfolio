export default function About() {
  return (
    <section id="about" className="py-16 border-t border-border">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            I'm a 2nd year Bachelor of Technology student in Computer Science and Engineering at NMAM Institute of
            Technology. My academic journey has been driven by a keen interest in understanding how machines can learn
            and solve complex problems efficiently.
          </p>

          <p>
            With a strong foundation in programming and computer science fundamentals, I'm particularly focused on
            deepening my knowledge in <span className="text-primary font-semibold">Artificial Intelligence</span>,{" "}
            <span className="text-primary font-semibold">Machine Learning</span>, and{" "}
            <span className="text-primary font-semibold">Data Structures & Algorithms</span>. I believe that mastering
            these areas will enable me to build intelligent systems that can tackle real-world challenges.
          </p>

          <p>
            When I'm not coding or studying, I enjoy exploring new technologies, contributing to open-source projects,
            and solving algorithmic problems on competitive programming platforms. I'm always excited to learn,
            collaborate, and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  )
}
