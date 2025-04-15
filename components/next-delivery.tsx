import { CalendarClock } from "lucide-react"

interface NextDeliveryProps {
  dictionary: {
    title: string
    nextDelivery: string
    location: string
    contactToReserve: string
  }
}

export default function NextDelivery({ dictionary }: NextDeliveryProps) {
  // This would come from your database or CMS in a real application
  const nextDeliveryDate = "June 15-30, 2025"

  return (
    <div className="argentina-banner relative overflow-hidden rounded-lg">
      <div className="p-6 md:p-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="space-y-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white md:text-3xl">
              <CalendarClock className="h-6 w-6 text-[#74ACDF]" />
              <span className="relative">
                {dictionary?.title}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#74ACDF] via-white to-[#74ACDF]"></span>
              </span>
            </h2>
            <div className="space-y-2">
              <p className="text-xl font-bold text-white">{nextDeliveryDate}</p>
              <p className="font-medium text-[#74ACDF]">{dictionary?.location}</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0099ff] to-[#00e5ff] opacity-20 blur-lg"></div>
            <div className="relative rounded-lg border border-[#0099ff]/30 bg-gradient-to-r from-[#0099ff]/10 to-[#00e5ff]/10 p-4 backdrop-blur-sm">
              <p className="font-medium text-white">{dictionary?.contactToReserve}</p>
              <button className="mt-3 rounded bg-[#0099ff] px-4 py-2 font-medium text-white transition-colors hover:bg-[#007acc]">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
        <div className="absolute left-[10%] top-[20%] h-20 w-20 rounded-full border border-[#0099ff]/20"></div>
        <div className="absolute bottom-[30%] right-[15%] h-32 w-32 rounded-full border border-[#00e5ff]/10"></div>
      </div>
    </div>
  )
}
