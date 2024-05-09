"use client"
import React, { useEffect, useRef, memo } from 'react';
import { useTheme } from 'next-themes';

function TickerTape() {
  const container = useRef();

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { description: "", proName: "BINANCE:BTCUSDT" },
        { description: "", proName: "BINANCE:TRXUSDT" },
        { description: "", proName: "CRYPTOCAP:USDT" },
        { description: "", proName: "CRYPTOCAP:TRX" }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      colorTheme: theme === 'light' ? 'light' : 'dark', // Dynamically set theme
      locale: "en"
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

export default memo(TickerTape);
