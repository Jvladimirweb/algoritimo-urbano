"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/administradores", label: "Administradores" },
    { href: "/parceiros", label: "Parceiros" },
    { href: "/comunidade", label: "Comunidade" },
    { href: "/documentos", label: "Documentos" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <>
      <header className="sticky top-0 z-[9999] bg-black/95 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Algoritmo Urbano"
              width={40}
              height={40}
              priority
            />

            <div className="hidden sm:block">
              <Image
                src="/nome-logo.png"
                alt="Algoritmo Urbano"
                width={180}
                height={40}
                priority
              />
            </div>

            <div className="hidden md:block">
              <Image
                src="/fita.png"
                alt="Algoritmo Urbano"
                width={40}
                height={40}
                priority
              />
            </div>
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-white">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-red-500 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-[9998]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Menu lateral */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-zinc-950 border-l border-zinc-800 z-[9999] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
          <span className="font-bold text-white">
            Algoritmo Urbano
          </span>

          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-white"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white font-medium hover:text-red-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}