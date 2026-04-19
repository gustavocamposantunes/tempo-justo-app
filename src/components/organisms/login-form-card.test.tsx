import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { LoginFormCard } from "@/components/organisms/login-form-card";

const setCookieMock = vi.fn();
const resetMock = vi.fn();
const mutateMock = vi.fn();

const useLoginMock = vi.fn();

vi.mock("react-cookie", () => ({
  useCookies: () => [{}, setCookieMock] as const,
}));

vi.mock("@/hooks/useLogin", () => ({
  useLogin: () => useLoginMock(),
}));

describe("LoginFormCard", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    useLoginMock.mockReturnValue({
      reset: resetMock,
      mutate: mutateMock,
      isPending: false,
      error: null,
    });
  });

  it("should render login form fields and submit button", () => {
    render(<LoginFormCard />);

    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/^senha$/i, { selector: "input" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  it("should show required validation messages when submitting empty form", async () => {
    render(<LoginFormCard />);

    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

    expect(await screen.findByText(/e-mail é obrigatório/i)).toBeInTheDocument();
    expect(await screen.findByText(/senha é obrigatória/i)).toBeInTheDocument();
    expect(mutateMock).not.toHaveBeenCalled();
  });

  it("should call login mutation and persist cookies on successful submit", async () => {
    mutateMock.mockImplementation((_data, options) => {
      options.onSuccess({
        token: "token-123",
        user: {
          id: "1",
          email: "john@doe.com",
          name: "John",
        },
      });
    });

    render(<LoginFormCard />);

    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: "john@doe.com" },
    });
    fireEvent.change(screen.getByLabelText(/^senha$/i, { selector: "input" }), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

    await waitFor(() => {
      expect(resetMock).toHaveBeenCalledTimes(1);
      expect(mutateMock).toHaveBeenCalledWith(
        {
          email: "john@doe.com",
          password: "123456",
        },
        expect.objectContaining({
          onSuccess: expect.any(Function),
        }),
      );
    });

    expect(setCookieMock).toHaveBeenCalledWith("tempo-justo-token", "token-123", {
      path: "/",
    });
    expect(setCookieMock).toHaveBeenCalledWith(
      "tempo-justo-user",
      JSON.stringify({
        id: "1",
        email: "john@doe.com",
        name: "John",
      }),
      { path: "/" },
    );
  });

  it("should render mutation error message", () => {
    useLoginMock.mockReturnValue({
      reset: resetMock,
      mutate: mutateMock,
      isPending: false,
      error: new Error("Credenciais inválidas"),
    });

    render(<LoginFormCard />);

    expect(screen.getByText(/credenciais inválidas/i)).toBeInTheDocument();
  });
});
