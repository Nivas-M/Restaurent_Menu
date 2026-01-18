"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, MENU_ITEMS, type Category } from "../data";

export default function CyberpunkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("STARTERS");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen w-full bg-[#050505] text-[#00ff41] font-cyber selection:bg-[#ff00ff] selection:text-white overflow-x-hidden">
      
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)_scale(2)]"></div>

      {/* Scanline */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]"></div>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-40 p-6 flex justify-between items-center bg-black/80 backdrop-blur-sm border-b border-[#00ff41]/30">
        <Link href="/" className="flex items-center gap-2 text-[#00ff41] hover:text-[#ff00ff] transition-colors uppercase tracking-[0.2em] text-xs">
            [ <span className="material-symbols-outlined text-sm">arrow_back</span> Return_Main ]
        </Link>
        <div className="text-xl font-bold tracking-[0.2em] text-[#ff00ff] animate-pulse">NEON<span className="text-white">CITY</span></div>
        <div className="text-xs tracking-[0.2em] text-[#00ff41]">SYS:ONLINE</div>
      </nav>

      {/* Component Hero */}
      <header className="h-screen flex flex-col items-center justify-center relative p-8 section-scan">
        <div className="relative z-10 text-center glitch-container">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] via-[#white] to-[#ff00ff] mb-4 drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]">
                Cyber<br/>Bistro_2077
            </h1>
            <p className="text-[#00ff41] text-lg md:text-xl tracking-[0.5em] uppercase border-t border-b border-[#00ff41]/50 py-2 inline-block bg-black/50">
                High_Tech // Low_Life // Great_Food
            </p>
        </div>
        
        <button 
            onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-16 px-8 py-4 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all uppercase tracking-[0.2em] text-sm font-bold relative group overflow-hidden"
        >
            <span className="relative z-10">Access_Database</span>
            <div className="absolute inset-0 bg-[#00ff41] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </header>

      {/* Data Stream Menu */}
      <main id="menu-section" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-16 border-l-4 border-[#ff00ff] pl-6">
            {CATEGORIES.map((category) => (
            <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1 text-sm md:text-base font-bold uppercase tracking-widest clip-path-polygon transition-all font-mono ${
                activeCategory === category
                    ? "bg-[#ff00ff] text-black"
                    : "bg-[#111] text-[#555] hover:text-[#00ff41] border border-[#333]"
                }`}
            >
                {category}
            </button>
            ))}
        </div>

        {/* Holographic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => (
                <div key={item.id} className="relative bg-[#0a0a0a] border border-[#00ff41]/30 p-4 hover:border-[#00ff41] transition-all group">
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff41]"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff41]"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff41]"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff41]"></div>
                    
                    <div className="flex gap-4">
                         <div className="w-24 h-24 bg-[#00ff41]/5 relative overflow-hidden shrink-0">
                            <img src={item.image} alt={item.alt} className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:mix-blend-normal transition-all" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-white text-lg font-bold uppercase tracking-wider">{item.name}</h3>
                                <div className="text-[#ff00ff] font-mono">{item.price}</div>
                            </div>
                            <p className="text-[#00ff41]/70 text-xs md:text-sm font-mono leading-relaxed">
                                {`>> `}{item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </main>

    </div>
  );
}
