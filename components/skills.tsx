export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["C", "C++", "Python", "Java"],
    },
    {
      category: "Focus Areas",
      skills: ["Machine Learning", "AI", "Data Structures", "Algorithms"],
    },
    {
      category: "Technologies",
      skills: ["Git", "Linux", "Problem Solving"],
    },
  ]

  return (
    <section id="skills" className="py-16 border-t border-border">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Skills</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted text-foreground rounded-full text-sm border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
