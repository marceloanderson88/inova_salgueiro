"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Revela o conteúdo quando ele entra na viewport.
 * Respeita `prefers-reduced-motion` via CSS (ver globals.css).
 */
export function Revelar({
  children,
  atraso = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  atraso?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(elemento);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`revelar ${className}`}
      data-visivel={visivel}
      style={{ "--atraso": `${atraso}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
