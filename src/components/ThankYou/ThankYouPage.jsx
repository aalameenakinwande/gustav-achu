import React from "react";
import { Helmet } from "react-helmet";
import ThankYouHero from "./ThankYouHero";
import ThankYouOne from "./ThankYouOne";
import ThankYouTwo from "./ThankYouTwo";

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GR26Z4DH0R"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GR26Z4DH0R');
          `}
        </script>

        {/* Google Tag Manager */}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRDLX8FT');
          `}
        </script>

        {/* LinkedIn Insight Tag */}
        <script type="text/javascript">
          {`
            _linkedin_partner_id = "8418393";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </script>
        <script type="text/javascript">
          {`
            (function(l) {
              if (!l) {
                window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q = [];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript"; b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </script>
      </Helmet>

      {/* GTM and LinkedIn noscript fallbacks */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PRDLX8FT"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=8418393&fmt=gif"
        />
      </noscript>

      {/* Page Components */}
      <ThankYouHero />
    
      <ThankYouTwo />
        <ThankYouOne />
    </>
  );
};

export default ThankYouPage;
