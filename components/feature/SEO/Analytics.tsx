import Script from 'next/script';

import config from '@/lib/config';

const Analytics = () => {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${config.google_analytics}`}
      />
      <Script id='gtag-config' strategy='afterInteractive'>
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', ${config.google_analytics});
            `}
      </Script>
    </>
  );
};

export default Analytics;
