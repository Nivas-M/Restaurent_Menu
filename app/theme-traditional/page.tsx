"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, MENU_ITEMS, type Category } from "../data";

export default function TraditionalPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("STARTERS");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen w-full bg-[#fcf8ec] text-[#3f3c33] font-trad selection:bg-[#8b4513] selection:text-white">
      
      {/* Paper Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      {/* Border Decoration */}
      <div className="fixed inset-4 border-2 border-[#8b4513] z-50 pointer-events-none rounded-sm"></div>
      <div className="fixed inset-5 border border-[#8b4513] z-50 pointer-events-none rounded-sm opacity-50"></div>

      {/* Navigation */}
      <nav className="fixed top-8 inset-x-0 z-40 bg-[#fcf8ec]/90 backdrop-blur-sm border-b border-[#8b4513]/20 py-4 px-12 flex justify-between items-center max-w-6xl mx-auto">
         <Link href="/" className="text-[#8b4513] hover:opacity-70 transition-opacity font-serif italic text-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-base">west</span> Back
         </Link>
         <div className="text-2xl font-bold tracking-widest uppercase text-[#8b4513]">Heritage</div>
         <div className="w-16"></div>
      </nav>

      {/* Hero */}
      <header className="h-screen flex items-center justify-center p-12 relative overflow-hidden">
        <div className="text-center z-10 p-12 bg-[#fcf8ec]/80 backdrop-blur-sm border border-[#8b4513]/30 shadow-xl max-w-2xl transform rotate-1">
            <span className="block text-[#8b4513] text-sm tracking-[0.3em] uppercase mb-4 font-bold border-b border-[#8b4513]/30 pb-4 mx-auto w-1/2">
                Established 1985
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-[#2d2a24] mb-4 leading-none">
                The<br/><span className="italic text-[#8b4513]">Heritage</span>
            </h1>
            <p className="text-[#59554d] text-xl font-serif italic leading-relaxed mb-8">
                Celebrating the timeless art of gastronomy with recipes passed down through generations.
            </p>
            <button 
                onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-3 bg-[#8b4513] text-[#fcf8ec] uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#6d360f] transition-colors"
            >
                View Menu
            </button>
        </div>
        
        {/* Background Image decoration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 opacity-20 rotate-12">
             <img src="https://images.unsplash.com/photo-1549488344-c35596cea052?auto=format&fit=crop&q=80&w=400" alt="Vintage plate" className="w-full h-full object-cover rounded-full sepia"/>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 opacity-20 -rotate-12">
             <img src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9f4?auto=format&fit=crop&q=80&w=400" alt="Vintage cooking" className="w-full h-full object-cover rounded-full sepia"/>
        </div>
      </header>

      {/* Menu */}
      <main id="menu-section" className="max-w-5xl mx-auto px-8 py-24 relative z-10">
        
        {/* Categories */}
        <div className="flex justify-center gap-12 mb-20 border-t border-b border-[#8b4513] py-6">
            {CATEGORIES.map((category) => (
            <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-base font-bold uppercase tracking-[0.2em] transition-all relative group ${
                activeCategory === category
                    ? "text-[#8b4513]"
                    : "text-[#888] hover:text-[#555]"
                }`}
            >
                <span className="relative z-10">{category}</span>
                {activeCategory === category && <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-2xl text-[#8b4513]">♦</span>}
            </button>
            ))}
        </div>

        {/* Classic List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {filteredItems.map((item) => (
                <div key={item.id} className="relative group">
                     {/* Hover Image Reveal */}
                     <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full overflow-hidden border-4 border-[#fcf8ec] shadow-xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-20">
                         <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                     </div>

                    <div className="border-b border-dotted border-[#8b4513]/40 pb-4">
                        <div className="flex justify-between items-baseline mb-2">
                             <h3 className="text-2xl font-bold text-[#2d2a24]">{item.name}</h3>
                             <span className="text-xl font-bold text-[#8b4513]">{item.price}</span>
                        </div>
                        <p className="text-[#59554d] text-lg font-serif italic leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-24 text-[#8b4513]/50 text-sm tracking-widest uppercase">
            — Bon Appétit —
        </div>

      </main>

    </div>
  );
}
