"use client";

import { motion } from "framer-motion";
import { getTerminalLines } from "@/lib/constants";

const lineColors: Record<string, string> = {
  command: "text-cyan-light font-bold",
  info: "text-text-muted",
  pass: "text-emerald",
  fail: "text-red-400",
  summary: "text-text-secondary font-medium",
  blank: "",
};

interface TerminalProps {
  version?: string;
}

export function Terminal({ version = "0.3.0" }: TerminalProps) {
  const lines = getTerminalLines(version);

  return (
    <div className="rounded-xl border border-border bg-bg-secondary overflow-hidden glow-cyan">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-tertiary">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-text-muted font-mono">terminal</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className={`${lineColors[line.type] || ""} ${line.text === "" ? "h-4" : ""}`}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: lines.length * 0.08 }}
          className="inline-block w-2 h-4 bg-cyan animate-blink mt-1"
        />
      </div>
    </div>
  );
}
