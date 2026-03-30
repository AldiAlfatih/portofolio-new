"use client"

import { Progress } from "@/components/ui/progress"
import { AnimatePresence, motion } from "framer-motion"
import {
    BookOpen,
    Brain, Code2, Database,
    Layers, Mic,
    Terminal, Cpu,
    Users,
    Video,
    Wrench
} from "lucide-react"
import { useState } from "react"

const tabs = [
    { id: "tech", label: "Hardskills" },
    { id: "soft", label: "Softskills" },
    { id: "lang", label: "Languages" },
]

const techSkills = [
    {
        category: "Bahasa Pemrograman",
        icon: Code2,
        items: ["Python", "Java", "PHP", "JavaScript"]
    },
    {
        category: "AI/ML & Data",
        icon: Brain,
        items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Data Mining", "EDA", "Data Visualization", "Model Deployment", "TensorFlow", "Keras", "scikit-learn", "MediaPipe"]
    },
    {
        category: "Web Development & Backend",
        icon: Layers,
        items: ["PHP Native", "Laravel", "CodeIgniter 4", "Vue.js", "React", "Inertia.js", "RESTful API", "Arsitektur MVC"]
    },
    {
        category: "Database",
        icon: Database,
        items: ["MySQL", "PostgreSQL", "SQL"]
    },
    {
        category: "Tools & Platforms",
        icon: Wrench,
        items: ["Git", "GitHub", "Docker", "Jupyter Notebook", "Google Colab", "Android Studio", "VS Code", "Figma", "Microsoft Office", "Roboflow", "CVAT", "Arduino IDE"]
    },
    {
        category: "IoT & Embedded",
        icon: Cpu,
        items: ["Internet of Things", "Embedded System", "Wireless Sensor Network"]
    }
]

const softSkills = [
    {
        title: "Leadership",
        description: "Ketua Habibie Coding Club, Koordinator Divisi Olahraga BEM ITH, memimpin tim teknis lintas disiplin.",
        icon: Users
    },
    {
        title: "Public Speaking",
        description: "Pengalaman presentasi proyek di kompetisi internasional dan nasional.",
        icon: Mic
    },
    {
        title: "Teamwork & Kolaborasi",
        description: "Terbiasa bekerja dalam tim lintas disiplin, baik di proyek riset maupun proyek pemerintah.",
        icon: Users
    },
    {
        title: "Problem Solving",
        description: "Menganalisis masalah teknis kompleks dan merancang solusi yang efisien dan skalabel.",
        icon: Brain
    },
    {
        title: "Project Management",
        description: "Mengelola proyek dari perencanaan hingga deployment dengan timeline dan milestone yang jelas.",
        icon: BookOpen
    },
    {
        title: "Adaptif & Inovatif",
        description: "Cepat beradaptasi dengan teknologi baru dan terus berinovasi dalam setiap proyek.",
        icon: Video
    },
]

const languages = [
    { language: "Bahasa Indonesia", level: 100, label: "Fasih (Native)" },
    { language: "English", level: 55, label: "Elementary – Intermediate" },
]

export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState("tech")

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-terminal-text">
                        <span className="text-python-light font-mono mr-2"></span>
                        Keahlian & Keterampilan
                        <span className="text-python-light font-mono ml-1"></span>
                    </h2>
                    <p className="text-terminal-text/50 max-w-2xl mx-auto">
                        Keterampilan teknis, soft skills, dan kemampuan bahasa yang mendukung pengembangan solusi AI dan backend development.
                    </p>
                </motion.div>

                {/* Custom Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex space-x-2 bg-[#0a0a0a] p-1.5 rounded-full border border-terminal-text/15">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeTab === tab.id ? "text-terminal-text" : "text-terminal-text/40 hover:text-terminal-text/70"
                                    }`}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-python-blue/20 border border-python-blue/30 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">

                        {/* Tech Skills Tab */}
                        {activeTab === "tech" && (
                            <motion.div
                                key="tech"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {techSkills.map((cat, idx) => (
                                    <div key={idx} className="bg-[#0a0a0a] border border-terminal-text/15 rounded-2xl p-6 hover:border-python-blue transition-colors duration-200">
                                        <div className="flex items-center gap-3 mb-4">
                                            <cat.icon size={24} className="text-python-light" />
                                            <h3 className="text-xl font-bold text-terminal-text">{cat.category}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.items.map((item) => (
                                                <span key={item} className="px-3 py-1 bg-terminal-bg rounded-full text-sm text-terminal-text/70 border border-terminal-text/15 hover:border-python-blue hover:text-python-light transition-colors duration-200 cursor-default font-mono">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {/* Soft Skills Tab */}
                        {activeTab === "soft" && (
                            <motion.div
                                key="soft"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {softSkills.map((skill, idx) => (
                                    <div key={idx} className="bg-[#0a0a0a] border border-terminal-text/15 rounded-2xl p-6 flex gap-4 hover:border-python-blue transition-colors duration-200 group">
                                        <div className="w-12 h-12 bg-python-blue/15 border border-python-blue/30 rounded-full flex items-center justify-center shrink-0 group-hover:bg-python-blue/25 transition-colors duration-200">
                                            <skill.icon className="text-python-light" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-terminal-text mb-2">{skill.title}</h3>
                                            <p className="text-terminal-text/50 text-sm leading-relaxed">{skill.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {/* Languages Tab */}
                        {activeTab === "lang" && (
                            <motion.div
                                key="lang"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-2xl mx-auto bg-[#0a0a0a] border border-terminal-text/15 rounded-2xl p-8 space-y-8"
                            >
                                {languages.map((lang, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-bold text-terminal-text">{lang.language}</span>
                                            <span className="text-sm text-terminal-text/50">{lang.label}</span>
                                        </div>
                                        <Progress value={lang.level} className="h-2" />
                                    </div>
                                ))}
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}
