import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-brand-ice">
      <section className="flex flex-col h-screen items-center">
        <div className="w-full flex-1 flex flex-col items-center max-w-md p-6">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} className="mx-auto mb-4" />
          <h1 className="font-heading text-brand-primary uppercase">Tempo <strong className="text-brand-secondary">Justo</strong></h1>
          <h6 className="text-brand-primary uppercase">banco de tempo online</h6>
          <p className="text-center mt-4">Justiça social através da economia solidária. Onde seu tempo constrói um futuro compartilhado.</p>
        </div>
        <div className="w-full flex-5 max-w-md p-6">
        </div>
      </section>
    </div>
  );
}
