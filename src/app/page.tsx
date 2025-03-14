"use client"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import ContactForm from "./components/contact-form"
import ExperienceTimeline from "./components/experience-timeline"
import HeroBackground from "./components/hero-background"
import ProjectCard from "./components/project-card"
import ScrollProgress from "./components/scroll-progress"
import TechStack from "./components/tech-stack"
import Education from "./components/education"
import TypewriterEffect from "./components/typewriter-effect"
import { useInView } from "@/hooks/use-in-view"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  // Refs for scroll animations
  const experienceRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Check if sections are in view
  const experienceInView = useInView(experienceRef, { threshold: 0.1 })
  const projectsInView = useInView(projectsRef, { threshold: 0.1 })
  const skillsInView = useInView(skillsRef, { threshold: 0.1 })
  const educationInView = useInView(educationRef, { threshold: 0.1 })
  const contactInView = useInView(contactRef, { threshold: 0.1 })

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background relative backdrop-opacity-0">
      <ScrollProgress />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center mx-auto">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Madtofan.win</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-gray-600 dark:hover:text-gray-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#experience"
                className="transition-colors hover:text-gray-600 dark:hover:text-gray-300 relative group"
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-gray-600 dark:hover:text-gray-300 relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#skills"
                className="transition-colors hover:text-gray-600 dark:hover:text-gray-300 relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#education"
                className="transition-colors hover:text-gray-600 dark:hover:text-gray-300 relative group"
              >
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-gray-600 dark:hover:text-gray-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" className="relative overflow-hidden group" asChild>
              <a href="/Ahmad - fullstack developer.pdf" download="Ahmad - fullstack developer">
                <span className="relative z-10 transition-colors group-hover:text-white dark:group-hover:text-slate-900">
                  Resume
                </span>
                <span className="absolute inset-0 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                <span className="absolute inset-0 bg-teal-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left delay-75"></span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6 backdrop-opacity-0 mx-auto">
        <section id="about" className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <HeroBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Ahmad bin Zainul Abidin
                </h1>
                <h2 className="text-2xl font-semibold tracking-tighter sm:text-3xl md:text-4xl h-12">
                  <TypewriterEffect texts={["Fullstack Developer", "Problem Solver", "Tech Enthusiast"]} />
                </h2>
                <div className="flex flex-wrap justify-center gap-4 py-4">
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Kuala Lumpur, Malaysia</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>+6012 478 6884</span>
                  </div>
                </div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Adaptable and forward-thinking Fullstack Developer with 6+ years of experience continually embracing
                  new technologies to build robust and user-friendly web applications. Proven ability to quickly learn
                  and implement innovative solutions across diverse projects and technology stacks.
                </p>
              </div>
              <div className="space-x-4 grid grid-cols-3">
                <Link href="https://github.com/madtofan" target="_blank">
                  <Button variant="outline" size="icon" className="animate-bounce-slow">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/ahmad-zainul-abidin-897bb810a/" target="_blank">
                  <Button variant="outline" size="icon" className="animate-bounce-slow animation-delay-200">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:ahmadclab@gmail.com">
                  <Button variant="outline" size="icon" className="animate-bounce-slow animation-delay-600">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          ref={experienceRef}
          className={`py-12 md:py-24 lg:py-32 transition-all duration-1000 ${mounted && experienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center relative">
              <span className="bg-gradient-to-r from-teal-500 to-teal-300 bg-clip-text text-transparent">
                Experience
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-500 rounded"></div>
            </h2>
            <ExperienceTimeline />
          </div>
        </section>

        <section
          id="projects"
          ref={projectsRef}
          className={`py-12 md:py-24 lg:py-32 transition-all duration-1000 ${mounted && projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center relative">
              <span className="bg-gradient-to-r from-teal-500 to-teal-300 bg-clip-text text-transparent">Projects</span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-500 rounded"></div>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard
                title="Ejen2U Mobile App"
                description="Developed a mobile app that simplifies the process for agent management, order stocks, calculate earnings and generate reports using React Native and MySQL. Led a team of 3 by engaging with 5 stakeholders to discuss, design and develop user requirements."
                image="/ejen2u.webp?height=400&width=600"
                tags={["React Native", "MySQL", "Project Management"]}
                status="Delivered"
              />
              <ProjectCard
                title="Solar Dryer Automation"
                description="Designed, fabricated, procured and programmed embedded micro-controllers to monitor and automatically maintain the temperature and humidity inside the Solar Dryer for Agriculture industry process. Used Google Sheets to create a dashboard for real-time monitoring and logging."
                image="/solar-dryer.webp?height=400&width=600"
                tags={["IoT", "Embedded Systems", "Google Sheets API"]}
                status="Delivered"
              />
              <ProjectCard
                title="Restaurant POS System"
                description="Designing and developing a Restaurant POS System with QR Ordering and payment checkout using React Native for mobile app and NextJS Serverless hosted on Cloudflare Edge for Web Applications and the Backend Server."
                image="/kedai-pos.webp?height=400&width=600"
                link="https://kedai.madtofan.win"
                tags={["React Native", "NextJS", "Cloudflare Edge", "Serverless"]}
                status="On-going"
              />
              <ProjectCard
                title="Automated Trading Bot"
                description="Designed, calculated and developed a trading bot to constantly monitor the market price of selected ticker stocks to make purchasing and selling decisions automatically using Python. Successfully generated positive portfolio in 3 months. Currently studying to embed Machine Learning into the trading algorithm."
                image="/automated-trading-bot.webp?height=400&width=600"
                tags={["Python", "Machine Learning", "Financial APIs"]}
                status="On-going"
              />
            </div>
          </div>
        </section>

        <section
          id="skills"
          ref={skillsRef}
          className={`py-12 md:py-24 lg:py-32 transition-all duration-1000 ${mounted && skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center relative">
              <span className="bg-gradient-to-r from-teal-500 to-teal-300 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-500 rounded"></div>
            </h2>
            <TechStack />
          </div>
        </section>

        <section
          id="education"
          ref={educationRef}
          className={`py-12 md:py-24 lg:py-32 transition-all duration-1000 ${mounted && educationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center relative">
              <span className="bg-gradient-to-r from-teal-500 to-teal-300 bg-clip-text text-transparent">
                Education & Certifications
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-500 rounded"></div>
            </h2>
            <Education />
          </div>
        </section>

        <section
          id="contact"
          ref={contactRef}
          className={`py-12 md:py-24 lg:py-32 transition-all duration-1000 ${mounted && contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center relative">
                <span className="bg-gradient-to-r from-teal-500 to-teal-300 bg-clip-text text-transparent">
                  Get in Touch
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-500 rounded"></div>
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t dark:border-slate-800 transition-colors duration-300">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 m-auto">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Ahmad bin Zainul Abidin. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          </nav>
        </div>
      </footer>
    </div>
  )
}

