"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, MENU_ITEMS, type Category } from "../data";

export default function RusticPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("STARTERS");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen w-full bg-[#1c1917] text-[#d6d3d1] font-rustic selection:bg-[#ea580c] selection:text-white">
      {/* Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-[#1c1917]/90 backdrop-blur-sm border-b border-[#44403c] py-4 px-6 md:px-12 flex justify-between items-center">
         <Link href="/" className="flex items-center gap-2 group text-[#a8a29e] hover:text-[#ea580c] transition-colors">
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="uppercase tracking-widest text-xs font-bold">Back</span>
         </Link>
         <div className="text-xl tracking-[0.2em] uppercase font-bold text-[#ea580c]">The Barn</div>
         <div className="w-16"></div>
      </nav>

      {/* Hero */}
      <header className="h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-40 grayscale sepia-[.3]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 border-y-4 border-double border-[#ea580c] py-12 bg-black/40 backdrop-blur-sm max-w-3xl transform rotate-1">
            <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-[#e7e5e4] drop-shadow-lg mb-2">
                Rustic <span className="text-[#ea580c]">Eats</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#a8a29e] font-sans tracking-widest uppercase">
                Farm · Fire · Flavor
            </p>
        </div>
      </header>

      {/* Intro */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center space-y-6">
        <span className="material-symbols-outlined text-4xl text-[#ea580c]">restaurant</span>
        <p className="text-xl md:text-2xl leading-relaxed text-[#a8a29e]">
            "Simple food, done right. We believe in the power of open fire cooking, locally sourced meats, and good company."
        </p>
        <div className="h-1 w-24 bg-[#44403c] mx-auto rounded-full"></div>
      </section>

      {/* Menu */}
      <main id="menu-section" className="px-6 pb-24 max-w-7xl mx-auto">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b-2 border-[#44403c] pb-6">
            {CATEGORIES.map((category) => (
            <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm md:text-base uppercase tracking-widest font-bold border-2 transition-all duration-200 ${
                activeCategory === category
                    ? "border-[#ea580c] bg-[#ea580c] text-white"
                    : "border-transparent text-[#78716c] hover:border-[#57534e] hover:text-[#d6d3d1]"
                }`}
            >
                {category}
            </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {filteredItems.map((item) => (
                <div key={item.id} className="bg-[#292524] p-6 border border-[#44403c] shadow-lg flex flex-col md:flex-row gap-6 hover:border-[#ea580c] transition-colors group">
                    <div className="w-full md:w-40 h-40 shrink-0 overflow-hidden bg-black/50 grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-[#e7e5e4] uppercase tracking-wide group-hover:text-[#ea580c] transition-colors">{item.name}</h3>
                                <span className="text-lg font-bold text-[#ea580c]">{item.price}</span>
                            </div>
                            <p className="text-[#a8a29e] text-sm leading-relaxed font-sans">{item.description}</p>
                        </div>
                        <button className="mt-4 self-start text-xs uppercase tracking-widest text-[#78716c] hover:text-white border-b border-[#ea580c] pb-1 transition-colors">Add to Order</button>
                    </div>
                </div>
            ))}
        </div>
      </main>

    </div>
  );
}
