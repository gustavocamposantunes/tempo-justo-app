import Link from "next/link";

export function SignUpPrompt() {
  return (
    <p className="pt-1 text-center text-sm text-slate-600">
      Não tem conta?{" "}
      <Link href="/register" className="font-semibold text-brand-primary transition-colors hover:text-brand-action hover:underline">
        Criar uma conta
      </Link>
    </p>
  );
}
