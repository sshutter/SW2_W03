import Banner from "@/components/Banner";
// import VaccineCard from "@/components/VaccineCard";
import HospitalCard from "@/components/HospitalCard";
import { Card } from "@mui/material";
import CardPanel from "@/components/CardPanel";
import PromoteCard from "@/components/PromoteCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <PromoteCard />
    </main>
  );
}
