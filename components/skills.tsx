"use client"

import { motion } from "framer-motion"
import { Brain, Database, Code, BarChart3, Eye, MessageSquare, Cpu, Zap, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Machine Learning",
    icon: Brain,
    color: "from-cyan-500 to-blue-600",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM"],
  },
  {
    title: "Deep Learning",
    icon: Cpu,
    color: "from-purple-500 to-pink-600",
    skills: ["Neural Networks", "CNN", "RNN/LSTM", "Transformers", "GANs", "Autoencoders"],
  },
  {
    title: "Computer Vision",
    icon: Eye,
    color: "from-green-500 to-teal-600",
    skills: ["OpenCV", "YOLO", "ResNet", "Object Detection", "Image Segmentation", "OCR"],
  },
  {
    title: "NLP",
    icon: MessageSquare,
    color: "from-orange-500 to-red-600",
    skills: ["BERT", "GPT", "spaCy", "NLTK", "Sentiment Analysis", "Text Classification"],
  },
  {
    title: "Data Science",
    icon: BarChart3,
    color: "from-indigo-500 to-purple-600",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter"],
  },
  {
    title: "MLOps",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    skills: ["Docker", "Kubernetes", "MLflow", "Kubeflow", "AWS SageMaker", "Azure ML"],
  },
  {
    title: "Web Development",
    icon: Code,
    color: "from-pink-500 to-rose-600",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "PHP", "Laravel", "Flask", "Django"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-teal-500 to-cyan-600",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    title: "Programming",
    icon: Code,
    color: "from-pink-500 to-rose-600",
    skills: ["Python", "R", "Java", "JavaScript", "C++", "PHP", "Kotlin"],
  },
  {
    title: "Mobile Development",
    icon: Code,
    color: "from-teal-500 to-cyan-600",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Java"],
  },
  {
    title: "Internet of Things",
    icon: Code,
    color: "from-teal-500 to-cyan-600",
    skills: ["Arduino", "ESP32", "ESP8266", "NodeMCU", "MQTT"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Keahlian AI & Technology Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 h-full group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    className={`p-3 bg-gradient-to-r ${category.color} rounded-xl shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: skillIndex * 0.2,
                        }}
                      />
                      <span className="text-gray-300 text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
