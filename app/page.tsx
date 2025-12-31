import AppFooter from "./components/AppFooter";
import ConverterCard from "./components/ConverterCard";
import EdpiCalculator from "./components/EdpiCalculator";
import FeatureGrid, { Feature } from "./components/FeatureGrid";
import Hero from "./components/Hero";
import { LayersIcon, ShieldIcon, SparkIcon } from "./components/icons";
import Navbar from "./components/Navbar";
import WorkflowSection, { Preset, Step } from "./components/WorkflowSection";

const highlights = [
  "Kalkulasi eDPI otomatis",
  "Support hipfire & ADS",
  "Compensate FOV & aspect",
  "Export ke aim trainer",
];

const features: Feature[] = [
  {
    title: "Akurasi sensitivitas",
    description:
      "Hitung eDPI, yaw/pitch, dan jarak 360 secara presisi untuk menjaga muscle memory.",
    accent: "from-teal-400 via-emerald-300 to-amber-200",
    icon: <SparkIcon />,
  },
  {
    title: "Multi-game ready",
    description:
      "Preset siap pakai untuk Valorant, CS2, Apex, OW2, Fortnite, dan dapat ditambah sendiri.",
    accent: "from-amber-300 via-orange-200 to-teal-200",
    icon: <LayersIcon />,
  },
  {
    title: "Simulasi & kontrol",
    description:
      "Preview jarak 360, FOV, dan multiplier ADS agar transisi ke aim trainer atau in-game mulus.",
    accent: "from-cyan-200 via-teal-200 to-emerald-300",
    icon: <ShieldIcon />,
  },
];

const steps: Step[] = [
  {
    title: "Masukkan sens & DPI asal",
    detail: "Isi sensitivitas hipfire/ADS, DPI, resolusi, dan FOV game asal.",
  },
  {
    title: "Pilih game tujuan",
    detail:
      "Ambil preset bawaan atau atur manual yaw, pitch, dan FOV multiplier.",
  },
  {
    title: "Lihat hasil & simpan",
    detail:
      "Dapatkan sens target, eDPI, jarak 360, lalu ekspor ke aim trainer atau simpan preset.",
  },
];

const presets: Preset[] = [
  {
    name: "Valorant -> CS2",
    detail: "Jaga eDPI, konversi 103 FOV CS2 ke 73.74 FOV Valorant ekuivalen.",
    badge: "Tactical",
  },
  {
    name: "Apex (110) -> OW2 (103)",
    detail:
      "Hitung ulang hipfire dan scope multiplier supaya jarak 360 konsisten.",
    badge: "Arena",
  },
  {
    name: "PUBG -> Fortnite",
    detail:
      "Konversi sens TPP/FPP, sesuaikan yaw dan ADS multiplier per scope.",
    badge: "BR",
  },
  {
    name: "CS2 -> Aim Trainer",
    detail:
      "Ekspor sens, FOV, dan jarak 360 langsung ke Aim Lab/Kovaak siap latihan.",
    badge: "Latihan",
  },
];

const previewData = [
  { label: "Sens hipfire", value: "1.65", tone: "emerald" as const },
  { label: "eDPI", value: "1320", tone: "amber" as const },
  { label: "360 distance", value: "32.8 cm", tone: "teal" as const },
];

const calculatorInputs = [
  { label: "DPI", value: "800" },
  { label: "Sensitivitas", value: "1.65" },
  { label: "FOV", value: "103" },
  { label: "Aspect", value: "16:9" },
];

const calculatorResults = [
  { label: "eDPI", value: "1320", tone: "amber" as const },
  { label: "360 distance", value: "32.8 cm", tone: "emerald" as const },
  { label: "CM/360 hipfire", value: "32.8", tone: "teal" as const },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 mt-6">
        <div className="grid gap-10 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Hero highlights={highlights} />
          <ConverterCard
            inputSummary="Hipfire 0.32 - ADS 0.9"
            inputDetail="DPI 800 - FOV 103 - 16:9"
            sourceGame="Valorant (73.74 FOV)"
            sourceDetail="360 distance: 32.8 cm"
            targetGame="CS2 (103 FOV)"
            targetDetail="Target sens: 1.65 / 800 DPI"
            accuracy="99%"
            preview={previewData}
          />
        </div>

        <div className="pb-12">
          <EdpiCalculator
            title="Hitung eDPI dan jarak 360 tanpa ribet."
            description="Masukkan DPI dan sensitivitas, lihat eDPI, jarak 360, dan perbandingan hipfire/ADS."
            inputs={calculatorInputs}
            results={calculatorResults}
          />
        </div>

        <FeatureGrid features={features} />

        <WorkflowSection steps={steps} presets={presets} />
      </main>

      <AppFooter />
    </div>
  );
}
