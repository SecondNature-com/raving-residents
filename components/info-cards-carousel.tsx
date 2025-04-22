"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

type InfoCard = {
  id: number
  title: string
  description: string
  actionText: string
  actionLink: string
  imageSrc: string
  imageAlt: string
}

interface InfoCardsCarouselProps {
  cards: InfoCard[]
}

export function InfoCardsCarousel({ cards }: InfoCardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(cards.length / visibleCards)
  const maxIndex = Math.max(0, cards.length - visibleCards)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - visibleCards))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + visibleCards))
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(Math.min(maxIndex, slideIndex * visibleCards))
  }

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="overflow-hidden" ref={carouselRef}>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex / cards.length) * 100}%)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2"
              style={{ width: `${100 / visibleCards}%` }}
            >
              <div className="bg-[#F8FAFC] rounded-lg p-6 h-full">
                <div className="flex justify-end mb-4">
                  <Image
                    src={card.imageSrc || "/placeholder.svg"}
                    alt={card.imageAlt}
                    width={120}
                    height={100}
                    className="h-24 w-auto"
                  />
                </div>
                <h2 className="text-xl font-bold text-[#0F172A] mb-2">{card.title}</h2>
                <p className="text-[#64748B] mb-4 text-base">{card.description}</p>
                <Link
                  href={card.actionLink}
                  className="text-[#16A34A] font-medium border-b-2 border-[#16A34A] inline-block text-base"
                >
                  {card.actionText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className={`absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
        disabled={currentIndex === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-[#0F172A]" />
      </button>

      <button
        onClick={goToNext}
        className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md ${
          currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
        disabled={currentIndex >= maxIndex}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-[#0F172A]" />
      </button>

      {/* Indicators */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === Math.floor(currentIndex / visibleCards) ? "w-6 bg-[#16A34A]" : "w-2 bg-[#E2E8F0]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
