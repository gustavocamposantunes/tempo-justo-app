import { BrandingBlock } from "@/components/molecules/branding-block";

export function LoginHeroPanel() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-primary text-white lg:min-h-dvh">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.15),transparent_40%)]" />

      <div className="relative flex h-full min-h-90 flex-col justify-between px-6 pt-10 pb-14 sm:px-8 lg:px-10">
        <BrandingBlock />

        <blockquote className="mt-10 self-start border-l-2 border-white/35 pl-4 text-left text-sm leading-6 text-white/90 sm:text-base">
          Justiça social através da economia solidária. Onde o valor está no saber compartilhar.
        </blockquote>
      </div>
    </div>
  );
}
