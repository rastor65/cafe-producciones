import { MessageCircle, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  const telefono = "123-456-7890" // Declare the telefono variable
  const email_contacto = "contact@cafeproducciones.com" // Declare the email_contacto variable
  const wa_link = "https://wa.me/1234567890" // Declare the wa_link variable

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Café Producciones</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Especialistas en producción integral de eventos. Transformamos ideas en experiencias memorables con la más
              alta calidad y profesionalismo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Eventos Sociales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Eventos Corporativos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Activaciones BTL
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Conciertos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sonido e Iluminación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Escenografía
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>{telefono}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span>{email_contacto}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                <a href={wa_link} className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">© 2024 Café Producciones. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
