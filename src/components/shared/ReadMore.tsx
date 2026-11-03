"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ReadMoreProps = {
  text: string;
  maxLines?: number;
  className?: string;
};

const lineHeight = 28;

export default function ReadMore({
  text,
  maxLines = 4,
  className = "leading-relaxed text-gray-700",
}: ReadMoreProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const measureContent = () => {
      if (!contentRef.current) return;

      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
      setHasOverflow(height > maxLines * lineHeight + 1);
    };

    measureContent();
    const observer = contentRef.current
      ? new ResizeObserver(measureContent)
      : null;

    if (observer && contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer?.disconnect();
  }, [maxLines, text]);

  return (
    <div className="w-full">
      <div
        ref={contentRef}
        className={`relative overflow-hidden transition-[max-height] duration-500 ease-in-out ${className}`}
        style={{
          maxHeight: isExpanded
            ? `${contentHeight}px`
            : `${maxLines * lineHeight}px`,
        }}
      >
        {text}
        {!isExpanded && hasOverflow && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-[#F9F9F6] to-transparent"
          />
        )}
      </div>
      {hasOverflow && (
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
          className="mt-2 flex cursor-pointer items-center gap-1 text-sm font-semibold text-[#D4AF37] transition-colors hover:text-[#1A3A32]"
        >
          {isExpanded ? "Show Less" : "Read More"}
          <ChevronDown
            className={`size-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
}
