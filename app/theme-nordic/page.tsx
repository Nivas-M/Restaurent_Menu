"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, MENU_ITEMS, type Category } from "../data";

export default function NordicPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("STARTERS");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen w-full bg-white text-slate-800 font-nordic selection:bg-slate-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md py-6 px-12 flex justify-between items-center transition-all duration-300">
         <Link href="/" className="text-sm font-light tracking-widest uppercase hover:opacity-50 transition-opacity">
            ← Main
         </Link>
         <div className="text-lg font-medium tracking-[0.3em] uppercase">Fjord</div>
         <div className="text-sm font-light tracking-widest uppercase opacity-50">Menu</div>
      </nav>

      {/* Hero */}
      <header className="h-[90vh] flex items-center justify-center p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center">
            <div className="space-y-8">
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-slate-400">Est. 2024</span>
                <h1 className="text-5xl md:text-7xl font-light leading-tight text-slate-900">
                    Simplicity <br/> is the ultimate <br/> sophistication.
                </h1>
                <p className="text-slate-500 font-light max-w-md leading-relaxed">
                    Nordic cuisine focusing on seasonal ingredients, clean flavors, and minimalist presentation.
                </p>
                <button 
                onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 px-8 py-4 bg-slate-900 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-slate-800 transition-colors rounded-none"
                >
                    View Selection
                </button>
            </div>
            
            <div className="h-[60vh] md:h-[70vh] w-full relative overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1605333190833-25a676646535?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-90" alt="Minimalist plating"/>
            </div>
        </div>
      </header>

      {/* Menu */}
      <main id="menu-section" className="max-w-7xl mx-auto px-6 py-24">
        
        {/* Categories */}
        <div className="flex justify-center gap-8 mb-24 overflow-x-auto pb-4 no-scrollbar">
            {CATEGORIES.map((category) => (
            <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-bold tracking-[0.25em] uppercase pb-2 transition-all ${
                activeCategory === category
                    ? "text-slate-900 border-b border-slate-900"
                    : "text-slate-400 border-transparent hover:text-slate-600"
                }`}
            >
                {category}
            </button>
            ))}
        </div>

        {/* Minimal List */}
        <div className="space-y-12 max-w-4xl mx-auto">
            {filteredItems.map((item) => (
                <div key={item.id} className="group flex flex-col md:flex-row gap-8 items-center md:items-start transition-all duration-500 hover:opacity-80">
                    <div className="w-full md:w-64 aspect-[4/3] bg-slate-50 overflow-hidden">
                        <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex-1 text-center md:text-left pt-2">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                            <h3 className="text-xl font-medium text-slate-900">{item.name}</h3>
                            <span className="text-sm font-bold text-slate-400">{item.price}</span>
                        </div>
                        <p className="text-slate-500 font-light leading-relaxed text-sm max-w-lg">
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
