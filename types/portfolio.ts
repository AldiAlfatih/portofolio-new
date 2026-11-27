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
    awards?: string
    cohort?: string
    honors?: string
    nim?: string
    birthPlaceDate?: string
    studyDuration?: string
    totalScore?: string
  }
  contact: {
    email: string
    phone?: string
    github: string
    linkedin: string
    instagram?: string
    location: string
  }
  cvUrl: string
  cvLocalUrl: string
  portfolioDriveUrl?: string
  ogitechUrl?: string
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
  titleEn?: string
  description: string
  descriptionEn?: string
}

export interface LanguageSkillItem {
  language: string
  proficiency: string
  description: string
}

export interface ExperienceItem {
  id: string
  title: string
  titleEn?: string
  company: string
  location: string
  locationEn?: string
  period: string
  periodEn?: string
  startDate?: string
  type: string
  typeEn?: string
  description: string
  descriptionEn?: string
  achievements: string[]
  achievementsEn?: string[]
  technologies: string[]
  category: "professional" | "academic_project" | "leadership"
  websiteUrl?: string
}

export interface ProjectArchitectureStep {
  title: string
  description: string
  tech?: string
}

export interface ProjectModelEvaluationRow {
  model: string
  architecture: string
  features: string
  valAccuracy: string
  testAccuracy: string
  computeLoad: string
}

export interface ProjectEvidenceImage {
  title: string
  url: string
  caption?: string
}

export interface ProjectItem {
  id: string
  title: string
  titleEn?: string
  role: string
  roleEn?: string
  category:
    | "AI / Machine Learning"
    | "Computer Vision"
    | "Data Analytics & BI"
    | "Backend Development"
    | "Mobile Development"
    | "Web Development"
    | "IoT"
  description: string
  descriptionEn?: string
  longDescription?: string
  longDescriptionEn?: string
  problemStatement?: string
  problemStatementEn?: string
  technicalApproach?: string
  technicalApproachEn?: string
  results?: string
  resultsEn?: string
  workflowSteps?: string[]
  evaluationTable?: ProjectModelEvaluationRow[]
  evidenceImages?: ProjectEvidenceImage[]
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
  demoLabel?: string
  demoLabelEn?: string
  codeUrl?: string
  featured?: boolean
}

export interface AchievementItem {
  id?: string
  title: string
  titleEn?: string
  category: "international" | "national" | "academic" | "hki"
  rank?: string
  rankEn?: string
  organizer?: string
  organizerEn?: string
  description: string
  descriptionEn?: string
  year: string
  type: string
  typeEn?: string
  impact: string
  impactEn?: string
  proposalTitle?: string
  proposalTitleEn?: string
  team?: string
  teamId?: string
  solution?: string
  theme?: string
  themeEn?: string
  institution?: string
  gpa?: string
  cohort?: string
  cohortEn?: string
  certificateUrl?: string
  nim?: string
  totalScore?: string
  studyDuration?: string
  birthPlaceDate?: string
  hkiNumber?: string
  applicationNumber?: string
  protectionPeriod?: string
  firstAnnounced?: string
  creators?: string[]
  image?: string
}

export interface AchievementCategory {
  category: string
  categoryEn?: string
  items: AchievementItem[]
}

export interface CertificationItem {
  title: string
  titleEn?: string
  issuer: string
  issuerEn?: string
  date: string
  credentialId: string
  link?: string
  image: string
  pdfUrl?: string
  skills: string[]
  verified: boolean
  category?: "ai_ml" | "cloud_backend" | "software_web" | "data_gis"
}

export interface OrganizationItem {
  name: string
  role: string
  roleEn?: string
  period: string
  periodEn?: string
  type: string
  typeEn?: string
  description: string
  descriptionEn?: string
  activities: string[]
  activitiesEn?: string[]
  achievements: string[]
  achievementsEn?: string[]
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
