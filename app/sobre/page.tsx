export default function Sobre() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-black mb-10 text-red-600">
          Quem Somos
        </h1>

        <p className="text-lg text-gray-300 leading-8 mb-8">
          O Algoritmo Urbano é um projeto cultural independente
          criado para promover, fortalecer e difundir a cultura
          urbana brasileira por meio da música, arte, educação
          e inclusão social.
        </p>

        <p className="text-lg text-gray-300 leading-8 mb-12">
          Nosso objetivo é conectar artistas, produtores,
          coletivos, empresas e instituições para criar
          oportunidades reais de crescimento e colaboração.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-3 text-red-500">
              Missão
            </h2>

            <p>
              Fortalecer a cultura urbana através da
              colaboração, informação e oportunidades.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-3 text-red-500">
              Visão
            </h2>

            <p>
              Ser referência nacional na conexão entre
              talentos, projetos e iniciativas culturais.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-3 text-red-500">
              Valores
            </h2>

            <p>
              Respeito, colaboração, diversidade,
              ética e transformação social.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}