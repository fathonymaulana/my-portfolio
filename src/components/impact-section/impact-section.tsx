"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView, animate } from "framer-motion";

const primaryCurve = [0.62, 0.05, 0.01, 0.99];

const AnimatedCounter = ({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2,
        ease: primaryCurve as any,
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString() + suffix;
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const ImpactSection: React.FC = () => {
  return (
    <section
      id="stats"
      className="py-24 md:py-24 flex flex-col items-center justify-center gap-12 w-full border-b border-border"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl px-4">
        <span className="italic underline decoration-muted-foreground underline-offset-4 text-foreground text-sm font-medium font-custom-sans">
          Stats
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          My Impact
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Celebrating the milestones achieved.
        </p>
      </div>

      {/* Stats container */}
      <div className="w-full border-y border-border flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border overflow-hidden">
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center py-4 md:py-8 flex-1 gap-2">
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: primaryCurve }}
            className="text-4xl md:text-5xl tracking-tighter font-semibold text-foreground"
          >
            <AnimatedCounter to={100} suffix="+" />
          </motion.h3>
          <p className="text-muted-foreground text-xs md:text-sm">
            Project Completed
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center py-4 md:py-8 flex-1 gap-2">
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: primaryCurve, delay: 0.1 }}
            className="text-4xl md:text-5xl tracking-tighter font-semibold text-foreground"
          >
            <AnimatedCounter to={18} />
          </motion.h3>
          <p className="text-muted-foreground text-xs md:text-sm">
            Industry Covered
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center py-4 md:py-8 flex-1 gap-2">
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: primaryCurve, delay: 0.2 }}
            className="text-4xl md:text-5xl tracking-tighter font-semibold text-foreground"
          >
            <AnimatedCounter to={5} />
          </motion.h3>
          <p className="text-muted-foreground text-xs md:text-sm">
            Years of Experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
