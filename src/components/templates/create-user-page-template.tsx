import { CreateUserFormCard } from "@/components/organisms/create-user-form-card";
import { LoginHeroPanel } from "@/components/organisms/login-hero-panel";

export function CreateUserPageTemplate() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-brand-ice">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-secondary/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl" />

      <section className="relative flex min-h-dvh w-full items-start py-0 sm:px-6 sm:py-8 lg:items-stretch lg:px-0 lg:py-0">
        <div className="w-full lg:grid lg:min-h-dvh lg:grid-cols-2">
          <LoginHeroPanel />
          <CreateUserFormCard />
        </div>
      </section>
    </div>
  );
}
