import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BrandingWordmark } from "@/components/atoms/branding-wordmark";

describe("BrandingWordmark", () => {
  it("should render project name and subtitle", () => {
    render(<BrandingWordmark />);

    expect(screen.getByRole("heading", { name: /tempo justo/i })).toBeInTheDocument();
    expect(screen.getByText(/banco de tempo online/i)).toBeInTheDocument();
  });
});
