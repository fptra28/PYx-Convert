type ConverterMetric = {
  label: string;
  value: string;
  tone: "emerald" | "amber" | "teal";
};

type ConverterProps = {
  inputSummary: string;
  inputDetail: string;
  sourceGame: string;
  sourceDetail: string;
  targetGame: string;
  targetDetail: string;
  accuracy: string;
  preview: ConverterMetric[];
};

type HeroProps = {
  highlights: string[];
  converter: ConverterProps;
};

function ConverterCard({
  inputSummary,
  inputDetail,
  sourceGame,
  sourceDetail,
  targetGame,
  targetDetail,
  accuracy,
  preview,
}: ConverterProps) {
  const toneStyles: Record<ConverterMetric["tone"], string> = {
    emerald:
      "from-emerald-400/25 via-emerald-400/10 to-emerald-400/0 text-emerald-200 ring-emerald-400/40",
    amber: "from-amber-300/25 via-amber-300/10 to-amber-300/0 text-amber-200 ring-amber-300/40",
    teal: "from-teal-300/25 via-teal-300/10 to-teal-300/0 text-teal-200 ring-teal-300/40",
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900/60 ring-1 ring-white/10 shadow-2xl shadow-emerald-900/40">
      <div className="absolute inset-0">
        <img src="/hero.png" alt="Converter preview" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/70" />
      </div>

      <div className="relative space-y-6 p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-teal-100/80">Input summary</p>
            <p className="text-lg font-semibold text-white">{inputSummary}</p>
            <p className="text-sm text-slate-300">{inputDetail}</p>
          </div>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200 ring-1 ring-emerald-400/40">
            {accuracy} akurat
          </span>
        </div>

        <div className="grid gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 lg:grid-cols-2">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Game asal</p>
            <p className="text-base font-semibold text-white">{sourceGame}</p>
            <p className="text-sm text-slate-300">{sourceDetail}</p>
          </div>
          <div className="space-y-1 rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Game tujuan</p>
            <p className="text-base font-semibold text-white">{targetGame}</p>
            <p className="text-sm text-slate-300">{targetDetail}</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {preview.map((item) => (
            <div
              key={item.label}
              className={`overflow-hidden rounded-lg bg-white/5 p-3 ring-1 ring-white/10`}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-300">{item.label}</p>
                <span
                  className={`inline-flex h-2 w-2 rounded-full bg-gradient-to-br ${toneStyles[item.tone]}`}
                  aria-hidden
                />
              </div>
              <p className={`mt-2 text-xl font-semibold ${toneStyles[item.tone].split(" ")[3]}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-dashed border-white/20 bg-white/5 px-3 py-2 text-sm text-slate-200">
          Preview otomatis memperkirakan yaw/pitch, jarak 360, dan multiplier ADS agar transisi
          antar-game mulus.
        </div>
      </div>
    </div>
  );
}

export default function Hero({ highlights, converter }: HeroProps) {
  return (
    <section id="hero" className="grid gap-10 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-100 ring-1 ring-white/10">
          Sensitivity ready
        </span>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Konversi sensitivitas lintas game FPS tanpa kehilangan feel aim.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Masukkan sens, DPI, dan FOV asal, pilih game tujuan, lalu dapatkan eDPI, jarak 360, dan
            ADS multiplier yang setara. Simpan preset untuk scrim, ranked, atau latihan aim.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-200">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/15"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <ConverterCard {...converter} />
    </section>
  );
}
