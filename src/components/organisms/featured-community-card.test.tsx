import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FeaturedCommunityCard } from "@/components/organisms/featured-community-card";

describe("FeaturedCommunityCard", () => {
  it("should render highlighted campaign content", () => {
    render(
      <FeaturedCommunityCard
        description="Participe da revitalização da Praça das Flores."
        participantsLabel="+12 pessoas inscritas"
        rewardLabel="5+"
        title="Mutirão de reconstrução comunitária"
      />,
    );

    expect(screen.getByText(/mutirão de reconstrução comunitária/i)).toBeInTheDocument();
    expect(screen.getByText(/participe da revitalização/i)).toBeInTheDocument();
    expect(screen.getByText(/\+12 pessoas inscritas/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /quero ajudar/i })).toBeInTheDocument();
  });
});
