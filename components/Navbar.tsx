export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4">
          
          <div>
            <h2 className="text-white font-bold text-xl tracking-wider">
              ALGORITIMO URBANO
            </h2>
          </div>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <a href="#sobre" className="text-gray-300 hover:text-cyan-400 transition">
              Sobre
            </a>

            <a href="#impacto" className="text-gray-300 hover:text-cyan-400 transition">
              Impacto
            </a>

            <a href="#metodologia" className="text-gray-300 hover:text-cyan-400 transition">
              Metodologia
            </a>

            <a href="#contato" className="text-gray-300 hover:text-cyan-400 transition">
              Contato
            </a>
          </div>

          <button className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
            Participar
          </button>
        </div>
      </nav>
    </header>
  );
}