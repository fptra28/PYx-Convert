export default function AppFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 text-sm text-slate-300 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 via-emerald-300 to-amber-200 text-sm font-semibold uppercase text-slate-950 shadow-lg shadow-emerald-400/30">
              py
            </div>
            <div>
              <p className="text-base font-semibold text-white">PYx Convert</p>
              <p className="text-xs text-slate-400">Konversi sensitivitas lintas game dengan fokus pada akurasi dan konsistensi.</p>
            </div>
          </div>
          <p className="text-slate-400">
            Simpan preset, samakan eDPI, dan pastikan jarak 360 tetap konsisten saat pindah antar game FPS.
          </p>
          <div className="flex flex-wrap gap-2">
            <a className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 transition hover:bg-white/15" href="#workflow">
              Workflow
            </a>
            <a className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 transition hover:bg-white/15" href="#converter">
              Converter
            </a>
            <a className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 transition hover:bg-white/15" href="#calculator">
              eDPI Calculator
            </a>
          </div>
        </div>

        <div className="grid gap-4 text-slate-300 sm:grid-cols-3 sm:gap-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Navigasi</p>
            <div className="flex flex-col gap-2">
              <a className="hover:text-white" href="#fitur">Fitur</a>
              <a className="hover:text-white" href="#presets">Presets</a>
              <a className="hover:text-white" href="#workflow">Workflow</a>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Status</p>
            <div className="flex flex-col gap-2">
              <a className="hover:text-white" href="#">Roadmap</a>
              <a className="hover:text-white" href="#">Status</a>
              <a className="hover:text-white" href="#">Changelog</a>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Kontak</p>
            <div className="flex flex-col gap-2">
              <a className="hover:text-white" href="mailto:team@pyxconvert.app">Email tim</a>
              <a className="hover:text-white" href="#">Bergabung Discord</a>
              <a className="hover:text-white" href="#">Dapatkan demo</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
