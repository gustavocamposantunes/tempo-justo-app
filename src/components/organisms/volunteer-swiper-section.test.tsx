import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { VolunteerSwiperSection } from "@/components/organisms/volunteer-swiper-section";

describe("VolunteerSwiperSection", () => {
  it("should render mutirão heading and first slide content", () => {
    render(
      <VolunteerSwiperSection
        slides={[
          {
            featured: {
              title: "Mutirão de reconstrução comunitária",
              description: "Participe da revitalização da praça local.",
              rewardLabel: "5+",
              participantsLabel: "+12 pessoas inscritas",
            },
            volunteer: {
              title: "Yoga para iniciantes",
              description: "Sessões guiadas para a comunidade.",
              tag: "Bem-estar",
              author: "Ana Clara",
              timeLabel: "1.5 hora",
              colorClassName: "bg-slate-200",
            },
          },
        ]}
      />,
    );

    expect(screen.getByRole("heading", { name: /mutirão e voluntariado/i })).toBeInTheDocument();
    expect(screen.getByText(/mutirão de reconstrução comunitária/i)).toBeInTheDocument();
    expect(screen.getByText(/yoga para iniciantes/i)).toBeInTheDocument();
  });
});
