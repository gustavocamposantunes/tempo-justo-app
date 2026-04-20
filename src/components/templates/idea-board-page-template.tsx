import { GraduationCap, HandCoins, HeartPulse, Utensils, Wrench } from "lucide-react";

import { IdeaPostCard } from "@/components/organisms/idea-post-card";
import { IdeaSidebar } from "@/components/organisms/idea-sidebar";
import { MarketplaceHeader } from "@/components/organisms/marketplace-header";
import { VolunteerSwiperSection } from "@/components/organisms/volunteer-swiper-section";
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

const volunteerSlides = [
  {
    featured: {
      title: "Mutirão de reconstrução comunitária",
      description:
        "Participe do nosso projeto de revitalização da Praça das Flores. Buscamos voluntários para pintura e jardinagem.",
      rewardLabel: "5+",
      participantsLabel: "+12 pessoas inscritas",
    },
    volunteer: {
      title: ideaCards[3].title,
      description: ideaCards[3].description,
      tag: ideaCards[3].tag,
      author: ideaCards[3].author,
      timeLabel: ideaCards[3].timeLabel,
      colorClassName: ideaCards[3].colorClassName,
    },
  },
  {
    featured: {
      title: "Mutirão da praça do bairro",
      description:
        "Precisamos de voluntários para pequenos reparos, pintura e organização dos espaços de convivência.",
      rewardLabel: "4+",
      participantsLabel: "+9 pessoas inscritas",
    },
    volunteer: {
      title: "Apoio em manutenção",
      description: "Suporte com ferramentas e cuidados básicos em estruturas comunitárias.",
      tag: "Voluntariado",
      author: "Paulo Mendes",
      timeLabel: "2 horas",
      colorClassName: "bg-[linear-gradient(135deg,#C7D8F8_0%,#A8C2F2_50%,#7FA7E7_100%)]",
    },
  },
  {
    featured: {
      title: "Mutirão verde comunitário",
      description:
        "Ação para limpeza, plantio de mudas e fortalecimento da horta coletiva do bairro.",
      rewardLabel: "6+",
      participantsLabel: "+15 pessoas inscritas",
    },
    volunteer: {
      title: "Oficina de compostagem",
      description: "Aprenda práticas simples para reduzir resíduos e adubar hortas locais.",
      tag: "Sustentabilidade",
      author: "Marina Lopes",
      timeLabel: "1.5 hora",
      colorClassName: "bg-[linear-gradient(135deg,#A5D8A8_0%,#7BC47F_50%,#57A85D_100%)]",
    },
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

          <VolunteerSwiperSection slides={volunteerSlides} />
        </section>
      </div>
    </main>
  );
}
