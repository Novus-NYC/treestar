"use client"

import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll("main section, .surface, .shop-card"))

    items.forEach((item) => item.classList.add("reveal-on-scroll"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.24 },
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return null
}
