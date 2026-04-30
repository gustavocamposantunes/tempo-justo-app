import { useFormContext } from "react-hook-form";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { LoginFormData } from "@/lib/schemas/login";

export function EmailField() {
  const { register, formState: { errors } } = useFormContext<LoginFormData>();

  return (
    <Field className="space-y-2">
      <FieldLabel htmlFor="email" className="text-sm text-brand-text">
        E-mail
      </FieldLabel>
      <Input
        type="email"
        id="email"
        {...register("email")}
        className="h-12 rounded-none border-slate-200 bg-brand-ice/70 px-4 text-base shadow-sm placeholder:text-slate-400"
        placeholder="voce@exemplo.com"
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && (
        <p className="text-sm text-red-600">{errors.email.message}</p>
      )}
    </Field>
  );
}
