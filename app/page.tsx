import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-brand-ice">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-secondary/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl" />

      <section className="relative mx-auto flex min-h-dvh w-full max-w-6xl items-start py-0 sm:px-6 sm:py-8 lg:items-center lg:px-8">
        <div className="w-full lg:grid lg:overflow-hidden lg:rounded-3xl lg:bg-white lg:shadow-2xl lg:shadow-slate-900/10 lg:ring-1 lg:ring-black/5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative w-full overflow-hidden bg-brand-primary text-white">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_45%),radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.15),transparent_40%)]" />

            <div className="relative flex h-full min-h-90 flex-col justify-between px-6 pt-10 pb-14 sm:px-8 lg:px-10">
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <div className="mb-5 inline-flex rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                  <Image src="/logo.svg" alt="Logo" width={78} height={78} className="drop-shadow-sm" />
                </div>

                <h1 className="font-heading text-4xl uppercase tracking-tight sm:text-5xl">
                  Tempo <strong className="text-brand-secondary">Justo</strong>
                </h1>
                <h6 className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-white">
                  banco de tempo online
                </h6>
              </div>

              <blockquote className="mt-10 self-start border-l-2 border-white/35 pl-4 text-left text-sm leading-6 text-white/90 sm:text-base">
                Justiça social através da economia solidária. Onde o valor está no saber compartilhar.
              </blockquote>
            </div>
          </div>

          <div className="relative z-10 -mt-8 mx-4 rounded-none bg-white px-6 py-8 shadow-2xl shadow-slate-900/10 ring-1 ring-black/5 sm:mx-6 sm:px-8 lg:mx-0 lg:mt-0 lg:rounded-none lg:px-10 lg:py-10 lg:shadow-none lg:ring-0">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-text">Acesse sua conta</h2>
              <p className="mt-1 text-sm text-slate-500">Conecte-se para continuar sua jornada de colaboração.</p>
            </div>

            <form className="space-y-5">
              <Field className="space-y-2">
                <FieldLabel htmlFor="email" className="text-sm text-brand-text">
                  E-mail
                </FieldLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="h-12 rounded-none border-slate-200 bg-brand-ice/70 px-4 text-base shadow-sm placeholder:text-slate-400"
                  placeholder="voce@exemplo.com"
                />
              </Field>

              <Field className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <FieldLabel htmlFor="password" className="text-sm text-brand-text">
                    Senha
                  </FieldLabel>
                  <Link href="/forgot-password" className="text-xs font-medium text-brand-primary transition-colors hover:text-brand-action hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  className="h-12 rounded-none border-slate-200 bg-brand-ice/70 px-4 text-base shadow-sm placeholder:text-slate-400"
                  placeholder="••••••••"
                />
              </Field>

              <Button type="submit" className="h-12 w-full rounded-none text-base font-semibold shadow-lg shadow-brand-action/20 transition-transform duration-200 hover:-translate-y-0.5">
                Entrar
                <ArrowRight className="size-4" />
              </Button>

              <p className="pt-1 text-center text-sm text-slate-600">
                Não tem conta?{" "}
                <Link href="/register" className="font-semibold text-brand-primary transition-colors hover:text-brand-action hover:underline">
                  Criar uma conta
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
