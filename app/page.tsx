"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, MENU_ITEMS, type Category } from "./data";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("STARTERS");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center">
      <header className="w-full max-w-[1200px] flex items-center justify-between border-b border-black/5 dark:border-white/5 px-6 py-6 md:px-12 z-40 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md sticky top-0">
        <div className="flex items-center gap-3">
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

      <main className="w-full flex-1 flex flex-col items-center pb-20">
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
        <div className="flex flex-col w-full max-w-[960px] px-6 gap-24 md:gap-32 mt-12 md:mt-0">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className={`group flex flex-col items-center gap-8 md:gap-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-lg relative">
                <div className="absolute inset-0 bg-black/10 z-10 transition-opacity group-hover:opacity-0"></div>
                {/* 
                  Using a standard div with background image to match the template exactly.
                  Next.js Image component could be used here for optimization if preferred, 
                  but background-image is what the template used.
                */}
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
                  className={`flex w-full items-baseline justify-between mb-4 border-b border-black/10 dark:border-white/10 pb-4 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <h3 className="text-3xl font-light text-slate-900 dark:text-white tracking-tight">
                    {item.name}
                  </h3>
                  <span className="text-xl font-medium text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-[#9db8a6] text-base font-light leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="w-full border-t border-black/5 dark:border-white/5 py-12 flex flex-col items-center bg-background-light dark:bg-background-dark">
        <div className="flex gap-8 text-sm font-medium tracking-wider text-slate-500 dark:text-muted uppercase mb-8">
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
        <p className="text-xs text-slate-400 dark:text-[#9db8a6]/50">
          © 2024 The Green Table. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
