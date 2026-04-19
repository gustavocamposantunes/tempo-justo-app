import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BrandingLogo } from "@/components/atoms/branding-logo";

describe("BrandingLogo", () => {
  it("should render the logo image", () => {
    render(<BrandingLogo />);

    const logo = screen.getByRole("img", { name: /logo/i });

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("logo.svg"));
  });
});
