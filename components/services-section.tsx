import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Building2, Megaphone, Music, Lightbulb, Palette } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Eventos Sociales",
    description: "Bodas, quinceañeras, aniversarios y celebraciones familiares con producción integral.",
    features: ["Coordinación completa", "Decoración personalizada", "Catering premium"],
  },
  {
    icon: Building2,
    title: "Eventos Corporativos",
    description: "Lanzamientos, conferencias, team building y eventos empresariales de alto impacto.",
    features: ["Logística empresarial", "Tecnología audiovisual", "Protocolo corporativo"],
  },
  {
    icon: Megaphone,
    title: "Activaciones BTL",
    description: "Experiencias de marca, activaciones comerciales y eventos promocionales.",
    features: ["Estrategia de marca", "Experiencias inmersivas", "Medición de resultados"],
  },
  {
    icon: Music,
    title: "Conciertos y Shows",
    description: "Producción de espectáculos musicales y eventos de entretenimiento masivo.",
    features: ["Escenarios profesionales", "Sonido de alta calidad", "Gestión de artistas"],
  },
  {
    icon: Lightbulb,
    title: "Sonido e Iluminación",
    description: "Alquiler y operación de equipos audiovisuales profesionales.",
    features: ["Equipos de última generación", "Técnicos especializados", "Soporte 24/7"],
  },
  {
    icon: Palette,
    title: "Escenografía",
    description: "Diseño y construcción de escenarios, stands y ambientaciones temáticas.",
    features: ["Diseño personalizado", "Construcción especializada", "Montaje profesional"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales para cada tipo de evento, desde la conceptualización hasta la ejecución
            perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
