"use client"

import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  ExternalLink,
  Github,
  Search,
  FolderGit2,
  ArrowUpRight,
} from "lucide-react"
import { projectsData } from "@/data/projects"
import { ProjectItem } from "@/types/portfolio"
import ProjectDetailModal from "@/components/projects/project-detail-modal"
import ArchitectureViewer from "@/components/technical-showcase/architecture-viewer"
import ModelDatasetShowcase from "@/components/technical-showcase/model-dataset-showcase"
import { TechLogo } from "@/components/tech-logo"
import { useLanguage } from "@/contexts/language-context"

const categories = [
  "All",
  "AI / Machine Learning",
  "Computer Vision",
  "Backend Development",
  "Web Development",
  "IoT",
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const { dict } = useLanguage()

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory ||
        (selectedCategory === "AI / Machine Learning" &&
          (project.category === "AI / Machine Learning" || project.category === "Computer Vision"))

      const query = searchQuery.toLowerCase().trim()
      const matchSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.role.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query))

      return matchCategory && matchSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <section id="projects" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header (Judie Mosinabre style) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-border">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
              {dict.projects.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              {dict.projects.title}
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={dict.projects.searchPlaceholder}
              className="w-full pl-9 pr-3.5 py-1.5 rounded-xl border border-border bg-surface text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors font-sans"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                      : "bg-surface text-foreground/80 hover:text-foreground border-border hover:border-primary"
                  }`}
                >
                  {cat === "All" ? dict.projects.allFilter : cat}
                </button>
              )
            })}
          </div>

          <span className="text-xs font-mono text-muted-foreground">
            {dict.projects.showingCount} <strong className="text-foreground">{filteredProjects.length}</strong> {dict.projects.ofCount}
          </span>
        </div>

        {/* Project Cards (Judie Mosinabre Dominant Visual Preview Pattern) */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-border rounded-2xl bg-surface/40">
            <FolderGit2 className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-60" />
            <h4 className="text-base font-bold text-foreground">{dict.projects.emptyTitle}</h4>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
              {dict.projects.emptyDesc}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card shadow-sm hover:border-primary transition-all overflow-hidden"
              >
                <div>
                  {/* Dominant Project Preview Banner */}
                  <div className="relative h-56 sm:h-64 w-full bg-surface-secondary overflow-hidden border-b border-border">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                    {/* Category pill & Role */}
                    <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-card/90 backdrop-blur-md border border-border text-[11px] font-mono font-bold text-primary shadow-xs">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border text-xs font-mono text-foreground font-medium">
                        {dict.projects.roleLabel}: {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-sans mb-6">
                      {project.description}
                    </p>

                    {/* Judie-style "Technologies Used" Block with real SVG vector logos */}
                    <div className="space-y-2 mb-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                        {dict.projects.techUsed}:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-surface text-[11px] font-mono text-foreground hover:border-primary transition-colors"
                          >
                            <TechLogo name={tech} className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="px-6 sm:px-7 py-4 border-t border-border bg-surface/50 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline"
                  >
                    <span>{dict.projects.caseStudyBtn}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface text-foreground hover:border-primary hover:text-primary text-xs font-mono transition-colors"
                        title="Buka Demo / Tautan Hasil"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{dict.projects.demoBtn}</span>
                      </a>
                    )}
                    {project.codeUrl && project.codeUrl !== "#" && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-border bg-surface text-foreground hover:border-primary hover:text-primary transition-colors"
                        title="Lihat Repositori Kode"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Supporting Technical Viewers (Furkan Keskin reference) */}
        <div className="space-y-12">
          <ArchitectureViewer />
          <ModelDatasetShowcase />
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
