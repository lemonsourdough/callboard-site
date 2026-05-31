import "../styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // 테마는 URL 파라미터로 전환 가능: ?theme=b
    const params = new URLSearchParams(window.location.search);
    const theme = params.get("theme");
    if (theme && ["a", "b", "c"].includes(theme)) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("callboard-theme", theme);
    } else {
      const saved = localStorage.getItem("callboard-theme");
      if (saved) {
        document.documentElement.setAttribute("data-theme", saved);
      } else {
        document.documentElement.setAttribute("data-theme", "a");
      }
    }
  }, []);

  return <Component {...pageProps} />;
}
