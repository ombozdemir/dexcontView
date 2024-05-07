'use client'

import { useTheme } from "next-themes";


import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="px-3 me-2 rounded-full dark:hover:bg-slate-200">
      {theme === "dark" ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
    </Button>
  )
}
