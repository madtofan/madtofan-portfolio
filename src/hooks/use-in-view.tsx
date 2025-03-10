"use client"

import { type RefObject, useEffect, useState } from "react"

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useInView(ref: RefObject<Element | null>, options: UseInViewOptions = {}): boolean {
  const { threshold = 0, rootMargin = "0px", once = false } = options
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting
        setIsInView(isElementInView)

        if (isElementInView && once && element) {
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [ref, threshold, rootMargin, once])

  return isInView
}

