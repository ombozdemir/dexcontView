import CoinsDropdown from "@/components/ui/dashboard/header/coins-dropdown";
import { ChevronDown, ArrowUpIcon } from "lucide-react"

export default function Header() {
  return (
    <header className="flex items-center justify-start gap-5 py-0 px-1 border-b border-neutral-200 shadow-xl shadow-gray-800 z-100 dark:border-neutral-700
      dark:bg-neutral-800 dark:border-b">
      <CoinsDropdown />

      <div className="flex flex-row justify-start gap-1 items-start text-green-700 font-bold">
        <div>
          <h1 className="text-2xl">64,267.0
            <p className="text-sm text-red-500 font-extrabold">-1.02%</p>
          </h1>
        </div>
        <ArrowUpIcon className="mt-1" />
      </div>
      <div className="flex flex-row justify-start gap-2 items-start font-bold">
        <div>
          <h1 className="text">264,196,100 USD</h1>
          <p className="text-xs font-bold text-neutral-600 dark:text-neutral-300">24H Volume</p>
        </div>
      </div>
      <div className="flex flex-row justify-start gap-2 items-start font-bold">
        <div>
          <h1 className="text">64,458</h1>
          <p className="text-xs font-bold text-neutral-600 dark:text-neutral-300">24H High Price</p>
        </div>
      </div>
      <div className="flex flex-row justify-start gap-2 items-start font-bold">
        <div>
          <h1 className="text">62,855</h1>
          <p className="text-xs font-bold text-neutral-600 dark:text-neutral-300">24H Low Price</p>
        </div>
      </div>
    </header>
  )
}
