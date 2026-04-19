import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LoginHeroPanel } from "@/components/organisms/login-hero-panel";

describe("LoginHeroPanel", () => {
  it("should render branding content and social justice quote", () => {
    render(<LoginHeroPanel />);

    expect(screen.getByRole("img", { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tempo justo/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /justiça social através da economia solidária\. onde o valor está no saber compartilhar\./i,
      ),
    ).toBeInTheDocument();
  });
});
