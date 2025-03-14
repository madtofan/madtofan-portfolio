"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number = 0
      y: number = 0
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      color: string = "#000";

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5

        // Use teal colors with different opacity
        const isDark = document.documentElement.classList.contains("dark")
        const hue = isDark ? 175 : 170 // Teal hue
        const saturation = isDark ? "80%" : "80%"
        const lightness = isDark ? "50%" : "50%"
        this.color = `hsla(${hue}, ${saturation}, ${lightness}, ${Math.random() * 0.5 + 0.1})`
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, Math.floor(window.innerWidth / 20))

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Connect particles with lines
    function connect() {
      const maxDistance = 150
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            if (!ctx) return;
            const opacity = 1 - distance / maxDistance
            const isDark = document.documentElement.classList.contains("dark")
            ctx.strokeStyle = isDark
              ? `rgba(20, 184, 166, ${opacity * 0.3})` // teal-500 with higher opacity
              : `rgba(13, 148, 136, ${opacity * 0.2})` // teal-600 with opacity
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      connect()

      requestAnimationFrame(animate)
    }

    animate()

    // Update colors when theme changes
    const observer = new MutationObserver(() => {
      for (let i = 0; i < particlesArray.length; i++) {
        const isDark = document.documentElement.classList.contains("dark")
        const hue = isDark ? 175 : 170 // Teal hue
        const saturation = isDark ? "80%" : "80%"
        const lightness = isDark ? "50%" : "50%"
        particlesArray[i].color = `hsla(${hue}, ${saturation}, ${lightness}, ${Math.random() * 0.5 + 0.1})`
      }
    })

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      observer.disconnect()
    }
  }, [theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10 opacity-30" />
}

