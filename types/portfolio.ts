export interface ProfileData {
  name: string
  degree: string
  fullNameWithDegree: string
  title: string
  tagline: string
  bio: string
  education: {
    degree: string
    major: string
    institution: string
    gpa: string
    period: string
  }
  contact: {
    email: string
    github: string
    linkedin: string
    location: string
  }
  cvUrl: string
  cvLocalUrl: string
  stats: {
    label: string
    value: string
    sublabel?: string
  }[]
  availability: "Open for Collaboration" | "Open to Work" | "Available for Freelance"
}

export interface SkillItem {
  name: string
  level?: string
  iconName?: string
  badge?: string
}

export interface SkillCategory {
  category: string
  description?: string
  skills: SkillItem[]
}

export interface SoftSkillItem {
  title: string
  description: string
}

export interface LanguageSkillItem {
  language: string
  proficiency: string
  description: string
}

export interface ExperienceItem {
  id: string
  title: string
  company: string
  location: string
  period: string
  type: string
  description: string
  achievements: string[]
  technologies: string[]
  category: "professional" | "academic_project"
}

export interface ProjectArchitectureStep {
  title: string
  description: string
  tech?: string
}

export interface ProjectItem {
  id: string
  title: string
  role: string
  category: "AI / Machine Learning" | "Computer Vision" | "Backend Development" | "Web Development" | "IoT"
  description: string
  longDescription?: string
  problemStatement?: string
  technicalApproach?: string
  results?: string
  architecture?: ProjectArchitectureStep[]
  modelDatasetDetails?: {
    modelType?: string
    inputShape?: string
    datasetDescription?: string
    sampleSize?: string
    deployment?: string
  }
  technologies: string[]
  image: string
  demoUrl?: string
  codeUrl?: string
  featured?: boolean
}

export interface AchievementItem {
  title: string
  description: string
  year: string
  type: string
  impact: string
}

export interface AchievementCategory {
  category: string
  items: AchievementItem[]
}

export interface CertificationItem {
  title: string
  issuer: string
  date: string
  credentialId: string
  link: string
  image: string
  skills: string[]
  verified: boolean
}

export interface OrganizationItem {
  name: string
  role: string
  period: string
  type: string
  description: string
  activities: string[]
  achievements: string[]
  image?: string
}

export interface TestimonialItem {
  name: string
  position: string
  company: string
  image?: string
  text: string
  collaborationContext: string
}
