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
import InteractiveProjectCard from "@/components/motion/interactive-project-card"

const categories = [
  "All",
  "AI / Machine Learning",
  "Computer Vision",
  "Backend Development",
  "Mobile Development",
  "Web Development",
  "IoT",
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const { dict, language } = useLanguage()
  const isEn = language === "en"

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory ||
        (selectedCategory === "AI / Machine Learning" &&
          (project.category === "AI / Machine Learning" || project.category === "Computer Vision")) ||
        (selectedCategory === "Mobile Development" &&
          (project.category.includes("Mobile") ||
            project.technologies.some((t) => t.toLowerCase().includes("flutter") || t.toLowerCase().includes("android"))))

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
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors border ${
                    isActive ? "border-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-full bg-primary -z-10 shadow-xs"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive
                        ? "text-primary-foreground font-semibold"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {cat === "All" ? dict.projects.allFilter : cat}
                  </span>
                </button>
              )
            })}
          </div>

          <span className="text-xs font-mono text-muted-foreground">
            {dict.projects.showingCount} <strong className="text-foreground">{filteredProjects.length}</strong> {dict.projects.ofCount}
          </span>
        </div>

        {/* Project Cards (Interactive 3D Lift & Dominant Visual Preview Pattern) */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-border rounded-2xl bg-surface/40">
            <FolderGit2 className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-60" />
            <h4 className="text-base font-bold text-foreground">{dict.projects.emptyTitle}</h4>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
              {dict.projects.emptyDesc}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-stretch">
            {filteredProjects.map((project, idx) => (
              <InteractiveProjectCard
                key={project.id}
                project={project}
                isEn={isEn}
                dict={dict}
                onSelect={(p) => setSelectedProject(p)}
                index={idx}
              />
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
