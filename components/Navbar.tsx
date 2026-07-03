import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[9999] bg-black/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Logo Algoritmo Urbano"
            width={40}
            height={40}
            priority
          />
          <Image
            src="/nome-logo.png"
            alt="Logo Algoritmo Urbano"
            width={200}
            height={40}
            priority
          />
          <Image
            src="/fita.png"
            alt="Logo Algoritmo Urbano"
            width={40}
            height={40}
            priority
          />

        </Link>

        <nav className="flex gap-8 text-sm font-semibold text-white">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/administradores">Administradores</Link>
          <Link href="/parceiros">Parceiros</Link>
          <Link href="/comunidade">Comunidade</Link>
          <Link href="/contato">Contato</Link>
        </nav>

      </div>
    </header>
  );
}