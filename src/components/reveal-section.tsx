"use client";

import { type ReactNode, type ElementType } from "react";
import { useSectionReveal } from "@/hooks/use-section-reveal";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Wrapper that fades+slides a section in on first viewport intersection. */
export function RevealSection({
  id,
  children,
  className = "",
  as: Tag = "section",
}: SectionProps) {
  const { ref, visible } = useSectionReveal(0.1);

  return (
    <Tag
      id={id}
      ref={ref as React.Ref<HTMLElement>}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
