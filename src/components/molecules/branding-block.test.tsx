import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BrandingBlock } from "@/components/molecules/branding-block";

describe("BrandingBlock", () => {
  it("should render logo and wordmark", () => {
    render(<BrandingBlock />);

    expect(screen.getByRole("img", { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tempo justo/i })).toBeInTheDocument();
    expect(screen.getByText(/banco de tempo online/i)).toBeInTheDocument();
  });
});
