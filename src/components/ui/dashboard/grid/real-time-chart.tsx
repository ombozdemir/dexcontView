"use client"
import React, { useEffect, useRef, memo } from 'react';
import { useTheme } from 'next-themes';

function TradingViewWidget() {
  const container = useRef();

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "1",
      timezone: "Europe/Istanbul",
      theme: theme === 'light' ? 'light' : 'dark', // Dynamically set theme
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com"
    });
    container.current.innerHTML = ''; // Clear previous content
    container.current.appendChild(script);
  }, [theme]);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
