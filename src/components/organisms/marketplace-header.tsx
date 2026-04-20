import Link from "next/link";
import Image from "next/image";

import { Bell, CircleUserRound, Search } from "lucide-react";

export function MarketplaceHeader() {
  return (
    <header className="w-full bg-brand-primary text-white shadow-md shadow-slate-900/10">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex bg-white/15 p-1.5 backdrop-blur-sm">
              <Image src="/logo.svg" alt="Tempo Justo" width={34} height={34} />
            </span>
            <div className="leading-tight">
              <h1 className="font-heading text-xl font-bold uppercase tracking-tight sm:text-2xl">
                Tempo <strong className="text-brand-secondary">Justo</strong>
              </h1>
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/80">
                banco de tempo online
              </p>
            </div>
          </Link>

          <nav>
            <ul className="flex items-center gap-4 text-sm font-semibold">
              <li>
                <Link href="/" className="border-b-2 border-brand-secondary pb-1 text-white">
                  Marketplace
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 bg-white/15 px-3 py-2 text-white/85 sm:flex">
            <Search className="size-4" />
            <span className="text-sm">Buscar ofertas...</span>
          </div>

          <button
            className="inline-flex size-9 items-center justify-center text-white/85 transition-colors hover:bg-white/15 hover:text-white"
            type="button"
          >
            <Bell className="size-4" />
          </button>
          <button
            className="inline-flex size-9 items-center justify-center text-white/85 transition-colors hover:bg-white/15 hover:text-white"
            type="button"
          >
            <CircleUserRound className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
