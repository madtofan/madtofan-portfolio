"use client"

import { Card } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

const experiences = [
  {
    company: "BAE Systems Digital Intelligence",
    position: "Full Stack Developer",
    period: "Feb 2023 - Present",
    location: "Kuala Lumpur, Malaysia",
    achievements: [
      "Full Stack Development: Leveraged expertise in Typescript, Javascript, and Java to develop and maintain both Front-End (Microfrontends) and Back-End (Microservices) components within a large-scale ecosystem.",
      "Microservices Architecture: Contributed to a Back-End environment comprising over 50 Java-based microservices, ensuring scalability and resilience.",
      "Microfrontends Architecture: Developed and maintained Front-End applications utilizing a Microfrontends architecture, enhancing modularity and maintainability.",
      "Agile & Scrum Methodology: Collaborated with 20+ global Scrum team members to deliver complex projects, adhering to Agile principles for iterative and incremental development.",
      "Stakeholder Communication: Presented monthly product demonstrations to over 20 global stakeholders, effectively communicating progress and gathering feedback.",
      "Knowledge Sharing & Initiative: Proactively researched and implemented new tools and software to enhance project capabilities and developer experience, conducting regular knowledge-sharing sessions with the development team.",
    ],
  },
  {
    company: "Configura Pacific Sdn Bhd",
    position: "Developer",
    period: "May 2021 - Feb 2023",
    location: "Kuala Lumpur, Malaysia",
    achievements: [
      "Front-End Development Focus: Served as the primary Front-End Developer within cross-functional Agile teams, developing a companion web application for the in-house CAD software.",
      "Full Stack Expertise: Engineered solutions across 6 diverse technology stacks and utilized 2 programming languages to build a real-time system with WebSocket synchronization for project file management, supporting a scalable user base.",
      "Requirements Gathering & Stakeholder Management: Engaged with 20+ global stakeholders within a Scrum environment to translate high-level designs into actionable development plans, accommodating over 100 user requirements.",
      "Code Quality Assurance: Participated in 10+ weekly code reviews, proactively identifying, commenting on, and rectifying code issues to maintain high code quality standards.",
      "Product Demonstrations & Communication: Represented the development team in 2 product demos to over 80 stakeholders across 3 regions, showcasing project progress and features.",
      "Proactive Learning & Technology Adoption: Voluntarily took on new assignments utilizing Rust, expanding technology skill set while ensuring timely delivery of core project tasks.",
    ],
  },
  {
    company: "BAE Systems Applied Intelligence",
    position: "Full Stack Developer",
    period: "Sept 2018 - May 2021",
    location: "Kuala Lumpur, Malaysia",
    achievements: [
      "Automation & Efficiency Improvement: Developed automated migration scripts, significantly reducing migration time by over 30 man-hours, enhancing project efficiency.",
      "Quality Assurance Initiative: Initiated and contributed to the automated testing project, empowering the QA team to write effective regression test scripts and improve software quality.",
      "Web Application Development & Deployment: Successfully delivered a secure web application for security document subscription, benefiting over 500 global users and improving document accessibility.",
      "Diverse Technology Stack Proficiency: Worked across 9 different technology stacks and utilized 5 programming languages to successfully deliver 5 projects within a 3-year timeframe, demonstrating adaptability and versatility.",
      "Automated Testing Implementation: Delivered over 400 automated test scripts within a single month, significantly enhancing test coverage and reducing manual testing efforts.",
      "End-User Collaboration: Engaged with 10+ global end-users to ensure software deliverables met expectations and addressed user needs effectively.",
      "Code Review & Best Practices: Participated in 10+ weekly code reviews, consistently identifying and resolving code defects to maintain high code quality and enforce coding standards.",
      "Back-End API Development: Developed robust and scalable API back-end services using Python Django, contributing to the application's core functionality.",
      "Front-End Development Expertise: Developed user-friendly and interactive Front-End applications using React with Javascript, enhancing user experience.",
      "Authentication & Reverse Proxy Management: Implemented and managed authentication and reverse proxy solutions utilizing NGINX and Lua, ensuring secure access and optimal application performance.",
    ],
  },
]

export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  return (
    <div ref={ref} className="space-y-8 relative">
      {/* Timeline line */}
      <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-teal-200 dark:bg-teal-900 hidden md:block"></div>

      {experiences.map((exp, index) => (
        <Card
          key={index}
          className={`p-6 relative transition-all duration-700 transform dark:bg-gray-900 dark:border-gray-800 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          {/* Timeline dot */}
          <div className="absolute left-[-30px] top-6 w-4 h-4 rounded-full bg-teal-500 hidden md:block"></div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">{exp.position}</h3>
              <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400">{exp.company}</h4>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
              <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            {exp.achievements.map((achievement, i) => (
              <li
                key={i}
                className={`text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                style={{ transitionDelay: `${index * 200 + i * 100}ms` }}
              >
                {achievement}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}

