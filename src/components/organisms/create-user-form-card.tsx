"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import { CreateUserFormHeading } from "@/components/atoms/create-user-form-heading";
import { CreateUserEmailField } from "@/components/molecules/create-user-email-field";
import { CreateUserPasswordField } from "@/components/molecules/create-user-password-field";
import { NameField } from "@/components/molecules/name-field";
import { Button } from "@/components/ui/button";
import { useRegisterUser } from "@/hooks/useRegisterUser";
import { createUserSchema, type CreateUserFormData } from "@/lib/schemas/create-user";

export function CreateUserFormCard() {
  const router = useRouter();

  const methods = useForm<CreateUserFormData>({
    mode: "onBlur",
    resolver: zodResolver(createUserSchema as never),
  });

  const registerUserMutation = useRegisterUser();

  const onSubmit: SubmitHandler<CreateUserFormData> = (data) => {
    registerUserMutation.reset();

    registerUserMutation.mutate(data, {
      onSuccess: () => {
        methods.reset();
        router.push("/login");
      },
    });
  };

  const isSubmitting = methods.formState.isSubmitting || registerUserMutation.isPending;

  return (
    <div className="relative z-10 -mt-8 mx-4 rounded-none bg-white px-6 py-8 shadow-2xl shadow-slate-900/10 ring-1 ring-black/5 sm:mx-6 sm:px-8 lg:mx-0 lg:mt-0 lg:flex lg:min-h-dvh lg:items-center lg:justify-center lg:px-10 lg:py-10 lg:shadow-none lg:ring-0">
      <div className="w-full max-w-md rounded-none lg:w-1/2 lg:max-w-none">
        <CreateUserFormHeading />

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
            <NameField />
            <CreateUserEmailField />
            <CreateUserPasswordField />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full rounded-none text-base font-semibold shadow-lg shadow-brand-action/20 transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Criando conta..." : "Criar conta"}
              <ArrowRight className="size-4" />
            </Button>

            {registerUserMutation.error && (
              <p className="text-sm text-red-500">{registerUserMutation.error.message}</p>
            )}

            <p className="pt-1 text-center text-sm text-slate-600">
              Já tem conta?{" "}
              <Link
                href="/login"
                className="font-semibold text-brand-primary transition-colors hover:text-brand-action hover:underline"
              >
                Entrar
              </Link>
            </p>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
