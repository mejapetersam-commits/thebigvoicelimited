import { useEffect } from "react";

// SAL® chat widget host. The plugin and license live on this WordPress install;
// the widget's REST calls (/wp-json/sal/v1/*) are publicly exposed by the
// plugin (cookie/nonce check is bypassed for /message, /lead, /config, /visit),
// so this site can embed the widget cross-origin as long as the WP host returns
// the right CORS headers (Access-Control-Allow-Origin for this site's origin).
const SAL_HOST = "https://thebigvoice.co.ke";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Window { SAL?: any }
}

export function SalChatWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("sal-widget-js")) return;

    // Minimal bootstrap config. widget.js refetches the full config from
    // /wp-json/sal/v1/config on load, so only the endpoint URLs are required here.
    window.SAL = {
      endpoint: `${SAL_HOST}/wp-json/sal/v1/message`,
      leadEndpoint: `${SAL_HOST}/wp-json/sal/v1/lead`,
      configEndpoint: `${SAL_HOST}/wp-json/sal/v1/config`,
      visitEndpoint: `${SAL_HOST}/wp-json/sal/v1/visit`,
      nonce: "",
      siteName: "The Big Voice Ltd",
    };

    const css = document.createElement("link");
    css.id = "sal-widget-css";
    css.rel = "stylesheet";
    css.href = `${SAL_HOST}/wp-content/plugins/sal/assets/widget.css`;
    document.head.appendChild(css);

    const script = document.createElement("script");
    script.id = "sal-widget-js";
    script.src = `${SAL_HOST}/wp-content/plugins/sal/assets/widget.js`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}