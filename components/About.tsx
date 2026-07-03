export default function About() {
  return (
    <section
      id="sobre"
      className="bg-black py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <span className="text-cyan-400 uppercase tracking-[0.3em]">
            Sobre o Projeto
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Tecnologia, Cultura e Transformação Social
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl text-lg">
            O Algoritimo Urbano conecta inovação tecnológica,
            inteligência artificial, arte e cultura urbana para
            promover desenvolvimento social, inclusão digital e
            oportunidades para novas gerações.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-cyan-400 text-xl font-bold mb-4">
              Inovação
            </h3>

            <p className="text-gray-300">
              Uso de IA e tecnologia para ampliar oportunidades
              educacionais e criativas.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-yellow-400 text-xl font-bold mb-4">
              Cultura
            </h3>

            <p className="text-gray-300">
              Valorização da identidade urbana através da arte,
              música e produção cultural.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-green-400 text-xl font-bold mb-4">
              Impacto Social
            </h3>

            <p className="text-gray-300">
              Formação, inclusão e fortalecimento das comunidades
              através do conhecimento.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}