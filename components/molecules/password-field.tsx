import Link from "next/link";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function PasswordField() {
  return (
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
  );
}
