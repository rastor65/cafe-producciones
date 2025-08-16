"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "María González",
    position: "Directora de Marketing",
    company: "TechCorp Solutions",
    content:
      "Café Producciones superó todas nuestras expectativas. El lanzamiento de nuestro producto fue impecable, desde la logística hasta los detalles más pequeños. Definitivamente volveremos a trabajar con ellos.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    position: "Novio",
    company: "Boda Personal",
    content:
      "Nuestra boda fue exactamente como la soñamos. El equipo de Café Producciones hizo que todo fluyera perfectamente, permitiéndonos disfrutar cada momento sin preocupaciones.",
    rating: 5,
  },
  {
    name: "Ana Rodríguez",
    position: "Gerente de Eventos",
    company: "Fundación Esperanza",
    content:
      "La gala benéfica que organizaron fue extraordinaria. Lograron crear una atmósfera elegante y emotiva que conectó perfectamente con nuestros donantes. Recaudamos más de lo esperado.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    position: "CEO",
    company: "Innovate Inc.",
    content:
      "El congreso internacional que produjeron fue de clase mundial. La coordinación con speakers internacionales, la tecnología y la logística fueron impecables. Altamente recomendados.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La satisfacción de nuestros clientes es nuestro mayor logro. Estas son sus experiencias.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-center text-foreground leading-relaxed mb-8 font-light">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="text-center">
                <div className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">{testimonials[currentIndex].position}</div>
                <div className="text-primary font-medium">{testimonials[currentIndex].company}</div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
