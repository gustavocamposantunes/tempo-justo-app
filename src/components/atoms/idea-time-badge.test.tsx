import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IdeaTimeBadge } from "@/components/atoms/idea-time-badge";

describe("IdeaTimeBadge", () => {
  it("should render time label", () => {
    render(<IdeaTimeBadge label="2 horas" />);

    expect(screen.getByText(/2 horas/i)).toBeInTheDocument();
  });

  it("should render clock icon when showIcon is true", () => {
    const { container } = render(<IdeaTimeBadge label="1.5 hora" showIcon />);

    expect(screen.getByText(/1.5 hora/i)).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
