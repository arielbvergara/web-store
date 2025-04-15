import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ContactSectionProps {
  dictionary: {
    email: string
    phone: string
    address: string
    contactInfo: string
    getInTouch: string
    detailedProcess: string
    paymentMethods: string
  }
}

export default function ContactSection({ dictionary }: ContactSectionProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <Card className="gamer-border relative overflow-hidden border-muted bg-card/80 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xl font-semibold text-cyan-500">{dictionary?.contactInfo}</h3>
              <div className="space-y-6">
                <div className="group flex items-start gap-4">
                  <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-2 transition-colors group-hover:bg-blue-500/20">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contact@webstore.com</p>
                  </div>
                </div>
                <div className="group flex items-start gap-4">
                  <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-2 transition-colors group-hover:bg-blue-500/20">
                    <Phone className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">{dictionary?.phone}</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="group flex items-start gap-4">
                  <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-2 transition-colors group-hover:bg-blue-500/20">
                    <MapPin className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">{dictionary?.address}</p>
                    <p className="text-muted-foreground">123 Store Street, City, Country</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-xl font-semibold text-cyan-500">{dictionary?.getInTouch}</h3>
              <div className="space-y-4 rounded-lg border border-muted bg-background/50 p-4">
                <p className="text-muted-foreground">{dictionary?.detailedProcess}</p>
                <p className="text-muted-foreground">{dictionary?.paymentMethods}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
