import { useState, useEffect, useCallback } from "react";

function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }, [hasWindow]);

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, [getWindowDimensions]);

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [handleResize, hasWindow]);

  return windowDimensions;
}

export { useWindowDimensions };
