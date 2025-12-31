"use client";

import { useMemo, useState } from "react";
import Navbar, { convertNavItems } from "../components/Navbar";
import AppFooter from "../components/AppFooter";

const yawValues: Record<string, number> = {
  CS2: 0.022,
  "CS:GO": 0.022,
  Valorant: 0.07,
  "Apex Legends": 0.022,
  PUBG: 0.07,
  "Overwatch 2": 0.0066,
  "R6 Siege": 0.02,
  Fortnite: 0.07,
};

const games = Object.keys(yawValues);

export default function ConvertPage() {
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const [sensHipfire, setSensHipfire] = useState("");
  const [dpi, setDpi] = useState("");

  const yawA = yawValues[source] ?? 0;
  const yawB = yawValues[target] ?? 0;

  const parsedDpi = parseNumber(dpi);
  const parsedHipfire = parseNumber(sensHipfire);

  const { targetHipfire, cm360Source, cm360Target, edpiSource, edpiTarget } =
    useMemo(() => {
      const tf = yawB ? parsedHipfire * (yawA / yawB) : 0;
      const cm360Src = calcCm360(parsedDpi, parsedHipfire, yawA);
      const cm360Tgt = calcCm360(parsedDpi, tf, yawB);
      const edpiSrc = parsedDpi * parsedHipfire;
      const edpiTgt = parsedDpi * tf;

      return {
        targetHipfire: tf,
        cm360Source: cm360Src,
        cm360Target: cm360Tgt,
        edpiSource: edpiSrc,
        edpiTarget: edpiTgt,
      };
    }, [parsedHipfire, parsedDpi, yawA, yawB]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar navItems={convertNavItems} />

      <main className="mx-auto max-w-5xl px-6 pb-20 pt-6 lg:px-8">
        <header className="space-y-3 pb-10">
          <p className="text-sm uppercase tracking-[0.18em] text-teal-100">
            Convert
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Konversi sensitivitas lintas game dengan cepat.
          </h1>
          <p className="max-w-2xl text-base text-slate-300">
            Masukkan sensitivitas dan DPI, pilih game tujuan, lalu dapatkan sens
            target, eDPI, dan jarak 360 yang setara. Semua perhitungan dilakukan
            otomatis sesuai karakteristik game.
          </p>
        </header>

        <section
          id="convert-form"
          className="grid gap-6 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/30 backdrop-blur-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Game asal">
              <Select
                options={games}
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </Field>
            <Field label="Game tujuan">
              <Select
                options={games}
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Sensitivitas">
              <Input value={sensHipfire} onChange={setSensHipfire} />
            </Field>
            <Field label="DPI mouse">
              <Input value={dpi} onChange={setDpi} />
            </Field>
          </div>

          <div className="flex items-center gap-5 opacity-25">
            <div className="h-px bg-white w-full rounded-full"></div>
            <div className="text-white text-sm">OUTPUT</div>
            <div className="h-px bg-white w-full rounded-full"></div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <StatBox
              label="Sensitivitas Game B"
              value={formatNumber(targetHipfire)}
            />
            <StatBox label="eDPI" value={formatNumber(edpiTarget)} />
            <StatBox
              label="Jarak 360"
              value={`${formatNumber(cm360Target)} cm`}
            />
          </div>

          <div className="flex flex-wrap items-center justify-end">
            <button className="rounded-full border border-white/20 px-4 py-3 text-sm text-slate-100 transition hover:border-white/40">
              Simpan sebagai preset
            </button>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm text-slate-200">
      <span className="text-xs uppercase tracking-[0.14em] text-slate-400">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-3 text-sm text-slate-50 outline-none ring-1 ring-transparent transition focus:border-white/30 focus:ring-white/10"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      inputMode="decimal"
    />
  );
}

function Select({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-3 text-sm text-slate-50 outline-none ring-1 ring-transparent transition focus:border-white/30 focus:ring-white/10"
    >
      <option value="" disabled>
        Pilih game
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

type ResultCardProps = {
  title: string;
  value: string;
  detailLines: string[];
  extraLines?: string[];
};

function ResultCard({
  title,
  value,
  detailLines,
  extraLines,
}: ResultCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900 p-4 shadow-[0_1px_0_rgba(0,0,0,0.25)]">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
        {title}
      </p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <div className="mt-2 space-y-1 text-sm text-slate-300">
        {detailLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {extraLines && (
        <div className="mt-3 space-y-1 text-xs text-slate-400">
          {extraLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900 p-4 text-center shadow-[0_1px_0_rgba(0,0,0,0.25)]">
      <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}

function parseNumber(value: string) {
  const num = Number(value.replace(",", "."));
  return Number.isFinite(num) ? num : 0;
}

function calcCm360(dpi: number, sens: number, yaw: number) {
  if (!dpi || !sens || !yaw) return 0;
  return (2.54 * 360) / (dpi * sens * yaw);
}

function formatNumber(value: number) {
  if (!Number.isFinite(value)) return "0";
  return value
    .toFixed(3)
    .replace(/\.?0+$/, (match) =>
      match.startsWith(".") ? match.replace(/0+$/, "").replace(/\.$/, "") : ""
    );
}
