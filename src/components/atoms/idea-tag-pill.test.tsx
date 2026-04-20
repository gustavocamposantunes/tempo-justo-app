import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IdeaTagPill } from "@/components/atoms/idea-tag-pill";

describe("IdeaTagPill", () => {
  it("should render tag label", () => {
    render(<IdeaTagPill tag="Educação" />);

    expect(screen.getByText(/educação/i)).toBeInTheDocument();
  });
});
