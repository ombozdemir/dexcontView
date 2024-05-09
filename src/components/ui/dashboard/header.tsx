import CoinsDropdown from "@/components/ui/dashboard/header/coins-dropdown";
import { ThemeSwitch } from "./theme-switch";
import logo from "@/components/ui/logo/logo.png"
import Image from "next/image";
import BitcoinTracker from './BitcoinTracker'

export default async function Header() {


  return (
    <header className="flex items-center justify-start gap-5 py-3 px-1 border-b border-neutral-200 shadow-xl shadow-gray-800 z-100 dark:border-neutral-700
      dark:bg-neutral-800 dark:border-b">
      {/*<CoinsDropdown />*/}
      <div className="flex items-center">
        <Image
          src={logo}
          alt="dexcont logo"
          width={175}
          className="mr-1 ms-3"
        />
      </div>
      <BitcoinTracker />
      <ThemeSwitch />
    </header>
  )
}
