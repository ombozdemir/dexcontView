import CoinsDropdown from "@/components/ui/dashboard/header/coins-dropdown";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"
import { ThemeSwitch } from "./theme-switch";
import logo from "@/components/ui/logo/logo.png"
import Image from "next/image";
import { getCoins } from "@/app/api/route";

export default async function Header() {
  const data = await getCoins()


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

      <div className={`flex flex-row justify-start gap-1 items-start ${String(data.data.values.USD.percentChange24h).charAt(0) === "-" ? "text-red-500" : "text-green-700"} font-bold`}>
        <div>
          <h1 className="text-2xl">
            {Math.trunc(data.data.values.USD.price * 100) / 100}
            <p className={`text-sm font-extrabold ${String(data.data.values.USD.percentChange24h).charAt(0) === "-" ? "text-red-500" : "text-green-700"}`}>

              {Math.trunc(data.data.values.USD.percentChange24h * 100) / 100}%
            </p>
          </h1>
        </div>
        {String(data.data.values.USD.percentChange24h).charAt(0) === "-"
          ? <ArrowDownIcon className="mt-1" />
          : <ArrowUpIcon className="mt-1" />
        }
      </div>
      <div className="flex flex-row justify-start gap-2 items-start font-bold">
        {/*<div>
          <h1 className="text">264,196,100 USD</h1>
          <p className="text-xs font-bold text-neutral-600 dark:text-neutral-300">24H Volume</p>
        </div>*/}
      </div>
      <div className="flex flex-row justify-start gap-2 items-start font-bold">
        <div>
          <h1 className="text">
            {Math.trunc(data.data.values.USD.high24h * 100) / 100}
          </h1>
          <p className="text-xs font-bold text-neutral-600 dark:text-neutral-300">24H High Price</p>
        </div>
      </div>
      <div className="flex flex-row justify-start gap-2 items-start font-bold">
        <div>
          <h1 className="text">
            {Math.trunc(data.data.values.USD.low24h * 100) / 100}
          </h1>
          <p className="text-xs font-bold text-neutral-600 dark:text-neutral-300">24H Low Price</p>
        </div>
      </div>
      <ThemeSwitch />
    </header>
  )
}
