import { Search, ShoppingBag, CreditCard, Truck } from "lucide-react"

interface HowItWorksProps {
  dictionary: {
    description: string
    steps: {
      browse: {
        title: string
        description: string
      }
      select: {
        title: string
        description: string
      }
      reserve: {
        title: string
        description: string
      }
      delivery: {
        title: string
        description: string
      }
    }
  }
}

export default function HowItWorks({ dictionary }: HowItWorksProps) {
  const steps = [
    {
      icon: <Search className="h-10 w-10" />,
      title: dictionary?.steps.browse.title,
      description: dictionary?.steps.browse.description,
    },
    {
      icon: <ShoppingBag className="h-10 w-10" />,
      title: dictionary?.steps.select.title,
      description: dictionary?.steps.select.description,
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: dictionary?.steps.reserve.title,
      description: dictionary?.steps.reserve.description,
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: dictionary?.steps.delivery.title,
      description: dictionary?.steps.delivery.description,
    },
  ]

  return (
    <div className="space-y-8">
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-foreground/90">{dictionary?.description}</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={index} className="group flex flex-col items-center text-center">
            <div className="relative mb-4 text-primary">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg"></div>
              <div className="relative transform rounded-lg border border-primary/30 bg-background p-4 transition-transform group-hover:scale-110">
                {step.icon}
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-cyan-500">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
