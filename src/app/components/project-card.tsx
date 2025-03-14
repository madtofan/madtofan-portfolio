"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Link2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link?: string
  tags: string[]
  status: "Delivered" | "On-going"
}

export default function ProjectCard({ title, description, image, link, tags, status }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 dark:bg-gray-900 dark:border-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-70" : "opacity-50"}`}
        ></div>
        <Badge
          className={`absolute top-2 right-2 ${status === "Delivered" ? "bg-teal-500 text-white" : "bg-teal-600 text-white"} transition-all duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
        >
          {status}
        </Badge>
        <h3 className="absolute bottom-4 left-4 font-semibold text-xl text-white">{title}</h3>
      </div>
      <CardContent className="p-4 relative">
        <div className="absolute -top-10 left-0 w-full h-10 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-teal-50 dark:bg-teal-900/40 px-2 py-1 text-xs font-medium text-teal-700 dark:text-teal-300 ring-1 ring-inset ring-teal-200 dark:ring-teal-800 transition-all duration-300 hover:bg-teal-100 dark:hover:bg-teal-900/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      {link && (
        <CardFooter className="p-4 pt-0">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm hover:underline group text-teal-600 dark:text-teal-400"
          >
            <Link2 className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span className="relative">
              View Project
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full"></span>
            </span>
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}

