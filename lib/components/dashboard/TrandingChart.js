import React, { memo, useEffect, useRef } from 'react'

function createWidget(category) {
  if (document.getElementById('tradingview_c5cd0') && 'TradingView' in window) {
    new window.TradingView.widget({
      autosize: true,
      symbol: category,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "in",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_c5cd0"
    });
  }
}

const TrandingChart = ({ category }) => {
  const onLoadScriptRef = useRef();
  const tvScriptLoadingPromise = useRef();

  const hasScriptInstance = useRef(null);

  useEffect(
    () => {

      if (!category) {
        return;
      }

      onLoadScriptRef.current = () => createWidget(category);

      if (!tvScriptLoadingPromise.current) {
        tvScriptLoadingPromise.current = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      console.log(hasScriptInstance.current);
      if (hasScriptInstance.current) {
        onLoadScriptRef.current();
      } else {
        tvScriptLoadingPromise.current.then(() => {
          hasScriptInstance.current = true;
          onLoadScriptRef.current && onLoadScriptRef.current()
        });
      }

      return () => onLoadScriptRef.current = null;

    },
    [category]
  )

  return (
    <div id='tradingview_c5cd0' className='h-100' />
  )
}

export default memo(TrandingChart);