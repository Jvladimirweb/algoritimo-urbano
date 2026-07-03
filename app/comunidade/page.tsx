export default function Comunidade() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-black text-red-600 mb-6">
          Comunidade
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl">
          Um espaço para conectar artistas,
          produtores, coletivos e agentes da
          cultura urbana brasileira.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              Cadastro de Artistas
            </h2>

            <p className="text-gray-400">
              Faça parte da rede colaborativa.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              Oportunidades
            </h2>

            <p className="text-gray-400">
              Eventos, editais e parcerias.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}