"use client";

import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { CreateUserFormData } from "@/lib/schemas/create-user";

export function CreateUserPasswordField() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateUserFormData>();

  return (
    <Field className="space-y-2">
      <FieldLabel htmlFor="password" className="text-sm text-brand-text">
        Senha
      </FieldLabel>

      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          {...register("password")}
          autoComplete="new-password"
          className="h-12 rounded-none border-slate-200 bg-brand-ice/70 px-4 pr-12 text-base shadow-sm placeholder:text-slate-400"
          placeholder="••••••••"
          aria-invalid={errors.password ? "true" : "false"}
        />

        <button
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          aria-pressed={showPassword}
          className="absolute inset-y-0 right-0 flex h-12 w-12 items-center justify-center text-slate-500 transition-colors hover:cursor-pointer hover:text-brand-primary focus-visible:outline-none focus-visible:text-brand-primary"
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>

      {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
    </Field>
  );
}
