"use client"
import React, { useEffect, useRef, memo } from 'react';

function MiniChartView() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbol": "BITSTAMP:BTCUSD",
          "autosize": true,
          "locale": "en",
          "dateRange": "1D",
          "theme": "light",
          "isTransparent": false,
          "autosize": false,
          "largeChartUrl": ""
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(MiniChartView);
