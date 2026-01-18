"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-zinc-950 p-6">
      <div className="max-w-[1400px] w-full text-center space-y-12">
        <div className="space-y-4 py-12">
            <h1 className="text-4xl md:text-7xl font-light tracking-tight text-slate-900 dark:text-white">
            Dining <span className="font-serif italic text-slate-400">by</span> Design
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-light max-w-2xl mx-auto">
                Explore our curated collection of restaurant themes, each crafted to evoke a specific atmosphere and culinary journey.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-20">
          
          {/* 1. Nature */}
          <Link href="/theme-nature" className="group relative h-64 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-[#f6f8f6] dark:bg-[#111813] transition-colors"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <span className="material-symbols-outlined text-green-500 text-4xl mb-4 group-hover:scale-110 transition-transform">eco</span>
                <h3 className="text-xl font-light text-slate-900 dark:text-white">Nature</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-2">Organic & Fresh</p>
            </div>
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>

          {/* 2. Elegant */}
          <Link href="/theme-elegant" className="group relative h-64 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 bg-[#0a0a0a]">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <span className="material-symbols-outlined text-amber-500 text-4xl mb-4 group-hover:scale-110 transition-transform">diamond</span>
                <h3 className="text-xl font-serif text-white">Elegant</h3>
                <p className="text-xs text-amber-500/80 uppercase tracking-widest mt-2">Luxury Dining</p>
            </div>
          </Link>

          {/* 3. Vibrant */}
          <Link href="/theme-vibrant" className="group relative h-64 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 bg-white dark:bg-zinc-900">
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <span className="material-symbols-outlined text-pink-500 text-4xl mb-4 group-hover:rotate-12 transition-transform">celebration</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Vibrant</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-2">Fun & Pop</p>
            </div>
          </Link>

          {/* 4. Rustic */}
          <Link href="/theme-rustic" className="group relative h-64 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 bg-[#1c1917]">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <span className="material-symbols-outlined text-[#ea580c] text-4xl mb-4 group-hover:scale-110 transition-transform">soup_kitchen</span>
                <h3 className="text-xl font-bold text-[#e7e5e4] uppercase tracking-widest">Rustic</h3>
                <p className="text-xs text-[#a8a29e] uppercase tracking-widest mt-2">Farm & Fire</p>
            </div>
          </Link>

          {/* 5. Nordic */}
          <Link href="/theme-nordic" className="group relative h-64 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <span className="material-symbols-outlined text-slate-400 text-4xl mb-4 group-hover:-translate-y-1 transition-transform">ac_unit</span>
                <h3 className="text-xl font-light text-slate-900 tracking-widest uppercase">Nordic</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-2">Minimalist</p>
            </div>
          </Link>

          {/* 6. Retro */}
          <Link href="/theme-retro" className="group relative h-64 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 bg-[#fce7f3]">
             <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #000 10%, transparent 10%)', backgroundSize: '10px 10px'}}></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <span className="material-symbols-outlined text-[#ec4899] text-4xl mb-4 group-hover:animate-bounce">lunch_dining</span>
                <h3 className="text-xl font-retro text-[#ec4899] text-2xl filter drop-shadow-[2px_2px_0_white]">Retro</h3>
                <p className="text-xs text-[#be185d] uppercase tracking-widest mt-2 font-bold">Diner Style</p>
            </div>
          </Link>

          {/* 7. Cyberpunk */}
          <Link href="/theme-cyberpunk" className="group relative h-64 rounded-2xl overflow-hidden border border-[#00ff41] shadow-[0_0_10px_#00ff41] hover:shadow-[0_0_20px_#00ff41] transition-all duration-500 bg-black">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <span className="material-symbols-outlined text-[#00ff41] text-4xl mb-4 group-hover:rotate-90 transition-transform">terminal</span>
                <h3 className="text-xl font-cyber text-[#00ff41] uppercase tracking-widest">Cyberpunk</h3>
                <p className="text-xs text-[#ff00ff] uppercase tracking-widest mt-2">Future Tech</p>
            </div>
          </Link>

          {/* 8. Coastal */}
          <Link href="/theme-coastal" className="group relative h-64 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 bg-[#f0f9ff]">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <span className="material-symbols-outlined text-[#0ea5e9] text-4xl mb-4 group-hover:translate-x-1 transition-transform">sailing</span>
                <h3 className="text-xl font-bold text-[#0c4a6e]">Coastal</h3>
                <p className="text-xs text-[#0ea5e9] uppercase tracking-widest mt-2">Breezy & Blue</p>
            </div>
          </Link>

          {/* 9. Traditional */}
          <Link href="/theme-traditional" className="group relative h-64 rounded-2xl overflow-hidden border border-[#8b4513]/20 shadow-lg hover:shadow-xl transition-all duration-500 bg-[#fcf8ec]">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <span className="material-symbols-outlined text-[#8b4513] text-4xl mb-4">history_edu</span>
                <h3 className="text-xl font-serif font-bold text-[#2d2a24] italic">Heritage</h3>
                <p className="text-xs text-[#8b4513] uppercase tracking-widest mt-2">Traditional</p>
            </div>
          </Link>

           {/* 10. Grunge */}
           <Link href="/theme-grunge" className="group relative h-64 rounded-2xl overflow-hidden border border-black shadow-lg hover:shadow-xl transition-all duration-500 bg-[#111]">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10 transform -rotate-1 group-hover:rotate-0 transition-transform">
                <span className="material-symbols-outlined text-[#ff003c] text-4xl mb-4">sports_bar</span>
                <h3 className="text-xl font-grunge text-white uppercase tracking-widest text-2xl">Grunge</h3>
                <p className="text-xs text-[#777] uppercase tracking-widest mt-2 font-bold bg-white/10 px-2 py-1">Street</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
