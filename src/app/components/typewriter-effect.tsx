"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export default function TypewriterEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!texts.length) return

    let timeout: NodeJS.Timeout

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        timeout = setTimeout(() => { }, delayBetweenTexts)
      } else {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText.slice(0, -1))
        }, deletingSpeed)
      }
    } else {
      const fullText = texts[currentTextIndex]
      if (currentText === fullText) {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delayBetweenTexts)
      } else {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => fullText.slice(0, prevText.length + 1))
        }, typingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

