"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, MENU_ITEMS, type Category } from "../data";

export default function CoastalPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("STARTERS");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen w-full bg-[#f0f9ff] text-slate-600 font-coastal selection:bg-[#7dd3fc] selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 py-6 px-8 flex justify-between items-center bg-white/50 backdrop-blur-md">
         <Link href="/" className="text-[#0ea5e9] hover:text-[#0284c7] transition-colors flex items-center gap-2 font-bold">
            <span className="material-symbols-outlined">west</span> Back
         </Link>
         <div className="text-xl font-bold tracking-widest text-[#0c4a6e] uppercase">The Deck</div>
         <div className="w-16"></div>
      </nav>

      {/* Hero */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
         {/* Abstract Waves */}
         <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#e0f2fe] rounded-t-[50%] scale-150 translate-y-20 opacity-80"></div>
         <div className="absolute bottom-0 left-0 w-full h-[45vh] bg-[#bae6fd] rounded-t-[50%] scale-150 translate-y-32 opacity-80"></div>
         <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-[#7dd3fc] rounded-t-[50%] scale-150 translate-y-44 opacity-80"></div>

         <div className="relative z-10 text-center px-6 -translate-y-20">
            <p className="text-[#0ea5e9] tracking-[0.3em] uppercase font-bold text-sm mb-4">Seaside Dining</p>
            <h1 className="text-6xl md:text-8xl font-light text-[#0c4a6e] mb-6">
                Breezy <span className="font-bold italic">Vibes</span>
            </h1>
            <p className="text-[#64748b] text-lg max-w-lg mx-auto leading-relaxed mb-10">
                Relax by the ocean with fresh catches and cool drinks. Life is better in flip-flops.
            </p>
            <button 
                onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-[#0ea5e9] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all font-bold tracking-wide"
            >
                View Menu
            </button>
         </div>
      </header>

      {/* Menu */}
      <main id="menu-section" className="max-w-6xl mx-auto px-6 py-24 relative z-20 bg-white/50 backdrop-blur-xl rounded-t-[3rem] -mt-24 shadow-[0_-20px_60px_rgba(0,0,0,0.05)]">
        
        {/* Categories */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {CATEGORIES.map((category) => (
            <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-2xl text-sm font-bold tracking-wide transition-all ${
                activeCategory === category
                    ? "bg-[#0ea5e9] text-white shadow-md"
                    : "bg-white text-[#64748b] hover:bg-[#e0f2fe]"
                }`}
            >
                {category}
            </button>
            ))}
        </div>

        {/* Rounded Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col gap-4">
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative group">
                        <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-[#0ea5e9]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="px-2 pb-2">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-bold text-[#0c4a6e]">{item.name}</h3>
                            <span className="text-[#0ea5e9] font-bold">{item.price}</span>
                        </div>
                        <p className="text-[#64748b] text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </main>

    </div>
  );
}
