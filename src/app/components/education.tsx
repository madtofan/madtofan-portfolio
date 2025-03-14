"use client"

import { Card } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"
import { Award, BookOpen, GraduationCap, Languages } from "lucide-react"
import { useRef } from "react"

const educations = [
  {
    institution: "Universiti Kuala Lumpur Malaysia France Institute",
    degree: "Bachelor Degree in Industrial Automation & Robotics",
    period: "Sept 2013 - Jan 2017",
    gpa: "3.71/4.00",
    achievements: [
      "Council Award, Platinum Award and Golden Award recipient",
      "Founder and President of UniKL Robotique Society (Initiated, Organized and actively participated in multiple international robotic competition)",
      "Speaker for Enactus Malaysia National Cup 2015",
      "Vice President of administration for Enactus UniKL MFI 2015 - 2016",
      "Lead the University team in Malaysia - India Robotic Exchange Program at Chennai, India",
    ],
  },
  {
    institution: "Korea University of Technology and Education",
    degree: "Exchange Student, School of Computer Science",
    period: "February 2016 - July 2016",
    gpa: "4.5/4.5",
    achievements: [],
  },
]

const certifications = [
  {
    name: "Japanese-Language Proficiency Test (JLPT) N5",
    issuer: "The Japan Foundation and Japan Educational Exchanges and Services",
  },
]

const volunteer = [
  {
    organization: "Universitas Airlangga",
    role: "Volunteer",
    location: "Surabaya, Indonesia",
    period: "January 2016",
    description:
      "Volunteer for 1 month in charity work under KKN-BBM Community Empowerment Program. Responsible in educating 60+ children from rural area on the topic of hygiene, self-care and english in the program.",
  },
]

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  return (
    <div ref={ref} className="space-y-8">
      <div>
        <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
          <GraduationCap className="h-5 w-5" />
          Education
        </h3>
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <Card
              key={index}
              className={`p-6 transition-all duration-700 transform dark:bg-gray-900 dark:border-gray-800 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold">{edu.institution}</h4>
                  <p className="text-teal-600 dark:text-teal-400">{edu.degree}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
                  <p className="text-gray-500 dark:text-gray-400">GPA: {edu.gpa}</p>
                </div>
              </div>
              {edu.achievements.length > 0 && (
                <div>
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Achievements & Activities
                  </h5>
                  <ul className="list-disc pl-5 space-y-1">
                    {edu.achievements.map((achievement, i) => (
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
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5" />
          Certifications
        </h3>
        <Card
          className={`p-6 transition-all duration-700 transform dark:bg-gray-900 dark:border-gray-800 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{ transitionDelay: `600ms` }}
        >
          <ul className="space-y-2">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className={`flex flex-col transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <span className="font-medium">{cert.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div>
        <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
          <Languages className="h-5 w-5" />
          Volunteer Experience
        </h3>
        <Card
          className={`p-6 transition-all duration-700 transform dark:bg-gray-900 dark:border-gray-800 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{ transitionDelay: `800ms` }}
        >
          {volunteer.map((vol, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              style={{ transitionDelay: `${900 + index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h4 className="text-lg font-semibold">{vol.organization}</h4>
                  <p className="text-teal-600 dark:text-teal-400">{vol.role}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-500 dark:text-gray-400">{vol.period}</p>
                  <p className="text-gray-500 dark:text-gray-400">{vol.location}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{vol.description}</p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}

