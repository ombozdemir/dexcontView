import Image from "next/image";
// import Dashboard from "./dashboard/page";
import GridLayout from "@/components/ui/dashboard/grid/grid-container.jsx"
// bg-gradient-to-b from-slate-200 from-20% via-blue-200 via-70% to-cyan-200 to-100%
// import BtcData from "@/components/fetchBtcData";

export default function Home() {
  return (
    <main className="min-h-screen p-2 dark:bg-neutral-700
      bg-stone-50
      dark:bg-gradient-to-b dark:from-stone-900 dark:to-neutral-950 dark:to-100%">
      {/*<Dashboard />*/}
      <GridLayout />
    </main>
  );
}
