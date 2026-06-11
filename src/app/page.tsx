import type { Metadata } from "next";
import { SolarSystemsPage } from "./solarni-sistemi/SolarSystemsPage";

export const metadata: Metadata = {
  title: "Solarne elektrane za kuće i firme | Solar Partner",
  description:
    "Projektovanje, oprema, ugradnja i podrška pri priključenju solarnih elektrana za domaćinstva, firme i industrijske objekte.",
};

export default function Home() {
  return <SolarSystemsPage />;
}
