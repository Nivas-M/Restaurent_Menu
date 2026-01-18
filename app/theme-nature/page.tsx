"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, MENU_ITEMS, type Category } from "../data";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("STARTERS");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center">
      {/* Navbar - Fixed/Sticky */}
      <header className="w-full flex items-center justify-between border-b border-black/5 dark:border-white/5 px-6 py-6 md:px-12 z-40 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md sticky top-0">
        <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="size-8 text-primary">
                    <span className="material-symbols-outlined !text-[32px]">arrow_back</span>
                </div>
            </Link>
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined !text-[32px]">eco</span>
          </div>
          <h2 className="text-xl md:text-2xl font-light tracking-wide text-slate-900 dark:text-white">
            The Green Table
          </h2>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-slate-900 dark:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined !text-[32px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[88px] z-50 bg-background-light dark:bg-background-dark p-6 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-lg font-medium tracking-widest py-3 border-b border-black/5 dark:border-white/5 text-left ${
                  activeCategory === category
                    ? "text-primary"
                    : "text-slate-500 dark:text-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="w-full h-[90vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl">
            <span className="inline-block px-4 py-2 border border-white/30 rounded-full text-white/90 text-sm tracking-[0.2em] font-medium uppercase backdrop-blur-sm">Farm to Table</span>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
                Fresh. Organic. <br/> <span className="font-semibold text-primary">Sustainable.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto">
                Experience the true taste of nature with ingredients sourced directly from local farmers and our own organic garden.
            </p>
            <div className="pt-8">
                <button 
                    onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-primary hover:bg-green-600 text-white rounded-full font-medium tracking-wide transition-colors"
                >
                    View Our Menu
                </button>
            </div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY SECTION */}
      <section className="w-full py-24 px-6 md:px-12 bg-white dark:bg-[#1a241d]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-8">
                <h3 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white">Our Philosophy</h3>
                <div className="space-y-6 text-slate-600 dark:text-[#9db8a6] leading-relaxed font-light">
                    <p>
                        At The Green Table, we believe that food should not only taste good but also be good for you and the planet. Our journey begins in the soil, working with farmers who share our commitment to regenerative agriculture.
                    </p>
                    <p>
                        Every dish is crafted to highlight the natural flavors of the ingredients. We don't mask them with heavy sauces; instead, we let the freshness speak for itself.
                    </p>
                </div>
                 <div className="grid grid-cols-2 gap-8 pt-4">
                    <div>
                        <span className="block text-4xl font-light text-primary mb-2">100%</span>
                        <span className="text-sm tracking-widest uppercase text-slate-500">Organic</span>
                    </div>
                    <div>
                        <span className="block text-4xl font-light text-primary mb-2">0%</span>
                        <span className="text-sm tracking-widest uppercase text-slate-500">Waste Policy</span>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" 
                    alt="Chef with fresh vegetables" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu-section" className="w-full py-24 bg-background-light dark:bg-background-dark flex flex-col items-center">
        <div className="text-center mb-16">
            <span className="text-primary tracking-widest uppercase text-sm font-medium">Seasonal Selection</span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 dark:text-white mt-4">Our Menu</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex sticky top-[88px] z-30 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-black/5 dark:border-white/5 justify-center mb-12">
          <div className="flex w-full max-w-[960px] justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group flex min-w-fit flex-col items-center px-6 py-4 border-b-2 transition-colors ${
                  activeCategory === category
                    ? "border-primary"
                    : "border-transparent hover:border-white/20"
                }`}
              >
                <span
                  className={`text-sm font-medium tracking-widest transition-colors ${
                    activeCategory === category
                      ? "text-primary dark:text-primary"
                      : "text-slate-500 dark:text-muted group-hover:text-slate-900 dark:group-hover:text-white"
                  }`}
                >
                  {category}
                </span>
              </button>
            ))}
          </div>
        </nav>

        {/* Content Area */}
        <div className="flex flex-col w-full max-w-[960px] px-6 gap-16 md:gap-32 mt-8 md:mt-0">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className={`group flex flex-col items-center gap-6 md:gap-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-lg relative shadow-lg">
                <div className="absolute inset-0 bg-black/10 z-10 transition-opacity group-hover:opacity-0"></div>
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  role="img"
                  aria-label={item.alt}
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                ></div>
              </div>
              <div
                className={`w-full md:w-1/2 flex flex-col items-start ${
                  index % 2 === 0 ? "text-left" : "md:items-end md:text-right"
                }`}
              >
                <div
                  className={`flex w-full items-baseline justify-between mb-3 border-b border-black/10 dark:border-white/10 pb-3 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
                    {item.name}
                  </h3>
                  <span className="text-lg md:text-xl font-medium text-primary whitespace-nowrap ml-4 md:ml-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-[#9db8a6] text-sm md:text-base font-light leading-relaxed mb-4 md:mb-8">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="w-full border-t border-black/5 dark:border-white/5 py-8 md:py-12 flex flex-col items-center bg-background-light dark:bg-background-dark">
        <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-medium tracking-wider text-slate-500 dark:text-muted uppercase mb-6 md:mb-8">
          <Link className="hover:text-primary transition-colors" href="#">
            Locations
          </Link>
          <span className="opacity-20">|</span>
          <Link className="hover:text-primary transition-colors" href="#">
            Contact
          </Link>
          <span className="opacity-20">|</span>
          <Link className="hover:text-primary transition-colors" href="#">
            Instagram
          </Link>
        </div>
        <p className="text-[10px] md:text-xs text-slate-400 dark:text-[#9db8a6]/50">
          © 2024 The Green Table. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
