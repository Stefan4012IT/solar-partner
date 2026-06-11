import type { Metadata } from "next";
import { SolarSystemsPage } from "./SolarSystemsPage";

export const metadata: Metadata = {
  title: "Solarni sistemi za kuće i firme | Solar Partner",
  description:
    "Kompletna solarna rešenja za domaćinstva, firme i industrijske objekte. Analiza potrošnje, projektovanje, oprema, ugradnja i podrška pri priključenju.",
};

export default function SolarSystemsRoute() {
  return <SolarSystemsPage />;
}
