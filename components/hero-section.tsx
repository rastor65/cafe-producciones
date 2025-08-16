import { Button } from "@/components/ui/button"
import { MessageCircle, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img src="/elegant-event.png" alt="Elegant event setup" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-background mb-6 leading-tight">
          Eventos Impecables,
          <br />
          <span className="text-primary">Experiencias Memorables</span>
        </h1>

        <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Producción integral para marcas y personas que exigen excelencia
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
            <FileText className="w-5 h-5 mr-2" />
            Solicitar Propuesta
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-background text-background hover:bg-background hover:text-foreground px-8 py-4 text-lg bg-transparent"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Hablar por WhatsApp
          </Button>
        </div>

        {/* Key Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-background">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Montajes Premium</h3>
            <p className="text-background/80">Logística precisa y calidad excepcional</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Sin Sorpresas</h3>
            <p className="text-background/80">Cronogramas claros y presupuestos transparentes</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Cobertura Regional</h3>
            <p className="text-background/80">Proveedores certificados en toda la región</p>
          </div>
        </div>
      </div>
    </section>
  )
}
