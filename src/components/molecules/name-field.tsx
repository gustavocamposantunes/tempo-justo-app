import { useFormContext } from "react-hook-form";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { CreateUserFormData } from "@/lib/schemas/create-user";

export function NameField() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateUserFormData>();

  return (
    <Field className="space-y-2">
      <FieldLabel htmlFor="name" className="text-sm text-brand-text">
        Nome
      </FieldLabel>
      <Input
        type="text"
        id="name"
        {...register("name")}
        className="h-12 rounded-none border-slate-200 bg-brand-ice/70 px-4 text-base shadow-sm placeholder:text-slate-400"
        placeholder="Seu nome"
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
    </Field>
  );
}
