export default function Administradores() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="border-b border-red-900">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <h1 className="text-5xl md:text-6xl font-black text-red-600 mb-6">
            Administradores
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl">
            Liderar pelo exemplo. Conectar pessoas.
            Fortalecer a cultura. Criar oportunidades.
          </p>

        </div>
      </section>

      {/* MISSÃO */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8 text-red-500">
          Missão do Administrador
        </h2>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <p className="text-lg text-gray-300 leading-8">
            O administrador representa o Projeto Algoritmo Urbano.
            Seu papel é acolher, orientar, organizar e fortalecer
            a comunidade, sempre com respeito, imparcialidade
            e profissionalismo.
          </p>
        </div>

      </section>

      {/* RESPONSABILIDADES */}
      <section className="bg-zinc-950 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-center">
            Responsabilidades
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h3 className="text-2xl mb-4">👋 Recepção</h3>
              <p className="text-gray-400">
                Receber novos membros, explicar os objetivos
                da comunidade e incentivar a participação.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h3 className="text-2xl mb-4">📂 Organização</h3>
              <p className="text-gray-400">
                Manter o ambiente organizado e focado nos
                objetivos da cultura urbana.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h3 className="text-2xl mb-4">🤝 Respeito</h3>
              <p className="text-gray-400">
                Tratar todos os participantes com igualdade,
                ética e equilíbrio.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h3 className="text-2xl mb-4">📢 Divulgação</h3>
              <p className="text-gray-400">
                Incentivar artistas, eventos, projetos,
                oportunidades e conteúdos educativos.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PARCERIAS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10 text-red-500">
          Construindo Pontes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Casas de Cultura",
            "Secretarias de Cultura",
            "Coletivos Culturais",
            "Produtores",
            "Instituições de Ensino",
            "Patrocinadores",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-xl p-5 text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* CONDUTA */}
      <section className="bg-zinc-950 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Nossa Conduta
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-green-950 border border-green-800 p-8 rounded-xl">
              <h3 className="text-2xl mb-4">
                ✅ O que esperamos
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>Ser educado e acessível</li>
                <li>Ouvir antes de decidir</li>
                <li>Agir com ética</li>
                <li>Ter transparência</li>
                <li>Representar a comunidade</li>
              </ul>
            </div>

            <div className="bg-red-950 border border-red-800 p-8 rounded-xl">
              <h3 className="text-2xl mb-4">
                ❌ Não permitido
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>Benefício próprio usando o cargo</li>
                <li>Desrespeito aos membros</li>
                <li>Notícias falsas</li>
                <li>Discriminação</li>
                <li>Abuso de autoridade</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* FILOSOFIA */}
      <section className="py-24 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-black mb-8 text-red-600">
            Nossa Filosofia
          </h2>

          <p className="text-2xl text-gray-300 leading-relaxed">
            Administrar não é ter poder.
            <br />
            É servir à comunidade.
            <br />
            É incentivar artistas.
            <br />
            É construir pontes.
            <br />
            É abrir portas.
          </p>

        </div>

      </section>

    </main>
  );
}