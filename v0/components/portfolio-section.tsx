"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const portfolioItems = [
  {
    id: 1,
    title: "Lanzamiento Corporativo Tech Summit",
    category: "Corporativo",
    image: "/corporate-event-tech.png",
    description: "Evento de lanzamiento para empresa tecnológica con 500 asistentes",
  },
  {
    id: 2,
    title: "Boda Elegante Hacienda San José",
    category: "Social",
    image: "/elegant-wedding-setup.png",
    description: "Celebración matrimonial con decoración dorada y ambientación romántica",
  },
  {
    id: 3,
    title: "Concierto Sinfónico al Aire Libre",
    category: "Concierto",
    image: "/outdoor-orchestra-stage.png",
    description: "Producción completa de concierto sinfónico para 2000 personas",
  },
  {
    id: 4,
    title: "Activación de Marca Automotriz",
    category: "BTL",
    image: "/automotive-brand-activation.png",
    description: "Experiencia inmersiva para lanzamiento de nuevo modelo vehicular",
  },
  {
    id: 5,
    title: "Conferencia Internacional de Negocios",
    category: "Corporativo",
    image: "/business-conference-stage.png",
    description: "Evento empresarial con traducción simultánea y streaming en vivo",
  },
  {
    id: 6,
    title: "Festival Gastronómico Regional",
    category: "Masivo",
    image: "/placeholder-xqrv6.png",
    description: "Festival culinario con múltiples escenarios y área gastronómica",
  },
]

const categories = ["Todos", "Corporativo", "Social", "Concierto", "BTL", "Masivo"]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredItems =
    activeCategory === "Todos" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portafolio" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Nuestro Portafolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Cada evento es único. Descubre cómo hemos transformado ideas en experiencias extraordinarias para nuestros
            clientes.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{item.category}</Badge>
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Ver Portafolio Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
