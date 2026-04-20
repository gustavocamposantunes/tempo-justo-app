import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IdeaSidebar } from "@/components/organisms/idea-sidebar";

describe("IdeaSidebar", () => {
  it("should render heading, categories and call-to-action button", () => {
    render(
      <IdeaSidebar
        categories={[
          { label: "Educação", icon: <span>E</span> },
          { label: "Saúde e Bem-estar", icon: <span>S</span> },
          { label: "Reparos Domésticos", icon: <span>R</span> },
        ]}
      />,
    );

    expect(screen.getByRole("heading", { name: /mural de trocas/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /postar uma ideia/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /educação/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /saúde e bem-estar/i })).toBeInTheDocument();
  });
});
