'use client'
import { User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface WhoAmIProps {
  dictionary: {
    title: string
    content: string
  }
}

export default function WhoAmI({ dictionary }: WhoAmIProps) {

  const [htmlContent, setHtmlContent] = useState('')

  useEffect(() => {
    setHtmlContent(dictionary.content)
  }, [dictionary.content])

  return (
    <Card className="gamer-border relative overflow-hidden border-muted bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <User className="h-6 w-6 text-blue-500" />
          <span className="gamer-gradient">{dictionary?.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
      <p 
        className="leading-relaxed text-foreground/90"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      </CardContent>
    </Card>
  )
}
