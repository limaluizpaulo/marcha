"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Copy, Instagram, MessageCircle, Hand, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import siteConfig from "../config/site-config.json"

const AnimatedSection: React.FC<{
  children: React.ReactNode
  className?: string
  animationClass?: string
  delay?: string
}> = ({ children, className = "", animationClass = "animate-fadeInUp", delay = "0s" }) => {
  return (
    <div
      className={`${className} opacity-0 ${animationClass}`}
      style={{ animationDelay: delay, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  const [copied, setCopied] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(siteConfig.contact.pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="bg-preto-asfalto text-branco-giz min-h-screen overflow-x-hidden">
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-black shadow-2xl transition-all duration-500 ease-in-out ${
          isScrolled ? "h-[72px]" : "h-[120px] border-b-2 border-verde-detalhe/50"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex justify-end items-center">
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
            aria-label="Página Inicial"
          >
            <Image
              src={siteConfig.images.logo}
              alt={`Logo ${siteConfig.site.name}`}
              width={isScrolled ? 120 : 180}
              height={isScrolled ? 48 : 72}
              className={`group-hover:opacity-80 transition-all duration-500 ease-in-out ${
                isScrolled ? "h-12" : "h-18"
              }`}
              priority
            />
          </Link>
          <nav className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/manifesto"
              className={`text-verde-detalhe hover:text-verde-detalhe/80 transition-all duration-300 font-oswald font-bold uppercase tracking-wide ${
                isScrolled ? "text-sm px-3 py-2" : "text-base px-4 py-3"
              } rounded-lg hover:bg-verde-detalhe/10`}
              aria-label="Manifesto"
            >
              Manifesto
            </Link>
            <Link
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessages.hero)}`}
              target="_blank"
              className={`rounded-full hover:bg-verde-detalhe/20 transition-all duration-500 hover:scale-110 ${
                isScrolled ? "p-2.5" : "p-4"
              }`}
              aria-label="WhatsApp"
            >
              <MessageCircle size={isScrolled ? 24 : 36} className="text-verde-detalhe transition-all duration-500" />
            </Link>
            <Link
              href={`https://www.instagram.com/${siteConfig.contact.instagramProfile}`}
              target="_blank"
              className={`rounded-full hover:bg-verde-detalhe/20 transition-all duration-500 hover:scale-110 ${
                isScrolled ? "p-2.5" : "p-4"
              }`}
              aria-label="Instagram"
            >
              <Instagram size={isScrolled ? 24 : 36} className="text-verde-detalhe transition-all duration-500" />
            </Link>
          </nav>
        </div>
      </header>
      <main className={`${isScrolled ? "pt-[72px]" : "pt-[120px]"} transition-all duration-500 ease-in-out`}>
        {/* Seção 1: Banner Principal */}
        <section className="relative bg-black">
          <div className="w-full max-w-6xl mx-auto">
            <Image
              src={siteConfig.images.heroBanner}
              alt={siteConfig.images.heroBannerAlt}
              width={1400}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          <AnimatedSection
            className="relative z-20 p-4 container mx-auto py-16"
            animationClass="animate-fadeIn"
            delay="0.2s"
          >
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl font-medium text-branco-giz/90">
              {siteConfig.site.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#catalogo"
                className="bg-verde-detalhe text-preto-asfalto font-bold py-3.5 px-10 uppercase font-oswald text-lg tracking-wide rounded-lg border-2 border-verde-detalhe hover:bg-preto-asfalto hover:text-verde-detalhe transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[0_0_15px_rgba(0,246,63,0.5)] focus:outline-none focus:ring-2 focus:ring-verde-detalhe focus:ring-offset-2 focus:ring-offset-preto-asfalto"
              >
                Ver Modelos
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessages.hero)}`}
                target="_blank"
                className="border-2 border-branco-giz text-branco-giz font-bold py-3.5 px-10 uppercase font-oswald text-lg tracking-wide rounded-lg hover:bg-branco-giz hover:text-preto-asfalto transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-branco-giz focus:ring-offset-2 focus:ring-offset-preto-asfalto"
              >
                Pedido no WhatsApp
              </Link>
            </div>
          </AnimatedSection>
        </section>

        {/* Seção 2: Destaque Pix */}
        <AnimatedSection className="bg-preto-asfalto py-20 px-4" animationClass="animate-scaleUp" delay="0.3s">
          <div className="container mx-auto max-w-3xl text-center bg-preto-asfalto p-8 sm:p-12 border-2 border-verde-detalhe/70 rounded-2xl shadow-2xl">
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase text-verde-detalhe mb-3">
              📌 Garanta a sua via Pix!
            </h2>
            <p className="mt-4 text-lg text-branco-giz/90">Chave Pix (e-mail):</p>
            <div className="my-5 inline-block transform -rotate-2 transition-transform hover:rotate-0">
              <p className="font-vt323 text-2xl sm:text-4xl bg-neutral-900 text-verde-detalhe px-5 py-2.5 border-2 border-dashed border-verde-detalhe/60 shadow-lg rounded-md">
                {siteConfig.contact.pixKey}
              </p>
            </div>
            <p className="text-lg text-branco-giz/90">
              Valor: <span className="font-bold text-xl text-verde-detalhe">{siteConfig.products.currency} {siteConfig.products.defaultPrice},00</span>{" "}
              <span className="block sm:inline-block text-sm text-branco-giz/70">
                (contribuição consciente é bem-vinda!)
              </span>
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button
                onClick={handleCopy}
                className="bg-verde-detalhe text-preto-asfalto font-bold py-3 px-8 uppercase font-oswald text-lg tracking-wide flex items-center justify-center gap-2.5 rounded-lg border-2 border-verde-detalhe hover:bg-preto-asfalto hover:text-verde-detalhe transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[0_0_15px_rgba(0,246,63,0.5)] focus:outline-none focus:ring-2 focus:ring-verde-detalhe focus:ring-offset-2 focus:ring-offset-preto-asfalto"
              >
                <Copy size={20} /> {copied ? "Chave Copiada!" : "Copiar Chave"}
              </button>
              <Link
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessages.pix)}`}
                target="_blank"
                className="border-2 border-branco-giz text-branco-giz font-bold py-3 px-8 uppercase font-oswald text-lg tracking-wide flex items-center justify-center gap-2.5 rounded-lg hover:bg-branco-giz hover:text-preto-asfalto transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-branco-giz focus:ring-offset-2 focus:ring-offset-preto-asfalto"
              >
                <MessageCircle size={20} /> Enviar Comprovante
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Seção 3: Catálogo */}
        <section id="catalogo" className="bg-preto-asfalto py-24 px-4">
          <AnimatedSection className="container mx-auto" animationClass="animate-fadeInUp" delay="0.2s">
            <h2 className="font-oswald text-5xl sm:text-6xl font-bold text-center uppercase mb-16 text-branco-giz">
              Nossos Modelos
            </h2>
            <div className="relative">
              <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex -ml-4">
                  {siteConfig.products.items.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0 pl-4 relative"
                    >
                      <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-verde-detalhe/50 hover:border-verde-detalhe transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,246,63,0.3)] transform hover:-translate-y-2 h-full flex flex-col">
                        <div className="relative h-80 w-full overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.alt}
                            fill
                            style={{ objectFit: "contain" }}
                            className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                          />
                        </div>
                        <div className="p-6 text-center flex flex-col flex-grow">
                          <p className="mt-2 text-sm text-branco-giz/70">Tamanhos: {siteConfig.products.availableSizes.join(" / ")}</p>
                          <p className="text-4xl font-bold text-branco-giz my-4">{siteConfig.products.currency} {item.price}</p>
                          <div className="mt-auto flex justify-center">
                            <Link
                              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(item.whatsappMessage)}`}
                              target="_blank"
                              className="bg-verde-detalhe text-preto-asfalto font-bold py-3 px-8 uppercase font-oswald text-lg tracking-wide rounded-lg border-2 border-verde-detalhe hover:bg-preto-asfalto hover:text-verde-detalhe transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[0_0_15px_rgba(0,246,63,0.5)] focus:outline-none focus:ring-2 focus:ring-verde-detalhe focus:ring-offset-2 focus:ring-offset-neutral-900 w-full flex items-center justify-center gap-2"
                            >
                              <Hand size={20} /> Quero essa!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                aria-label="Slide anterior"
                onClick={scrollPrev}
                className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-verde-detalhe/80 hover:bg-verde-detalhe text-preto-asfalto p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-verde-detalhe focus:ring-offset-2 focus:ring-offset-preto-asfalto disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!emblaApi}
              >
                {" "}
                <ChevronLeft size={24} />{" "}
              </button>
              <button
                aria-label="Próximo slide"
                onClick={scrollNext}
                className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-verde-detalhe/80 hover:bg-verde-detalhe text-preto-asfalto p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-verde-detalhe focus:ring-offset-2 focus:ring-offset-preto-asfalto disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!emblaApi}
              >
                {" "}
                <ChevronRight size={24} />{" "}
              </button>
            </div>
          </AnimatedSection>
        </section>

        {/* Seção 4: Como Funciona */}
        <AnimatedSection className="bg-preto-asfalto py-24 px-4" animationClass="animate-fadeInUp" delay="0.3s">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-oswald text-5xl sm:text-6xl font-bold uppercase mb-16 text-branco-giz">
              🛒 Como Comprar
            </h2>
            <ol className="space-y-10 text-lg max-w-xl mx-auto">
              {siteConfig.content.howToBuySteps.map((step, index) => (
                <AnimatedSection
                  key={index}
                  className="flex items-center gap-5 text-left p-4 bg-neutral-900/40 rounded-xl shadow-lg border border-verde-detalhe/50"
                  animationClass="animate-fadeInUp"
                  delay={`${0.4 + index * 0.15}s`}
                >
                  <span className="font-oswald text-2xl bg-verde-detalhe text-preto-asfalto rounded-full w-12 h-12 flex items-center justify-center shadow-md flex-shrink-0 transform group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <span className="flex-1 text-branco-giz/90 text-base sm:text-lg">{step}</span>
                </AnimatedSection>
              ))}
            </ol>
            <AnimatedSection className="mt-16" animationClass="animate-scaleUp" delay="0.8s">
              <p className="text-verde-detalhe bg-verde-detalhe/10 border-2 border-dashed border-verde-detalhe inline-block p-5 rounded-lg text-lg shadow-xl animate-greenPulse">
                📍 {siteConfig.site.deliveryInfo}
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Seção 5: Sobre a Marcha */}
        <AnimatedSection className="bg-preto-asfalto py-28 px-4" animationClass="animate-fadeIn" delay="0.3s">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-oswald text-5xl sm:text-6xl font-bold uppercase text-branco-giz text-center mb-16">
              📣 Sobre o Movimento
            </h2>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Imagem à esquerda */}
              <div className="md:w-1/2 relative">
                <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-verde-detalhe/50">
                  <Image
                    src={siteConfig.images.aboutImage}
                    alt={siteConfig.images.aboutImageAlt}
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Texto à direita */}
              <div className="md:w-1/2 text-left">
                <div className="space-y-4 text-branco-giz/90 leading-relaxed">
                  {siteConfig.content.aboutText.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessages.participate)}`}
                    target="_blank"
                    className="bg-verde-detalhe text-preto-asfalto font-bold py-3 px-8 uppercase font-oswald text-lg tracking-wide rounded-lg border-2 border-verde-detalhe hover:bg-preto-asfalto hover:text-verde-detalhe transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[0_0_15px_rgba(0,246,63,0.5)] focus:outline-none focus:ring-2 focus:ring-verde-detalhe focus:ring-offset-2 focus:ring-offset-preto-asfalto inline-flex items-center gap-2"
                  >
                    <Hand size={20} /> Quero Participar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <footer className="bg-preto-asfalto border-t-4 border-verde-detalhe py-16 px-4">
        <div className="container mx-auto text-center text-branco-giz/70">
          <p className="font-oswald text-2xl sm:text-3xl mb-8">✊ Marcha da Maconha {siteConfig.site.city} – {siteConfig.site.year}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-10 gap-y-6 mb-8 text-lg">
            <Link
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              className="hover:text-verde-detalhe transition-colors duration-300 flex items-center gap-2.5 group group-hover:scale-105 transform transition-transform duration-200"
            >
              <MessageCircle
                size={22}
                className="text-branco-giz group-hover:text-verde-detalhe transition-colors group-hover:scale-110 transition-transform duration-200"
              />{" "}
              WhatsApp
            </Link>
            <Link
              href={`https://www.instagram.com/${siteConfig.contact.instagramProfile}`}
              target="_blank"
              className="hover:text-verde-detalhe transition-colors duration-300 flex items-center gap-2.5 group group-hover:scale-105 transform transition-transform duration-200"
            >
              <Instagram
                size={22}
                className="text-branco-giz group-hover:text-verde-detalhe transition-colors group-hover:scale-110 transition-transform duration-200"
              />{" "}
              @{siteConfig.contact.instagramProfile}
            </Link>
          </div>
          <p className="text-sm text-branco-giz/60">
            Feito com <span className="text-verde-detalhe">💚</span> e luta. Por um futuro mais justo e verde.
          </p>
        </div>
      </footer>
    </div>
  )
}
