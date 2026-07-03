export default function Contato() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-black text-red-600 mb-10">
          Contato
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-4 bg-zinc-900 rounded-xl"
          />

          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full p-4 bg-zinc-900 rounded-xl"
          />

          <textarea
            rows={6}
            placeholder="Sua mensagem"
            className="w-full p-4 bg-zinc-900 rounded-xl"
          />

          <button
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold"
          >
            Enviar
          </button>

        </form>

      </section>

    </main>
  );
}