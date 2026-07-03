import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 border-b border-red-900">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest">
          ALGORITMO
          <span className="block text-red-600">URBANO</span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          Programado pelo asfalto.
          <br />
          Forjado pela realidade.
        </p>

        <p className="max-w-3xl mt-8 text-gray-400 text-lg">
          Uma rede colaborativa criada para conectar artistas,
          produtores, estúdios, empresas, coletivos e agentes
          da cultura urbana brasileira.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            href="#projeto"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold transition"
          >
            Conheça o Projeto
          </Link>

          <Link
            href="#comunidade"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-bold transition"
          >
            Entrar na Comunidade
          </Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6">
            O Movimento
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            O Algoritmo Urbano nasce da necessidade de criar
            conexões reais entre pessoas, projetos e oportunidades.
            Somos uma infraestrutura cultural construída
            coletivamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              🎤 Artistas
            </h3>

            <p className="text-gray-400">
              MCs, DJs, beatmakers, grafiteiros,
              dançarinos, fotógrafos e criadores.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              🎬 Produtores
            </h3>

            <p className="text-gray-400">
              Pessoas que organizam eventos,
              projetos e iniciativas culturais.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              🏙️ Coletivos
            </h3>

            <p className="text-gray-400">
              Organizações independentes que
              fortalecem seus territórios.
            </p>
          </div>

        </div>

      </section>
      <section className="bg-zinc-950 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-black text-red-600">
                50+
              </h3>
              <p className="text-gray-400 mt-2">
                Artistas Conectados
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-red-600">
                10+
              </h3>
              <p className="text-gray-400 mt-2">
                Projetos Ativos
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-red-600">
                5+
              </h3>
              <p className="text-gray-400 mt-2">
                Cidades Participantes
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* O QUE É */}
      <section
        id="projeto"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-8 text-red-500">
          O que é o Algoritmo Urbano?
        </h2>

        <p className="text-lg text-gray-300 leading-8">
          O Algoritmo Urbano nasceu da ideia de que a cultura cresce
          quando as pessoas se conectam. Somos uma comunidade criada
          para unir artistas, produtores, eventos, empresas,
          instituições e todos que acreditam no poder transformador
          da cultura urbana.
        </p>
      </section>

      {/* MISSÃO */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Nossa Missão
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-black border border-red-900 p-6 rounded-xl">
              <h3 className="text-2xl mb-3">🎤 Música</h3>
              <p className="text-gray-400">
                Incentivar a produção musical independente.
              </p>
            </div>

            <div className="bg-black border border-red-900 p-6 rounded-xl">
              <h3 className="text-2xl mb-3">🎨 Arte Urbana</h3>
              <p className="text-gray-400">
                Valorizar manifestações culturais e novos talentos.
              </p>
            </div>

            <div className="bg-black border border-red-900 p-6 rounded-xl">
              <h3 className="text-2xl mb-3">🤝 Conexões</h3>
              <p className="text-gray-400">
                Aproximar artistas, produtores e oportunidades.
              </p>
            </div>

            <div className="bg-black border border-red-900 p-6 rounded-xl">
              <h3 className="text-2xl mb-3">🚀 Crescimento</h3>
              <p className="text-gray-400">
                Fortalecer a economia criativa e a cultura urbana.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* COMUNIDADE */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Quem faz parte?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "MCs",
            "Rappers",
            "Beatmakers",
            "DJs",
            "Produtores",
            "Fotógrafos",
            "Videomakers",
            "Grafiteiros",
            "Dançarinos",
            "Coletivos",
            "Estúdios",
            "Empresas",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center"
            >
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Como Funciona
          </h2>

          <div className="grid md:grid-cols-5 gap-8 text-center">

            <div>
              <div className="text-5xl text-red-500 font-bold">1</div>
              <p className="mt-3">Entre na comunidade</p>
            </div>

            <div>
              <div className="text-5xl text-red-500 font-bold">2</div>
              <p className="mt-3">Faça conexões</p>
            </div>

            <div>
              <div className="text-5xl text-red-500 font-bold">3</div>
              <p className="mt-3">Divulgue seu trabalho</p>
            </div>

            <div>
              <div className="text-5xl text-red-500 font-bold">4</div>
              <p className="mt-3">Crie parcerias</p>
            </div>

            <div>
              <div className="text-5xl text-red-500 font-bold">5</div>
              <p className="mt-3">Gere oportunidades</p>
            </div>

          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nossos Valores
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "Respeito",
            "Colaboração",
            "Diversidade",
            "Transparência",
            "Profissionalismo",
            "Comunidade",
          ].map((valor) => (
            <span
              key={valor}
              className="px-6 py-3 bg-red-600 rounded-full font-semibold"
            >
              {valor}
            </span>
          ))}

        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="comunidade"
        className="bg-red-600 text-center py-24 px-6"
      >
        <h2 className="text-5xl font-extrabold mb-6">
          Não seguimos tendências.
          <br />
          Criamos conexões.
        </h2>

        <p className="text-xl mb-10">
          Conectando talentos. Fortalecendo a cultura.
          Transformando oportunidades.
        </p>

        <button className="bg-black hover:bg-zinc-900 px-10 py-5 rounded-xl font-bold text-lg transition">
          Entrar para a Comunidade
        </button>
      </section>

    </main>
  );
}