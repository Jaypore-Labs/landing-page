"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;
    const id = requestAnimationFrame(() => setSupported(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!supported) return null;
  return <CursorInternal />;
}

function CursorInternal() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== "function") return;
      const interactive = target.closest(
        "a, button, [role='button'], [data-cursor]"
      ) as HTMLElement | null;
      if (!interactive) return;
      ring.dataset.state = "hover";
      dot.dataset.state = "hover";
      const label = interactive.getAttribute("data-cursor-label");
      if (label) setHoverLabel(label);
    };
    const onLeave = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== "function") return;
      const interactive = target.closest(
        "a, button, [role='button'], [data-cursor]"
      );
      if (!interactive) return;
      ring.dataset.state = "";
      dot.dataset.state = "";
      setHoverLabel(null);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] h-10 w-10 rounded-full border border-paper/40 data-[state=hover]:h-16 data-[state=hover]:w-16 data-[state=hover]:border-accent data-[state=hover]:bg-accent/10 transition-[height,width,border-color,background-color] duration-300 ease-out flex items-center justify-center mix-blend-difference"
      >
        {hoverLabel && (
          <span className="mono text-[10px] uppercase tracking-widest text-paper whitespace-nowrap">
            {hoverLabel}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[101] h-1.5 w-1.5 rounded-full bg-paper data-[state=hover]:opacity-0 transition-opacity mix-blend-difference"
      />
    </>
  );
}
