import { ArrowRight } from "lucide-react";

import { LoginFormHeading } from "@/components/atoms/login-form-heading";
import { EmailField } from "@/components/molecules/email-field";
import { PasswordField } from "@/components/molecules/password-field";
import { SignUpPrompt } from "@/components/molecules/sign-up-prompt";
import { Button } from "@/components/ui/button";

export function LoginFormCard() {
  return (
    <div className="relative z-10 -mt-8 mx-4 rounded-none bg-white px-6 py-8 shadow-2xl shadow-slate-900/10 ring-1 ring-black/5 sm:mx-6 sm:px-8 lg:mx-0 lg:mt-0 lg:flex lg:min-h-dvh lg:items-center lg:justify-center lg:px-10 lg:py-10 lg:shadow-none lg:ring-0">
      <div className="w-full max-w-md rounded-none lg:w-1/2 lg:max-w-none">
        <LoginFormHeading />

        <form className="space-y-5">
          <EmailField />
          <PasswordField />

          <Button type="submit" className="h-12 w-full rounded-none text-base font-semibold shadow-lg shadow-brand-action/20 transition-transform duration-200 hover:-translate-y-0.5">
            Entrar
            <ArrowRight className="size-4" />
          </Button>

          <SignUpPrompt />
        </form>
      </div>
    </div>
  );
}
