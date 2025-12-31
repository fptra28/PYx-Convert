export type Step = {
  title: string;
  detail: string;
};

export type Preset = {
  name: string;
  detail: string;
  badge: string;
};

type WorkflowSectionProps = {
  steps: Step[];
  presets: Preset[];
};

export default function WorkflowSection({ steps, presets }: WorkflowSectionProps) {
  return (
    <section
      id="workflow"
      className="grid gap-8 rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-8 shadow-lg shadow-black/30 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
    >
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-teal-100">
          Workflow
          <span className="h-px w-12 bg-white/30" />
        </div>
        <h3 className="text-2xl font-semibold text-white">Alur konversi yang bisa disimpan.</h3>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-xl border border-white/10 bg-slate-900 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-semibold text-teal-100 ring-1 ring-white/15">
                0{index + 1}
              </div>
              <div>
                <p className="text-base font-semibold text-white">{step.title}</p>
                <p className="text-sm text-slate-300">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-slate-300">
          <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Hipfire & ADS</span>
          <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">FOV scaling</span>
          <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Simpan preset</span>
        </div>
      </div>

      <div className="space-y-4" id="presets">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-white">Profil favorit</p>
          <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-100 ring-1 ring-teal-200/30">
            Dapat diatur
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {presets.map((preset) => (
            <div
              key={preset.name}
              className="rounded-xl border border-white/10 bg-slate-900 p-4 shadow-[0_1px_0_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-base font-semibold text-white">{preset.name}</p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-100 ring-1 ring-white/15">
                  {preset.badge}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{preset.detail}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-dashed border-white/30 bg-slate-900 p-4 text-sm text-slate-300">
          Butuh profil custom? Simpan sens per mode, FOV unik, atau matikan ADS multiplier untuk game tertentu.
        </div>
      </div>
    </section>
  );
}
