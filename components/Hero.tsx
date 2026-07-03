export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-black to-yellow-500/10" />

      <div className="relative z-10 text-center px-6">
        <span className="text-cyan-400 uppercase tracking-[0.3em]">
          Inovação • Cultura • Tecnologia
        </span>

        <h1 className="mt-6 text-7xl md:text-8xl font-bold text-white">
          ALGORITMO
          <br />
          URBANO
        </h1>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
          Explorando a interseção entre tecnologia, arte,
          inteligência artificial e a transformação da
          malha urbana.
        </p>

        <button className="mt-10 px-8 py-4 bg-yellow-500 text-black font-bold rounded-xl hover:scale-105 transition">
          Conheça o Projeto
        </button>
      </div>
    </section>
  );
}