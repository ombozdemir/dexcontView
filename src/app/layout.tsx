import type { Metadata } from "next";

import { nunito } from "./ui/fonts";

import TopNav from "@/components/ui/dashboard/top-nav";
import Header from "@/components/ui/dashboard/header";

import { ThemeProvider } from "next-themes";

import "./globals.css";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";

export const metadata: Metadata = {
  title: "dexcont",
  description: "dexcont demo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} antialiased`}>
        <ThemeProvider enableSystem={true} attribute="class">
          {/*<TopNav />*/}
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
