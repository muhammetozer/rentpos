
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Ürünler", href: "#urunler" },
    { name: "Çözümler", href: "#cozumler" },
    { name: "Hakkımızda", href: "#hakkimizda" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/loog.png"
            alt="RentPos"
            width={110}
            height={25}
            priority
            className="h-auto w-[110px] object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-slate-700 transition-colors hover:text-[#7A1425]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-5 lg:flex">

          <a
            href="tel:+905319601509"
            className="flex items-center gap-2 text-[14px] font-medium text-slate-700 transition-colors hover:text-[#7A1425]"
          >
            <Phone size={16} />
            Bizi Arayın
          </a>

          <a
            href="tel:+905319601509"
            className="rounded-lg bg-[#7A1425] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#5E0F1D] hover:shadow-md"
          >
            Hemen Başvur
          </a>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#7A1425] transition-colors hover:bg-[#7A1425]/10 lg:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-slate-100 py-4 text-[15px] font-medium text-slate-700 transition-colors hover:text-[#7A1425]"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="tel:+905319601509"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 border-b border-slate-100 py-4 text-[15px] font-medium text-slate-700"
          >
            <Phone size={17} />
            Bizi Arayın
          </a>

          <a
            href="tel:+905319601509"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-lg bg-[#7A1425] px-5 py-3 text-center text-[14px] font-semibold text-white transition-colors hover:bg-[#5E0F1D]"
          >
            Hemen Başvur
          </a>

        </div>
      </div>
    </header>
  );
}