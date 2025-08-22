"use client";
import { ReactNode } from "react";

interface CurveProps {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
}

export default function Curve({ children, backgroundColor, className = "" }: CurveProps) {
  return (
    <div 
      className={`w-full ${className}`}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
} 