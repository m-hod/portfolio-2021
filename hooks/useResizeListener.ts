import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function useResizeListener(debounce?: number) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const debouncedDimensions = useDebounce(dimensions, debounce || 50);

  useEffect(() => {
    if (typeof window === "undefined") return;
    function updateWindowWidth() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return debouncedDimensions;
}
