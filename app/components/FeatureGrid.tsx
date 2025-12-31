import { ReactNode } from "react";

export type Feature = {
  title: string;
  description: string;
  accent: string;
  icon: ReactNode;
};

type FeatureGridProps = {
  features: Feature[];
};

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section id="fitur" className="pb-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.16em] text-teal-100">Kenapa PYx Convert</p>
          <h2 className="text-3xl font-semibold text-white">Sens konsisten, muscle memory terjaga.</h2>
          <p className="max-w-2xl text-base text-slate-200">
            Tidak perlu kalkulator manual. Kami hitung eDPI, FOV multiplier, yaw/pitch, dan jarak 360
            agar transisi antar game tetap terasa sama.
          </p>
        </div>
        <a
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/20"
          href="#presets"
        >
          Lihat semua profil game
        </a>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group relative rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-white/20 hover:shadow-xl"
          >
            <div className="relative flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                {feature.icon}
              </span>
              <p className="text-lg font-semibold text-white">{feature.title}</p>
            </div>
            <p className="relative mt-3 text-sm text-slate-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
