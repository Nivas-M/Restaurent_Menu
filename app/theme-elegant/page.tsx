"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CATEGORIES, MENU_ITEMS, type Category } from "../data";

export default function ElegantPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("STARTERS");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-[#e5e5e5] font-serif selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3 text-[#D4AF37] hover:text-[#f8d568] transition-colors">
                <span className="material-symbols-outlined font-light group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span className="text-sm font-sans tracking-[0.2em] uppercase hidden md:inline-block">Return</span>
            </Link>
          
          <h1 className={`${scrolled ? "text-2xl" : "text-3xl md:text-4xl"} font-light tracking-widest text-center transition-all duration-500`}>
            LUMIERE<span className="text-[#D4AF37]">.</span>
          </h1>

          <div className="w-24 hidden md:block"></div> {/* Spacer for balance */}
          <button className="md:hidden text-[#D4AF37]">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-30 fixed-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        
        <div className="relative z-10 text-center space-y-6 max-w-2xl px-6 pt-32">
          <p className="text-[#D4AF37] font-sans tracking-[0.3em] text-sm md:text-base uppercase animate-fade-in-up">Fine Dining Experience</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight leading-none animate-fade-in-up delay-100">
            Taste the <br/><span className="italic font-normal">Extraordinary</span>
          </h2>
          <div className="w-[1px] h-24 bg-gradient-to-b from-[#D4AF37] to-transparent mx-auto mt-12 opacity-50"></div>
          <button 
                onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/50 hover:text-[#D4AF37] font-sans tracking-[0.2em] text-xs uppercase transition-colors"
          >
            Explore Menu
          </button>
        </div>
      </header>
      
      {/* FEATURE / CHEF SECTION */}
      <section className="w-full py-32 px-6 md:px-12 bg-[#0a0a0a] relative">
         <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse items-center gap-20">
             <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                <span className="text-[#D4AF37] font-sans tracking-[0.2em] text-sm uppercase block">The Chef's Table</span>
                <h3 className="text-4xl md:text-5xl font-thin italic">"Cooking is an art, but eating is a passion."</h3>
                 <p className="text-white/60 font-sans font-light leading-loose">
                    Our Executive Chef brings over 20 years of culinary excellence to Lumiere. Each dish is a masterpiece, carefully curated to take you on a gastronomic journey through flavors, textures, and aromas. We invite you to experience dining in its purest, most elegant form.
                 </p>
                 <div className="pt-4">
                    <span className="font-dancing-script text-3xl text-white/80">Antoine R.</span>
                 </div>
             </div>
             <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 border border-[#D4AF37] translate-x-4 translate-y-4 rounded-sm"></div>
                <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 bg-gray-900">
                    <img 
                        src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9f4?auto=format&fit=crop&q=80&w=800" 
                        alt="Chef plating a dish" 
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>
             </div>
         </div>
      </section>

      {/* Menu Section */}
      <main id="menu-section" className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 border-t border-white/5">
        <div className="text-center mb-24">
             <h3 className="text-3xl md:text-4xl font-light tracking-widest text-center mb-4">
            CULINARY <span className="text-[#D4AF37]">COLLECTION</span>
            </h3>
            <p className="text-white/40 font-sans tracking-[0.2em] text-sm uppercase">Autumn / Winter 2024</p>
        </div>
       
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20 border-b border-white/5 pb-8">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative pb-2 text-sm md:text-base font-sans tracking-[0.2em] uppercase transition-all duration-300 ${
                activeCategory === category
                  ? "text-[#D4AF37]"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {category}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] transform origin-left transition-transform duration-300 ${activeCategory === category ? "scale-x-100" : "scale-x-0"}`}></span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {filteredItems.map((item, index) => (
            <div 
                key={item.id} 
                className="group flex gap-6 items-start"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-sm relative">
                <div className="absolute inset-0 bg-[#D4AF37]/10 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110" 
                />
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2 mb-3 group-hover:border-[#D4AF37]/50 transition-colors duration-500">
                  <h3 className="text-xl md:text-2xl font-normal text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-lg font-sans text-[#D4AF37] ml-4">{item.price}</span>
                </div>
                <p className="text-white/50 text-sm md:text-base font-sans font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center bg-[#050505]">
        <div className="mb-8">
            <h2 className="text-2xl font-light tracking-widest text-[#D4AF37] mb-2">LUMIERE.</h2>
            <p className="text-white/30 text-xs font-sans tracking-widest uppercase">Est. 2024</p>
        </div>
        <div className="flex justify-center gap-8 mb-8">
            {['Instagram', 'Facebook', 'Twitter'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
                    <span className="sr-only">{social}</span>
                    <span className="material-symbols-outlined text-lg">public</span>
                </a>
            ))}
        </div>
        <p className="text-white/20 text-xs font-sans tracking-widest">
            © 2024 Lumiere Dining. All Rights Reserved.
        </p>
      </footer>

      <style jsx global>{`
        .fixed-bg {
            background-attachment: fixed;
        }
        @keyframes fade-in-up {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
