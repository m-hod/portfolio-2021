import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function usewindowListener(debounce?: number) {
  const [windowWidth, setWindowWidth] = useState(0);
  const debouncedWindowWidth = useDebounce(windowWidth, debounce || 50);

  useEffect(() => {
    if (typeof window === "undefined") return;
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return debouncedWindowWidth;
}
