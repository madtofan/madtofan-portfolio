"use client"

import { Card } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

const technologies = [
  {
    category: "Front End Development",
    skills: ["React", "TypeScript", "JavaScript", "NextJS", "TailwindCSS", "Material UI"],
  },
  {
    category: "Backend Development",
    skills: ["Java", "Rust", "Python", "Lua", "Django", "Axum", "Protobuff"],
  },
  {
    category: "Database",
    skills: ["D1", "Solr", "SQL", "R2", "S3", "Drizzle", "SQLx"],
  },
  {
    category: "Deployment",
    skills: ["Docker", "Docker Compose", "Serverless", "Micro Services", "NGINX"],
  },
  {
    category: "Project Management",
    skills: ["Agile", "Scrum", "JIRA", "Azure DevOps", "Git", "Figma"],
  },
  {
    category: "Protocols",
    skills: ["gRPC", "REST", "SOAP", "tRPC", "Server Sent Event (SSE)", "WebSocket"],
  },
  {
    category: "Languages",
    skills: ["English (IELTS 7.5)", "Malay (Native)", "Japanese (Conversational)"],
  },
]

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  return (
    <div ref={ref} className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech, techIndex) => (
        <Card
          key={tech.category}
          className={`p-6 transition-all duration-700 transform dark:bg-gray-900 dark:border-gray-800 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{
            transitionDelay: `${techIndex * 100}ms`,
          }}
        >
          <h3 className="text-lg font-semibold mb-4 relative inline-block">
            {tech.category}
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-300 dark:bg-teal-600 rounded"></span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill, skillIndex) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-teal-50 dark:bg-teal-900/40 px-2 py-1 text-xs font-medium text-teal-700 dark:text-teal-300 ring-1 ring-inset ring-teal-200 dark:ring-teal-800 transition-all hover:bg-teal-100 dark:hover:bg-teal-900/60 hover:scale-105"
                style={{
                  animationDelay: `${techIndex * 100 + skillIndex * 50}ms`,
                  transitionDelay: `${techIndex * 100 + skillIndex * 50}ms`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

