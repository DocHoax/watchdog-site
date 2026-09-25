"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Uses IntersectionObserver to trigger a one-time fade-in animation
 * when an element scrolls into view. Returns a ref and a boolean.
 */
export function useSectionReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setVisible(true);
      }
    },
    []
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // When reduced motion is preferred, the CSS transition is already
    // disabled by the global rule, so the element just needs to be visible.
    // We still use the observer so setState only fires on intersection.
    const observer = new IntersectionObserver(onIntersect, {
      threshold: prefersReducedMotion ? 0 : threshold,
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, onIntersect]);

  return { ref, visible };
}
