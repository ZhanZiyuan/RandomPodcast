import { cn } from "@/lib/utils";

/**
 * Equilateral Triangle SVG Component
 * A vector-stroked equilateral triangle.
 */
export const EquilateralTriangle = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={cn(className)}
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M50 15 L93.3 85 L6.7 85 Z" />
  </svg>
);
