import { useFormContext } from "react-hook-form";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function EmailField() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <Field className="space-y-2">
      <FieldLabel htmlFor="email" className="text-sm text-brand-text">
        E-mail
      </FieldLabel>
      <Input
        type="email"
        id="email"
        {...register("email", {
          required: "E-mail é obrigatório",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "E-mail inválido",
          },
        })}
        className="h-12 rounded-none border-slate-200 bg-brand-ice/70 px-4 text-base shadow-sm placeholder:text-slate-400"
        placeholder="voce@exemplo.com"
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message as string}</p>
      )}
    </Field>
  );
}
