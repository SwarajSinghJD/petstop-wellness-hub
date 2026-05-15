import { useEffect, useRef, type CSSProperties, type ReactNode, type ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number; // ms
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

/**
 * Wraps children in an element that fades + translates up when scrolled
 * into view. Uses IntersectionObserver; animates only once.
 */
export function Reveal({ children, delay = 0, as: Tag = "div", className = "", style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={{ ...style, ["--reveal-delay" as never]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
