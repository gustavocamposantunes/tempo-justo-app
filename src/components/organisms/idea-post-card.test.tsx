import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IdeaPostCard } from "@/components/organisms/idea-post-card";

describe("IdeaPostCard", () => {
  it("should render title, description, author and add action", () => {
    render(
      <IdeaPostCard
        author="Ricardo Silva"
        colorClassName="bg-slate-200"
        description="Aprenda do básico até técnicas de dedilhado e acompanhamento."
        tag="Educação"
        timeLabel="2 horas"
        title="Aulas de violão"
      />,
    );

    expect(screen.getByText(/aulas de violão/i)).toBeInTheDocument();
    expect(screen.getByText(/aprenda do básico/i)).toBeInTheDocument();
    expect(screen.getByText(/ricardo silva/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /agregar aulas de violão/i })).toBeInTheDocument();
  });
});
