import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { CreateUserFormCard } from "@/components/organisms/create-user-form-card";

const resetMock = vi.fn();
const mutateMock = vi.fn();
const pushMock = vi.fn();

const useRegisterUserMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

vi.mock("@/hooks/useRegisterUser", () => ({
  useRegisterUser: () => useRegisterUserMock(),
}));

describe("CreateUserFormCard", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    useRegisterUserMock.mockReturnValue({
      reset: resetMock,
      mutate: mutateMock,
      isPending: false,
      error: null,
    });
  });

  it("should render fields and submit action", () => {
    render(<CreateUserFormCard />);

    expect(screen.getByRole("heading", { name: /crie sua conta/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^senha$/i, { selector: "input" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /criar conta/i })).toBeInTheDocument();
  });

  it("should show validation messages on empty submit", async () => {
    render(<CreateUserFormCard />);

    fireEvent.click(screen.getByRole("button", { name: /criar conta/i }));

    expect(await screen.findByText(/nome é obrigatório/i)).toBeInTheDocument();
    expect(await screen.findByText(/e-mail é obrigatório/i)).toBeInTheDocument();
    expect(await screen.findByText(/senha é obrigatória/i)).toBeInTheDocument();
  });

  it("should call register mutation and redirect on successful submit", async () => {
    mutateMock.mockImplementation((_data, options) => {
      options.onSuccess({
        id: "1",
        name: "John Doe",
        email: "john@doe.com",
      });
    });

    render(<CreateUserFormCard />);

    fireEvent.change(screen.getByLabelText(/nome/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "john@doe.com" },
    });
    fireEvent.change(screen.getByLabelText(/^senha$/i, { selector: "input" }), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /criar conta/i }));

    await waitFor(() => {
      expect(resetMock).toHaveBeenCalledTimes(1);
      expect(mutateMock).toHaveBeenCalledWith(
        {
          name: "John Doe",
          email: "john@doe.com",
          password: "123456",
        },
        expect.objectContaining({
          onSuccess: expect.any(Function),
        })
      );
    });

    expect(pushMock).toHaveBeenCalledWith("/login");
  });

  it("should render mutation error message", () => {
    useRegisterUserMock.mockReturnValue({
      reset: resetMock,
      mutate: mutateMock,
      isPending: false,
      error: new Error("E-mail já cadastrado"),
    });

    render(<CreateUserFormCard />);

    expect(screen.getByText(/e-mail já cadastrado/i)).toBeInTheDocument();
  });

  it("should render login redirect link", () => {
    render(<CreateUserFormCard />);

    expect(screen.getByRole("link", { name: /entrar/i })).toHaveAttribute("href", "/login");
  });
});
