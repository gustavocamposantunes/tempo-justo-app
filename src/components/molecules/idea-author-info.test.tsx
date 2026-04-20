import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IdeaAuthorInfo } from "@/components/molecules/idea-author-info";

describe("IdeaAuthorInfo", () => {
  it("should render author name and initials avatar", () => {
    render(<IdeaAuthorInfo author="Ricardo Silva" />);

    expect(screen.getByText(/ricardo silva/i)).toBeInTheDocument();
    expect(screen.getByText("RS")).toBeInTheDocument();
  });
});
