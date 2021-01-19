import { useEffect } from "react";

export default function useTimeout(action: Function, delay: number) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      action();
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [action, delay]);
}
