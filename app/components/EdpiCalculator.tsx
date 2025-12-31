type CalculatorProps = {
  title: string;
  description: string;
  inputs: { label: string; value: string }[];
  results: { label: string; value: string; tone: "emerald" | "amber" | "teal" }[];
};

export default function EdpiCalculator({
  title,
  description,
  inputs,
  results,
}: CalculatorProps) {
  return (
    <section
      id="calculator"
      className="grid gap-6 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/30 scroll-mt-28 backdrop-blur-sm lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.16em] text-teal-100">eDPI Calculator</p>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-slate-200">{description}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {inputs.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-slate-900 p-4 text-sm text-slate-50"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
              <p className="mt-2 text-base font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3 rounded-xl border border-white/10 bg-slate-900 p-5">
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-white">Hasil</p>
          <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-100 ring-1 ring-emerald-200/30">
            Live calc
          </span>
        </div>
        <div className="grid gap-2 text-sm text-slate-200">
          {results.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg bg-slate-800 px-4 py-3 ring-1 ring-white/10"
            >
              <span>{item.label}</span>
              <span
                className={
                  item.tone === "emerald"
                    ? "text-emerald-300"
                    : item.tone === "amber"
                      ? "text-amber-300"
                      : "text-teal-200"
                }
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-300">
          eDPI = DPI x sensitivity. Jarak 360 dihitung dari yaw/pitch game dan resolusi/FOV jika
          diperlukan.
        </p>
      </div>
    </section>
  );
}
