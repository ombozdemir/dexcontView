"use client"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

import { ChevronDown, ChevronUp } from "lucide-react"
export default function CoinsDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex">
      <DropdownMenu onOpenChange={isOpen => setOpen(isOpen)}>
        <DropdownMenuTrigger className="border-e dark:border-neutral-700 px-4 py-2 font-extrabold text-xl">
          <div className="flex justify-between items-center gap-28">
            <div className="flex flex-col gap-1">
              <span>BTC/USD</span>
              <Badge variant="default" className="text-xs inline-block self-start font-bold bg-yellow-600">BTC</Badge>
            </div>
            <div>
              {open ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-96 ms-2 h-80 p-2">

          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
