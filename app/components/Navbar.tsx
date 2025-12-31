"use client";

import { useState } from "react";

export type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navItems?: NavItem[];
};

// Default set menu yang bisa dipakai lintas halaman
export const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Converter", href: "/convert" },
  { label: "eDPI Calculator", href: "/#calculator" },
];

// Versi khusus halaman convert
export const convertNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Converter", href: "#convert-form" },
  { label: "eDPI Calculator", href: "/#calculator" },
];

export default function Navbar({ navItems = defaultNavItems }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-3 py-3 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 via-emerald-300 to-amber-200 text-base font-semibold uppercase text-slate-950 shadow-lg shadow-teal-500/25">
              py
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">
                PYx Convert
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 text-sm text-slate-200 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="/convert"
              className="rounded-full bg-gradient-to-r from-teal-400 via-emerald-300 to-amber-200 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/30 transition hover:shadow-teal-400/40"
            >
              Mulai konversi
            </a>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-slate-100 transition hover:border-white/40 sm:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex flex-col gap-1">
              <span className="block h-0.5 w-6 rounded-full bg-white" />
              <span className="block h-0.5 w-6 rounded-full bg-white" />
              <span className="block h-0.5 w-6 rounded-full bg-white" />
            </div>
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900/90 p-4 text-sm text-slate-100 sm:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2">
              <a
                href="/convert"
                className="w-full rounded-full bg-gradient-to-r from-teal-400 via-emerald-300 to-amber-200 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/30 transition hover:shadow-teal-400/40"
              >
                Mulai konversi
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
