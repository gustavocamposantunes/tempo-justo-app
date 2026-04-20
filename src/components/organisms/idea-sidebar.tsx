import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

type SidebarCategory = {
  label: string;
  icon: ReactNode;
};

type IdeaSidebarProps = {
  categories: SidebarCategory[];
};

export function IdeaSidebar({ categories }: IdeaSidebarProps) {
  return (
    <section className="space-y-4 bg-white p-4 shadow-sm ring-1 ring-black/5 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-brand-primary">Mural de Trocas</h1>
          <p className="mt-1 text-sm text-slate-500">Troque habilidades por tempo</p>
        </div>

        <Button className="h-12 rounded-none px-5 text-base font-semibold shadow-lg shadow-brand-action/20 transition-transform duration-200 hover:-translate-y-0.5">
          Postar uma ideia
        </Button>
      </div>

      <nav className="overflow-x-auto">
        <ul className="flex min-w-max items-center gap-2">
          {categories.map((category, index) => {
            const isActive = index === 0;

            return (
              <li key={category.label}>
                <button
                  className={`flex items-center gap-2.5 whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-secondary/20 text-brand-primary"
                      : "text-slate-600 hover:bg-slate-100 hover:text-brand-primary"
                  }`}
                  type="button"
                >
                  <span className="size-4">{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
