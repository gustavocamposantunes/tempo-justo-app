import { VolunteerSwiperSection } from "@/components/organisms/volunteer-swiper-section";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Organisms/VolunteerSwiperSection",
  component: VolunteerSwiperSection,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    slides: [
      {
        featured: {
          title: "Mutirão de reconstrução comunitária",
          description:
            "Participe do nosso projeto de revitalização da Praça das Flores. Buscamos voluntários para pintura e jardinagem.",
          rewardLabel: "5+",
          participantsLabel: "+12 pessoas inscritas",
        },
        volunteer: {
          title: "Yoga para iniciantes",
          description: "Sessões guiadas de Hatha Yoga com foco em respiração e equilíbrio.",
          tag: "Bem-estar",
          author: "Ana Clara",
          timeLabel: "1.5 hora",
          colorClassName: "bg-[linear-gradient(135deg,#D6ECEA_0%,#B6D7D3_50%,#95BDB7_100%)]",
        },
      },
      {
        featured: {
          title: "Reforma da horta comunitária",
          description: "Ajude na montagem de canteiros e irrigação para ampliar a produção local.",
          rewardLabel: "4+",
          participantsLabel: "+8 pessoas inscritas",
        },
        volunteer: {
          title: "Apoio em logística",
          description: "Organização de materiais e suporte na distribuição para voluntários.",
          tag: "Solidariedade",
          author: "Paulo Mendes",
          timeLabel: "2 horas",
          colorClassName: "bg-[linear-gradient(135deg,#B7D2FF_0%,#8CB8FF_55%,#5E93E8_100%)]",
        },
      },
    ],
  },
} satisfies Meta<typeof VolunteerSwiperSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
