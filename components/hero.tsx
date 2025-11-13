export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Ashwin Bhat K</h1>
          <p className="text-lg text-muted-foreground">2nd Year BTech CSE Student • NMAM Institute of Technology</p>
        </div>

        <p className="text-lg text-foreground leading-relaxed max-w-2xl">
          Passionate about{" "}
          <span className="text-primary font-semibold">Artificial Intelligence & Machine Learning</span> and{" "}
          <span className="text-primary font-semibold">Data Structures</span>. I enjoy solving complex problems through
          code and exploring the intersection of theory and practical applications.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/Apple-pizza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ashwinbhatk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.668-2.237-.909 0-1.451.613-1.688 1.204-.087.212-.109.507-.109.804v5.798h-3.554s.047-9.411 0-10.39h3.554v1.471c.459-.709 1.281-1.719 3.116-1.719 2.275 0 3.983 1.487 3.983 4.685v5.953zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.712 0-.951.77-1.71 1.954-1.71 1.184 0 1.915.759 1.937 1.71 0 .951-.753 1.712-1.976 1.712zm1.682 11.597H3.655V9.062h3.364v11.39zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
