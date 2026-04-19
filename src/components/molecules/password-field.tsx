"use client"

import { useState } from "react"

import Link from "next/link"

import { Eye, EyeOff } from "lucide-react"
import { useFormContext } from "react-hook-form"


import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function PasswordField() {
  const [showPassword, setShowPassword] = useState(false)
  const { register, formState: { errors } } = useFormContext()

  return (
    <Field className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <FieldLabel htmlFor="password" className="text-sm text-brand-text">
          Senha
        </FieldLabel>
        <Link
          href="/forgot-password"
          className="text-xs font-medium text-brand-primary transition-colors hover:text-brand-action hover:underline"
        >
          Esqueceu a senha?
        </Link>
      </div>
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          {...register("password", {
            required: "Senha é obrigatória",
            minLength: {
              value: 6,
              message: "Senha deve ter no mínimo 6 caracteres",
            },
          })}
          autoComplete="current-password"
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
      {errors.password && (
        <p className="text-sm text-red-500">{errors.password.message as string}</p>
      )}
    </Field>
  )
}
