"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, MENU_ITEMS, type Category } from "../data";

export default function VibrantPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("STARTERS");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] text-slate-900 font-fun overflow-x-hidden selection:bg-[#FF6B6B] selection:text-white">
      
      {/* Decorative Blobs */}
      <div className="fixed top-[-100px] right-[-100px] w-96 h-96 bg-[#FFD93D] rounded-full blur-3xl opacity-20 -z-10 animate-pulse-slow"></div>
      <div className="fixed bottom-[-100px] left-[-100px] w-96 h-96 bg-[#FF6B6B] rounded-full blur-3xl opacity-20 -z-10 animate-pulse-slow delay-700"></div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-50">
        <Link 
            href="/" 
            className="w-12 h-12 bg-white rounded-full shadow-lg border-2 border-slate-900 flex items-center justify-center hover:scale-110 hover:-rotate-12 transition-transform duration-300"
        >
            <span className="material-symbols-outlined text-slate-900">arrow_back</span>
        </Link>
      </nav>

      {/* HERO SECTION */}
      <header className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-pink-200 rounded-full blur-[100px] opacity-30 -z-10"></div>
             
             <span className="inline-block px-4 py-2 bg-black text-white rounded-full font-bold text-sm tracking-widest uppercase mb-6 rotate-2 transform hover:-rotate-2 transition-transform cursor-default">
                Flavor Explosion
             </span>
             
             <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-slate-900 leading-[0.8]">
                EAT.<br/>
                <span className="text-[#FF6B6B]">DRINK.</span><br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">PARTY.</span>
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl font-bold text-slate-500 max-w-lg mx-auto leading-relaxed">
                Step into a world where flavor has no boundaries. Bold tastes, bright vibes, and unforgettable nights.
            </p>

            <button 
                onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-12 px-10 py-5 bg-black text-white font-black text-xl rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
            >
                Let's Feast <span className="material-symbols-outlined">south</span>
            </button>
      </header>
      
      {/* VIBE CHECK / SOCIAL SECTION */}
      <section className="py-24 bg-black text-white -rotate-1 origin-center my-12 scale-[1.02]">
        <div className="max-w-6xl mx-auto px-6 rotate-1">
             <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-6xl font-black mb-6">JOIN THE <br/><span className="text-[#FFD93D]">VIBE CHECK</span></h2>
                    <p className="text-xl font-medium text-gray-400 leading-relaxed">
                        It's not just about the food. It's about the music, the people, and the energy. Every Friday night is Fiesta night with live DJs and exclusive cocktails.
                    </p>
                    <div className="flex gap-4 mt-8">
                         <div className="w-16 h-16 bg-[#FF6B6B] rounded-full flex items-center justify-center font-black text-2xl">01</div>
                         <div className="w-16 h-16 bg-[#4D96FF] rounded-full flex items-center justify-center font-black text-2xl">02</div>
                         <div className="w-16 h-16 bg-[#FFD93D] rounded-full flex items-center justify-center font-black text-2xl text-black">03</div>
                    </div>
                </div>
                 <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=400" className="rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-300" alt="Party vibe"/>
                    <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400" className="rounded-2xl -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8" alt="Cocktails"/>
                 </div>
             </div>
        </div>
      </section>

      <main id="menu-section" className="max-w-6xl mx-auto px-6 pt-12 pb-24">
         <header className="text-center mb-16 relative">
             <div className="inline-block relative">
                 <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 relative z-10">
                    THE MENU
                </h2>
                <div className="absolute -bottom-2 -right-4 w-full h-4 bg-[#FFD93D] -z-0 -rotate-2"></div>
             </div>
        </header>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 bg-white p-4 rounded-[2rem] shadow-sm border-2 border-slate-100 w-fit mx-auto sticky top-4 z-40 bg-white/90 backdrop-blur-sm">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-slate-900 text-white shadow-lg rotate-1"
                  : "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
                key={item.id}
                className="group bg-white rounded-[2.5rem] p-4 border-2 border-slate-100 hover:border-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden rounded-[2rem] mb-4 relative bg-gray-100">
                <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-black text-slate-900 shadow-sm border border-slate-900/10">
                    {item.price}
                </div>
              </div>

              <div className="px-2 pb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">
                        {item.name}
                    </h3>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed">
                    {item.description}
                </p>
              </div>
              
              <button className="w-full py-4 bg-[#FF6B6B] text-white font-bold rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 active:scale-95">
                Order Now
              </button>
            </div>
          ))}
        </div>

      </main>

      <style jsx global>{`
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
