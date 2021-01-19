import { useEffect, useState } from "react";

export default function useDebounce(value: any, delay: number) {
  const [val, setVal] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVal(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return val;
}
