const processSteps = [
  {
    number: "01",
    title: "Brief y Consultoría",
    description: "Entendemos tus necesidades, objetivos y visión del evento ideal.",
  },
  {
    number: "02",
    title: "Propuesta Personalizada",
    description: "Desarrollamos una propuesta detallada con cronograma y presupuesto transparente.",
  },
  {
    number: "03",
    title: "Planificación y Coordinación",
    description: "Organizamos cada detalle: proveedores, logística, permisos y contingencias.",
  },
  {
    number: "04",
    title: "Montaje y Producción",
    description: "Ejecutamos el montaje con precisión, supervisando cada elemento del evento.",
  },
  {
    number: "05",
    title: "Evento y Seguimiento",
    description: "Operamos el evento completo y realizamos desmontaje post-evento.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Nuestro Proceso</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un método probado que garantiza la excelencia en cada etapa de tu evento.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-start mb-12 last:mb-0">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute left-8 mt-20 w-0.5 h-12 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
