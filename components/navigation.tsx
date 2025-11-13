"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-primary hover:text-accent transition-colors">
          Ashwin Bhat K
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Projects
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Projects
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
