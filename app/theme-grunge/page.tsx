"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, MENU_ITEMS, type Category } from "../data";

export default function GrungePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("STARTERS");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen w-full bg-[#111] text-[#eee] font-grunge selection:bg-[#ff003c] selection:text-black overflow-x-hidden">
      
      {/* Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 p-8 z-50">
         <Link href="/" className="inline-block bg-[#ff003c] text-black px-6 py-2 font-bold transform -rotate-3 hover:rotate-0 transition-transform shadow-[4px_4px_0_white]">
            GET BACK
         </Link>
      </nav>

      {/* Hero */}
      <header className="min-h-screen flex items-center justify-center relative p-8">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#ff003c] rounded-full blur-[100px] opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl text-center">
             <h1 className="text-7xl md:text-9xl text-white mb-6 uppercase leading-[0.8]">
                Street<br/>
                <span className="text-[#ff003c] outline-text">Eats</span>
             </h1>
             <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 2px white;
                    color: transparent;
                }
             `}</style>
             <p className="text-2xl md:text-3xl text-[#888] font-sans font-bold bg-white/10 inline-block px-8 py-4 transform rotate-2">
                NO RULES. JUST FOOD.
             </p>
             
             <button 
                onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto mt-16 text-xl border-b-4 border-[#ff003c] pb-2 hover:text-[#ff003c] transition-colors"
            >
                SCROLL DOWN ↓
             </button>
        </div>
      </header>

      {/* Menu */}
      <main id="menu-section" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* Spray Paint Categories */}
        <div className="flex flex-wrap justify-center gap-8 mb-24">
            {CATEGORIES.map((category) => (
            <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-2xl md:text-4xl transition-all uppercase transform ${
                activeCategory === category
                    ? "text-[#ff003c] scale-110 drop-shadow-[2px_2px_0_white] rotate-2"
                    : "text-[#444] hover:text-[#888] hover:-rotate-1"
                }`}
            >
                {category}
            </button>
            ))}
        </div>

        {/* Masonry-ish Grid */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {filteredItems.map((item, index) => (
                <div key={item.id} className="break-inside-avoid bg-[#1a1a1a] p-2 transform transition-all duration-300 hover:scale-[1.02] hover:z-10 relative group">
                    {/* Tape effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#ddd]/20 transform -rotate-1 z-20 backdrop-blur-sm"></div>

                    <div className="relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img src={item.image} alt={item.alt} className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100" />
                        <div className="absolute bottom-0 left-0 bg-black p-4">
                             <span className="text-[#ff003c] text-xl font-bold">{item.price}</span>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <h3 className="text-2xl text-white mb-2 uppercase">{item.name}</h3>
                        <p className="text-[#777] font-sans text-sm leading-relaxed border-l-2 border-[#ff003c] pl-4">
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
