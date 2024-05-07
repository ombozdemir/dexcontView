import Image from "next/image";
import { ThemeSwitch } from "./theme-switch";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between p-1 py-2 border-b border-neutral-200 dark:border-neutral-700 shadow-md shadow-gray-100
      dark:bg-gradient-to-l dark:from-neutral-900 dark:to-neutral-950 dark:to-90%">
      <div className="flex items-center">
        {/*<Image
          src="/logo.png"
          alt="dexcont logo"
          width={40}
          height={40}
          className="mr-2"
        />*/}
        <h1 className="text-3xl font-extrabold tracking-tight ms-4">dexcont</h1>
      </div>
      <ThemeSwitch />
    </nav>
  );
}
