"use client";

import { useState } from "react";

interface CopyCommandProps {
  command: string;
  className?: string;
}

export function CopyCommand({ command, className = "" }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`group flex items-center gap-3 w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 font-mono text-sm text-left transition-all hover:border-cyan/50 hover:bg-bg-tertiary cursor-pointer ${className}`}
    >
      <span className="text-text-muted select-none">$</span>
      <span className="text-text-secondary flex-1 truncate">{command}</span>
      <span className="text-xs text-text-muted group-hover:text-foreground transition-colors shrink-0">
        {copied ? "Copied!" : "Copy"}
      </span>
    </button>
  );
}
