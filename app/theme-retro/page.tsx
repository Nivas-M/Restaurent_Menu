"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, MENU_ITEMS, type Category } from "../data";

export default function RetroPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("STARTERS");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen w-full bg-[#fce7f3] text-slate-800 font-sans selection:bg-[#ec4899] selection:text-white overflow-hidden">
      
      {/* Checkerboard Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0" style={{
        backgroundImage: `linear-gradient(45deg, #000000 25%, transparent 25%), linear-gradient(-45deg, #000000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000000 75%), linear-gradient(-45deg, transparent 75%, #000000 75%)`,
        backgroundSize: `40px 40px`,
        backgroundPosition: `0 0, 0 20px, 20px -20px, -20px 0px`
      }}></div>

      {/* Navigation */}
      <nav className="fixed top-6 left-6 z-50">
         <Link href="/" className="bg-[#06b6d4] text-white px-6 py-2 rounded-full font-retro tracking-wider text-xl shadow-[4px_4px_0px_#000] hover:translate-y-1 hover:shadow-none transition-all border-2 border-black flex items-center gap-2">
            <span className="material-symbols-outlined">arrow_back</span>
            Back
         </Link>
      </nav>

      {/* Neon Sign Hero */}
      <header className="min-h-screen flex flex-col items-center justify-center relative p-8">
        <div className="border-[8px] border-[#ec4899] rounded-[3rem] p-12 bg-white/80 backdrop-blur-sm shadow-[0_0_50px_#ec4899] transform -rotate-2">
            <h1 className="text-6xl md:text-9xl font-retro text-[#ec4899] drop-shadow-[4px_4px_0_#000]">
                Diner 55
            </h1>
            <div className="mt-4 flex items-center justify-center gap-4">
                 <div className="h-1 flex-1 bg-black rounded-full"></div>
                 <span className="font-bold uppercase tracking-widest text-black">Open 24/7</span>
                 <div className="h-1 flex-1 bg-black rounded-full"></div>
            </div>
        </div>
        
        <p className="mt-12 text-2xl font-bold bg-[#fef08a] px-8 py-4 rounded-xl border-4 border-black shadow-[6px_6px_0px_#000] rotate-2">
            Burgers • Shakes • Good Times
        </p>

        <button 
        onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-16 bg-black text-white p-4 rounded-full animate-bounce shadow-xl"
        >
            <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
        </button>
      </header>

      {/* Menu Board */}
      <main id="menu-section" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="bg-black p-4 rounded-3xl shadow-2xl">
            <div className="bg-[#1e1e1e] border-4 border-[#444] rounded-2xl p-8 md:p-12 min-h-[80vh]">
                
                {/* Categories Tab */}
                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`text-xl md:text-3xl font-retro px-6 py-2 transition-all ${
                        activeCategory === category
                            ? "text-[#22d3ee] drop-shadow-[0_0_10px_#22d3ee] scale-110"
                            : "text-[#555] hover:text-[#777]"
                        }`}
                    >
                        {category}
                    </button>
                    ))}
                </div>

                {/* Items Items */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                     {filteredItems.map((item) => (
                        <div key={item.id} className="flex gap-6 items-start group">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0 bg-white">
                                <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 font-mono text-[#ddd]">
                                <div className="flex justify-between items-baseline border-b-2 border-dashed border-[#444] pb-2 mb-2">
                                     <h3 className="text-xl font-bold uppercase tracking-wider group-hover:text-[#ec4899] transition-colors">{item.name}</h3>
                                     <span className="text-[#fef08a] font-bold text-lg">{item.price}</span>
                                </div>
                                <p className="text-sm text-[#888]">{item.description}</p>
                            </div>
                        </div>
                     ))}
                </div>

                <div className="mt-16 text-center">
                    <span className="inline-block px-12 py-4 border-4 border-[#ef4444] text-[#ef4444] text-4xl font-retro -rotate-6 opacity-80 decoration-double">
                        Tasty!
                    </span>
                </div>

            </div>
        </div>
      </main>

    </div>
  );
}
