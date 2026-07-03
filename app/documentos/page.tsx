export default function Documentos() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-black text-red-600 mb-6">
          Base Institucional
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mb-12">
          Conheça em detalhes a estrutura, missão e funcionamento
          do Algoritmo Urbano.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* REGIMENTO */}
          <a
            href="/docs/regimento.pdf"
            target="_blank"
            className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-red-600 transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              📜 Regimento dos Administradores
            </h2>

            <p className="text-gray-400">
              Regras, responsabilidades e conduta dos administradores.
            </p>
          </a>

          {/* PROJETO */}
          <a
            href="/docs/projeto.pdf"
            target="_blank"
            className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-red-600 transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              🏙️ Projeto Algoritmo Urbano
            </h2>

            <p className="text-gray-400">
              Apresentação institucional completa do projeto.
            </p>
          </a>

          {/* O QUE É */}
          <a
            href="/docs/o-que-e.pdf"
            target="_blank"
            className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-red-600 transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              💡 O que é o Algoritmo Urbano?
            </h2>

            <p className="text-gray-400">
              Entenda o propósito, missão e visão do movimento.
            </p>
          </a>

        </div>

      </section>

    </main>
  );
}