import { Button } from "@/components/ui/button";

type FeaturedCommunityCardProps = {
  title: string;
  description: string;
  rewardLabel: string;
  participantsLabel: string;
};

export function FeaturedCommunityCard({
  title,
  description,
  rewardLabel,
  participantsLabel,
}: FeaturedCommunityCardProps) {
  return (
    <article className="flex h-full flex-col bg-[#8BB6FF] p-6 text-white shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-md space-y-3">
          <span className="inline-flex bg-[rgba(255,255,255,0.9)] px-3 py-1 text-[11px] font-semibold tracking-wide uppercase text-slate-900">
            Solidariedade
          </span>
          <h3 className="text-3xl leading-tight font-semibold text-slate-900">{title}</h3>
          <p className="line-clamp-3 text-sm text-[rgba(15,23,42,0.85)] sm:text-base">{description}</p>
        </div>

        <div className="hidden bg-[#78A8F7] px-6 py-5 text-center text-slate-900 lg:block">
          <p className="text-4xl font-bold text-slate-900">{rewardLabel}</p>
          <p className="text-xs tracking-wide uppercase text-[rgba(15,23,42,0.8)]">Horas recompensadas</p>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
        <p className="text-sm text-[rgba(15,23,42,0.8)]">{participantsLabel}</p>

        <Button
          className="h-12 rounded-none bg-white px-6 text-base font-semibold text-brand-primary shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
          variant="secondary"
        >
          Quero ajudar
        </Button>
      </div>
    </article>
  );
}
