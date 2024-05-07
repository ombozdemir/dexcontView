"use client"
import { Responsive, WidthProvider } from "react-grid-layout";
import TradingViewWidget from "./real-time-chart";
import MiniChartView from "./mini-chart";
import MarketOverview from "./market-overview"
import TickerTape from "./ticker-tape";
import CryptoHeatmap from "./crypto-heatmap";

export default function MyFirstGrid() {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const layout = [
    { i: "a", x: 0, y: 1, w: 1, h: 12 },
    { i: "b", x: 1, y: 1, w: 2, h: 12 },
    { i: "c", x: 3, y: 1, w: 1, h: 6 },
    { i: "d", x: 0, y: 0, w: 4, h: 1 },
    { i: "e", x: 3, y: 1, w: 1, h: 6 },
  ];
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1800, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 4, md: 4, sm: 1, xs: 1, xxs: 1 }}
      preventCollision={false}
      rowHeight={65}
    >
      <div key="a" className="item border p-2 bg-white dark:bg-cyan-600"><MarketOverview /></div>
      <div key="b" className="item border p-2 bg-white dark:bg-stone-600"><TradingViewWidget /></div>
      <div key="c" className="item border p-2 bg-white dark:bg-stone-600"><MiniChartView /></div>
      <div key="d" className="item border p-2 bg-white dark:bg-stone-600"><TickerTape /></div>
      <div key="e" className="item border p-2 bg-white dark:bg-stone-600"><CryptoHeatmap /></div>
    </ResponsiveGridLayout >
  );
}
