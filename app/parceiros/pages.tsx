export default function Parceiros() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-black text-red-600 mb-6">
          Parceiros
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl">
          O Algoritmo Urbano acredita que a cultura cresce
          através da colaboração entre artistas, empresas,
          instituições e comunidade.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Casas de Cultura",
            "Secretarias de Cultura",
            "Empresas",
            "Coletivos",
            "Instituições de Ensino",
            "Patrocinadores",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 p-8 rounded-xl border border-zinc-800"
            >
              <h2 className="text-xl font-bold mb-3">
                {item}
              </h2>

              <p className="text-gray-400">
                Espaço reservado para futuros parceiros
                institucionais do projeto.
              </p>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}