"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Instagram, Heart, Scale, Users, Leaf, ArrowLeft, Shield, Home } from "lucide-react"
import siteConfig from "../../config/site-config.json"

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

export default function ManifestoPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-preto-asfalto text-branco-giz min-h-screen overflow-x-hidden">
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-black shadow-2xl transition-all duration-500 ease-in-out ${
          isScrolled ? "h-[72px]" : "h-[120px] border-b-2 border-verde-detalhe/50"
        }`}
      >
        <div className="container mx-auto px-2 sm:px-4 h-full flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-2 text-verde-detalhe hover:text-verde-detalhe/80 transition-colors duration-300 z-10"
            aria-label="Voltar para início"
          >
            <ArrowLeft size={isScrolled ? 20 : 24} />
            <span className="font-oswald font-bold uppercase tracking-wide text-xs sm:text-sm">Voltar</span>
          </Link>
          
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
            aria-label="Página Inicial"
          >
            <Image
              src={siteConfig.images.logo}
              alt={`Logo ${siteConfig.site.name}`}
              width={isScrolled ? 100 : 140}
              height={isScrolled ? 40 : 56}
              className={`group-hover:opacity-80 transition-all duration-500 ease-in-out ${
                isScrolled ? "h-10" : "h-14"
              }`}
              priority
            />
          </Link>
          
          <nav className="flex items-center gap-1 sm:gap-2 ml-auto">
            <Link
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessages.participate)}`}
              target="_blank"
              className={`rounded-full hover:bg-verde-detalhe/20 transition-all duration-500 hover:scale-110 ${
                isScrolled ? "p-2" : "p-3"
              }`}
              aria-label="WhatsApp"
            >
              <MessageCircle size={isScrolled ? 20 : 28} className="text-verde-detalhe transition-all duration-500" />
            </Link>
            <Link
              href={`https://www.instagram.com/${siteConfig.contact.instagramProfile}`}
              target="_blank"
              className={`rounded-full hover:bg-verde-detalhe/20 transition-all duration-500 hover:scale-110 ${
                isScrolled ? "p-2" : "p-3"
              }`}
              aria-label="Instagram"
            >
              <Instagram size={isScrolled ? 20 : 28} className="text-verde-detalhe transition-all duration-500" />
            </Link>
          </nav>
        </div>
      </header>

      <main className={`${isScrolled ? "pt-[72px]" : "pt-[120px]"} transition-all duration-500 ease-in-out`}>
        {/* Banner Principal */}
        <section className="relative bg-gradient-to-b from-black to-preto-asfalto py-12 sm:py-20 px-4">
          <AnimatedSection className="container mx-auto text-center max-w-4xl" animationClass="animate-fadeIn" delay="0.2s">
            <h1 className="font-oswald text-3xl sm:text-4xl lg:text-6xl font-bold uppercase text-verde-detalhe mb-4 sm:mb-6 tracking-wide leading-tight">
              Manifesto
            </h1>
            <h2 className="font-oswald text-xl sm:text-2xl lg:text-4xl font-bold uppercase text-branco-giz mb-3 sm:mb-4 leading-tight px-2">
              Marcha da Maconha Guarulhos 2025
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-verde-detalhe/90 mx-auto leading-relaxed font-medium px-2">
              🌿 "Em defesa das Farmácias Vivas – Saúde, Reparação e Direitos!"
            </p>
          </AnimatedSection>
        </section>

        {/* Seção 1: Manifesto Oficial */}
        <AnimatedSection className="bg-preto-asfalto py-12 sm:py-24 px-4" animationClass="animate-fadeInUp" delay="0.3s">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-neutral-900 p-4 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border-2 border-verde-detalhe/50 shadow-2xl">
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-branco-giz/90 leading-relaxed">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-verde-detalhe text-center mb-6 sm:mb-8 leading-tight">
                  Voltamos às ruas para lutar e fazer ecoar nossas vozes!
                </p>
                
                <p>
                  Em meio à repressão e ao controle social, a Marcha da Maconha Guarulhos se levanta em defesa da saúde, 
                  do bem viver, dos direitos e da reparação de nossas comunidades. A maconha é a{" "}
                  <strong className="text-verde-detalhe">erva do povo</strong>, e seu potencial medicinal e terapêutico 
                  precisa chegar, sobretudo, às populações historicamente minorizadas.
                </p>
                
                <p>
                  O direito à moradia digna, onde todas as pessoas possam plantar sua erva, é também direito à saúde 
                  e ao bem viver. Ter um teto para cultivar maconha ainda está distante de ser realidade. A vulnerabilidade 
                  extrema empurra pessoas para a margem, para as calçadas e para as ruas – e{" "}
                  <strong className="text-verde-detalhe">rua não é casa de ninguém</strong>.
                </p>
                
                <div className="bg-verde-detalhe/10 border-l-4 border-verde-detalhe p-4 sm:p-6 rounded-r-lg">
                  <p className="font-bold text-verde-detalhe text-lg sm:text-xl mb-2 leading-tight">🌿 As Farmácias Vivas</p>
                  <p className="leading-relaxed">
                    As Farmácias Vivas representam esse caminho: recolocar a maconha em seu lugar de direito, 
                    como aliada na promoção da saúde e instrumento de reparação para quem sempre foi marginalizado.
                  </p>
                </div>
                
                <p>
                  Enquanto muitas pessoas estiverem sem um lar, o autocultivo não será possível. Porém, receber uma 
                  medicação fitocanabinoide através do SUS é uma possibilidade real e urgente. É indispensável que sejam 
                  implementadas políticas públicas de acesso à medicina endocanabinoide e que a sociedade reconheça 
                  a cannabis como recurso valioso no cuidado de diversas condições, garantindo acesso, dignidade e reparação.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Seção 2: Guerra às Drogas e Violência Estrutural */}
        <section className="bg-neutral-950 py-12 sm:py-24 px-4">
          <AnimatedSection className="container mx-auto max-w-4xl" animationClass="animate-fadeInUp" delay="0.2s">
            <h2 className="font-oswald text-2xl sm:text-4xl lg:text-5xl font-bold uppercase mb-8 sm:mb-12 text-branco-giz text-center leading-tight px-2">
              ✊ Contra a Guerra às Drogas
            </h2>
            
            <div className="bg-preto-asfalto p-4 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border-2 border-verde-detalhe/50 shadow-2xl">
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-branco-giz/90 leading-relaxed">
                <p>
                  Não podemos ignorar os efeitos da chamada <strong className="text-verde-detalhe">"guerra às drogas"</strong>, 
                  que perpetua desigualdades e violências, sobretudo contra as populações negras, periféricas, faveladas, 
                  pessoas em situação de rua, pessoas egressas de comunidades terapêuticas e de hospitais psiquiátricos, 
                  pessoas que passaram pelo sistema prisional e a comunidade LGBTQIAPNB+.
                </p>
                
                <div className="bg-red-900/20 border-l-4 border-red-500 p-4 sm:p-6 rounded-r-lg">
                  <p className="font-bold text-red-400 text-lg sm:text-xl mb-2 leading-tight">⚠️ Nossa luta é por essas vidas</p>
                  <p className="leading-relaxed">
                    Por pessoas estigmatizadas, silenciadas, perseguidas e mortas em nome de uma política que 
                    prioriza o controle em vez do cuidado.
                  </p>
                </div>
                
                <p>
                  A repressão que sofremos na cidade – como a recente tentativa da polícia de impedir nossas atividades – 
                  evidencia a hostilidade contra uma luta legítima: o{" "}
                  <strong className="text-verde-detalhe">direito fundamental de viver e de bem viver</strong>.
                </p>
                
                <p className="text-lg sm:text-xl font-bold text-verde-detalhe text-center bg-verde-detalhe/10 p-4 sm:p-6 rounded-lg border border-verde-detalhe/50 leading-tight">
                  Lutar pela descriminalização é lutar por justiça social.
                </p>
                
                <p>
                  Cannabis é maconha e deve ser reconhecida como ferramenta de cura e bem-estar, especialmente onde 
                  o acesso à saúde é precário e a violência estrutural atinge as pessoas mais vulneráveis.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Seção 3: Movimento Suprapartidário */}
        <AnimatedSection className="bg-preto-asfalto py-12 sm:py-24 px-4" animationClass="animate-fadeInUp" delay="0.3s">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-oswald text-2xl sm:text-4xl lg:text-5xl font-bold uppercase mb-8 sm:mb-12 text-branco-giz text-center leading-tight px-2">
              🤝 Movimento Suprapartidário
            </h2>
            
            <div className="bg-neutral-900 p-4 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border-2 border-verde-detalhe/50 shadow-2xl">
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-branco-giz/90 leading-relaxed text-center">
                <p className="text-lg sm:text-xl font-bold text-verde-detalhe mb-4 sm:mb-6 leading-tight">
                  A Marcha da Maconha Guarulhos é suprapartidária e nasce da união entre movimentos sociais e sociedade civil organizada.
                </p>
                
                <p>
                  Não representamos um partido ou coletivo específico, mas todas as pessoas que acreditam em um futuro 
                  no qual o <strong className="text-verde-detalhe">direito de viver bem seja para todas, todos e todes</strong>.
                </p>
                
                <div className="bg-verde-detalhe/10 border border-verde-detalhe/50 p-4 sm:p-8 rounded-xl">
                  <p className="text-xl sm:text-2xl font-bold text-verde-detalhe mb-3 sm:mb-4 leading-tight">
                    ✊ Seguimos firmes na resistência
                  </p>
                  <p className="text-lg sm:text-xl leading-relaxed">
                    Marchando também por quem não pode marchar.
                  </p>
                </div>
                
                <p className="text-xl font-bold text-branco-giz">
                  É hora de trazer a maconha de volta às comunidades – como saúde, como respeito, como reparação.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Seção 4: Chamada para Ação Final */}
        <AnimatedSection className="bg-gradient-to-b from-preto-asfalto to-black py-12 sm:py-24 px-4" animationClass="animate-fadeIn" delay="0.4s">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-verde-detalhe/10 border-4 border-verde-detalhe p-4 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl shadow-2xl mb-8 sm:mb-12">
              <h2 className="font-oswald text-2xl sm:text-4xl lg:text-6xl font-bold uppercase mb-4 sm:mb-8 text-verde-detalhe leading-tight">
                🌿 Em Defesa das Farmácias Vivas
              </h2>
              <p className="text-lg sm:text-2xl lg:text-3xl text-branco-giz font-bold mb-3 sm:mb-4 leading-tight">
                Saúde, Reparação e Direitos!
              </p>
              <p className="text-base sm:text-xl text-verde-detalhe font-bold">
                Marcha da Maconha Guarulhos 2025
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
              <Link
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Olá! Li o manifesto e quero participar da Marcha da Maconha Guarulhos 2025 - Em defesa das Farmácias Vivas!")}`}
                target="_blank"
                className="bg-verde-detalhe text-preto-asfalto font-bold py-4 px-8 uppercase font-oswald text-lg tracking-wide rounded-lg border-2 border-verde-detalhe hover:bg-preto-asfalto hover:text-verde-detalhe transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[0_0_15px_rgba(0,246,63,0.5)] focus:outline-none focus:ring-2 focus:ring-verde-detalhe focus:ring-offset-2 focus:ring-offset-black flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} />
                Quero Participar
              </Link>
              
              <Link
                href="/"
                className="border-2 border-branco-giz text-branco-giz font-bold py-4 px-8 uppercase font-oswald text-lg tracking-wide rounded-lg hover:bg-branco-giz hover:text-preto-asfalto transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-branco-giz focus:ring-offset-2 focus:ring-offset-black flex items-center justify-center gap-3"
              >
                <Leaf size={24} />
                Apoie o Movimento
              </Link>
            </div>
            
            <p className="text-base sm:text-lg text-branco-giz/90 max-w-3xl mx-auto leading-relaxed px-2">
              A mudança não vem de cima. Ela brota das ruas, da organização popular, 
              da nossa capacidade de sonhar e construir juntos um futuro onde as{" "}
              <strong className="text-verde-detalhe">Farmácias Vivas</strong> sejam realidade para todas as pessoas.
            </p>
          </div>
        </AnimatedSection>
      </main>

      <footer className="bg-preto-asfalto border-t-4 border-verde-detalhe py-16 px-4">
        <div className="container mx-auto text-center text-branco-giz/70">
          <p className="font-oswald text-2xl sm:text-3xl mb-8">
            ✊ Marcha da Maconha {siteConfig.site.city} – {siteConfig.site.year}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-10 gap-y-6 mb-8 text-lg">
            <Link
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              className="hover:text-verde-detalhe transition-colors duration-300 flex items-center gap-2.5 group group-hover:scale-105 transform transition-transform duration-200"
            >
              <MessageCircle
                size={22}
                className="text-branco-giz group-hover:text-verde-detalhe transition-colors group-hover:scale-110 transition-transform duration-200"
              />
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
              />
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