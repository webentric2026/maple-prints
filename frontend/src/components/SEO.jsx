import { useEffect } from "react";

const SITE = "https://www.mapleprints.in";

// Lightweight per-page SEO for a Vite SPA (no extra dependency).
// Updates <title>, meta description, canonical + OG/Twitter tags on route change.
export default function SEO({ title, description, path = "/", noindex = false }) {
  useEffect(() => {
    const url = `${SITE}${path}`;

    if (title) document.title = title;

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [key, val] = selector
          .replace(/[\[\]"]/g, "")
          .split("=")
          .map((s) => s.trim());
        if (key === "name") el.setAttribute("name", val);
        if (key === "property") el.setAttribute("property", val);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }
    setMeta('meta[property="og:title"]', "content", title || document.title);
    setMeta('meta[name="twitter:title"]', "content", title || document.title);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="robots"]', "content", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path, noindex]);

  return null;
}
