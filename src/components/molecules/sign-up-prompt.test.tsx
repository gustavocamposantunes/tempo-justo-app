import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SignUpPrompt } from "@/components/molecules/sign-up-prompt";

describe("SignUpPrompt", () => {
  it("should render call to action and register link", () => {
    render(<SignUpPrompt />);

    expect(screen.getByText(/não tem conta\?/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /criar uma conta/i })).toHaveAttribute(
      "href",
      "/register",
    );
  });
});
