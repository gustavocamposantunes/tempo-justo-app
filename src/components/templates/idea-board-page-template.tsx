import { GraduationCap, HandCoins, HeartPulse, Utensils, Wrench } from "lucide-react";

import { FeaturedCommunityCard } from "@/components/organisms/featured-community-card";
import { IdeaPostCard } from "@/components/organisms/idea-post-card";
import { IdeaSidebar } from "@/components/organisms/idea-sidebar";
import { MarketplaceHeader } from "@/components/organisms/marketplace-header";
import { Button } from "@/components/ui/button";

const categories = [
  { label: "Educação", icon: <GraduationCap className="size-4" /> },
  { label: "Saúde e Bem-estar", icon: <HeartPulse className="size-4" /> },
  { label: "Reparos Domésticos", icon: <Wrench className="size-4" /> },
  { label: "Economia Solidária", icon: <HandCoins className="size-4" /> },
  { label: "Alimentos", icon: <Utensils className="size-4" /> },
];

const ideaCards = [
  {
    title: "Aulas de violão",
    description: "Aprenda do básico até técnicas de dedilhado e acompanhamento.",
    tag: "Educação",
    author: "Ricardo Silva",
    timeLabel: "2 horas",
    colorClassName:
      "bg-[linear-gradient(135deg,#C17A3C_0%,#7D4B28_45%,#3F2A1D_100%)]",
  },
  {
    title: "Consultoria em agroecologia",
    description: "Dicas práticas para transformar pequenos espaços em hortas produtivas.",
    tag: "Sustentabilidade",
    author: "Marina Lopes",
    timeLabel: "3 horas",
    colorClassName:
      "bg-[linear-gradient(135deg,#8BC34A_0%,#4CAF50_40%,#2F6A35_100%)]",
  },
  {
    title: "Pequenos reparos elétricos",
    description: "Instalação de luminárias, troca de tomadas e manutenção básica.",
    tag: "Reparos",
    author: "Carlos Eduardo",
    timeLabel: "1 hora",
    colorClassName:
      "bg-[linear-gradient(135deg,#D9DDE3_0%,#B8C1CC_50%,#8D99A8_100%)]",
  },
  {
    title: "Yoga para iniciantes",
    description: "Sessões guiadas de Hatha Yoga com foco em respiração e equilíbrio.",
    tag: "Bem-estar",
    author: "Ana Clara",
    timeLabel: "1.5 hora",
    colorClassName:
      "bg-[linear-gradient(135deg,#D6ECEA_0%,#B6D7D3_50%,#95BDB7_100%)]",
  },
];

export function IdeaBoardPageTemplate() {
  return (
    <main className="min-h-dvh bg-brand-ice pb-6">
      <MarketplaceHeader />

      <div className="mx-auto mt-5 w-full max-w-7xl space-y-5 px-4 sm:px-6 lg:px-8">
        <IdeaSidebar categories={categories} />

        <section className="space-y-5 rounded-none bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
          <header className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary">Descubra novas possibilidades</h2>
              <p className="mt-1 max-w-2xl text-sm text-slate-600">
                Conecte-se com a comunidade e use seus créditos de tempo para aprender, ajudar e viver
                melhor.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                className="h-12 rounded-none px-5 text-base font-semibold shadow-lg shadow-brand-action/20 transition-transform duration-200 hover:-translate-y-0.5"
                size="sm"
              >
                Mais recentes
              </Button>
              <Button className="h-12 rounded-none px-5 text-base font-semibold" size="sm" variant="outline">
                Populares
              </Button>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ideaCards.slice(0, 3).map((card) => (
              <IdeaPostCard
                author={card.author}
                colorClassName={card.colorClassName}
                description={card.description}
                key={card.title}
                tag={card.tag}
                timeLabel={card.timeLabel}
                title={card.title}
              />
            ))}
          </div>

          <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
            <FeaturedCommunityCard
              description="Participe do nosso projeto de revitalização da Praça das Flores. Buscamos voluntários para pintura e jardinagem."
              participantsLabel="+12 pessoas inscritas"
              rewardLabel="5+"
              title="Mutirão de reconstrução comunitária"
            />

            <IdeaPostCard
              author={ideaCards[3].author}
              colorClassName={ideaCards[3].colorClassName}
              description={ideaCards[3].description}
              showTimeIcon
              tag={ideaCards[3].tag}
              timeLabel={ideaCards[3].timeLabel}
              title={ideaCards[3].title}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
