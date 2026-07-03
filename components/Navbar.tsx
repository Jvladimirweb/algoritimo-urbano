import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="font-black text-xl tracking-widest"
        >
          <span className="text-white">ALGORITMO</span>
          <span className="text-red-600"> URBANO</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/administradores">Administradores</Link>
          <Link href="/parceiros">Parceiros</Link>
          <Link href="/contato">Contato</Link>
        </nav>

      </div>
    </header>
  );
}