import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { MarketplaceHeader } from "@/components/organisms/marketplace-header";

describe("MarketplaceHeader", () => {
  it("should render branding and marketplace navigation", () => {
    render(<MarketplaceHeader />);

    expect(screen.getByRole("img", { name: /tempo justo/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tempo justo/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /marketplace/i })).toBeInTheDocument();
  });

  it("should not render removed navigation items", () => {
    render(<MarketplaceHeader />);

    expect(screen.queryByText(/the ledger/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/community/i)).not.toBeInTheDocument();
  });
});
