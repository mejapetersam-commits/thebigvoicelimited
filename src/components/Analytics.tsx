import { useEffect } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/seo";

/** Sends phone and email clicks to Google Analytics as events (only when an ID is set). */
export function Analytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (!a || !gtag) return;
      const href = a.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) gtag("event", "phone_click", { link_url: href, page_path: location.pathname });
      else if (href.startsWith("mailto:")) gtag("event", "email_click", { link_url: href, page_path: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
