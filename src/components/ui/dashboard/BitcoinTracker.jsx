"use client"
import { useState, useEffect } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

const BitcoinTicker = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch('https://api.cryptorank.io/v1/currencies/1?api_key=1d8b93a6990babecb711ede035539b7be9e97ddcf2e77fd3c6af9cbe4c4a',
          {
            headers: { 'Cache-Control': 'no-cache', }
          });
        const btcData = await response.json();
        setData(btcData);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };
    fetchBitcoinData();
    const interval = setInterval(fetchBitcoinData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {data &&
        <>
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
        </>
      }
    </>
  );
};

export default BitcoinTicker;

/* {bitcoinData && (
  <p>
    Bitcoin Price: {bitcoinData}
  </p>
)} */
