import { useEffect, useState } from "react";

/**
 * Returns true on coarse-pointer (touch) devices OR when the user
 * has prefers-reduced-motion set. Use to disable heavy 3D effects.
 */
export function useTouchOrReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mqls = [
      window.matchMedia("(hover: none)"),
      window.matchMedia("(pointer: coarse)"),
      window.matchMedia("(prefers-reduced-motion: reduce)"),
    ];
    const update = () => setReduced(mqls.some((m) => m.matches));
    update();
    mqls.forEach((m) => m.addEventListener?.("change", update));
    return () => mqls.forEach((m) => m.removeEventListener?.("change", update));
  }, []);

  return reduced;
}
