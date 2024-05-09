"use client"
import React, { useEffect, useRef, memo } from 'react';
import { useTheme } from 'next-themes';

function CrpytoHeatmap() {
  const container = useRef();

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      dataSource: 'Crypto',
      blockSize: '24h_vol_cmc',
      blockColor: 'change',
      locale: 'en',
      symbolUrl: '',
      colorTheme: theme === 'light' ? 'light' : 'dark', // Set theme dynamically
      hasTopBar: true,
      isDataSetEnabled: true,
      isZoomEnabled: false,
      hasSymbolTooltip: true,
      isMonoSize: true,
      width: '100%',
      height: '100%',
    });
    container.current.innerHTML = ''; // Clear previous content
    container.current.appendChild(script); // Append the new script
  },
    [theme]
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(CrpytoHeatmap);
