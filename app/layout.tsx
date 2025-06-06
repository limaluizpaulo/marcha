import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald, VT323 } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-oswald" })
const vt323 = VT323({ subsets: ["latin"], weight: ["400"], variable: "--font-vt323" })

export const metadata: Metadata = {
  title: "Marcha da Maconha Guarulhos - Camisetas Oficiais",
  description: "Apoie o movimento, vista a luta. Camisetas oficiais da Marcha da Maconha Guarulhos.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body 
        className={cn("antialiased", inter.variable, oswald.variable, vt323.variable)}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
