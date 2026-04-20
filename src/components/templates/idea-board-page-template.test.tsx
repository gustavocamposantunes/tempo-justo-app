import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IdeaBoardPageTemplate } from "@/components/templates/idea-board-page-template";

describe("IdeaBoardPageTemplate", () => {
  it("should render main marketplace heading and categories", () => {
    render(<IdeaBoardPageTemplate />);

    expect(screen.getByRole("heading", { name: /mural de trocas/i })).toBeInTheDocument();
    expect(screen.getByText(/descubra novas possibilidades/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /postar uma ideia/i })).toBeInTheDocument();
  });

  it("should render cards and highlight section", () => {
    render(<IdeaBoardPageTemplate />);

    expect(screen.getByText(/aulas de violão/i)).toBeInTheDocument();
    expect(screen.getByText(/consultoria em agroecologia/i)).toBeInTheDocument();
    expect(screen.getByText(/mutirão de reconstrução comunitária/i)).toBeInTheDocument();
  });
});
