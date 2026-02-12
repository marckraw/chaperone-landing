"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
}

export function CodeBlock({ code, language = "json", showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl border border-border bg-bg-secondary overflow-hidden group">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg-tertiary">
        <span className="text-xs text-text-muted font-mono">{language}</span>
        {showCopy && (
          <button
            onClick={handleCopy}
            className="text-xs text-text-muted hover:text-foreground transition-colors cursor-pointer"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>
      <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-text-secondary">
        <code>{code}</code>
      </pre>
    </div>
  );
}
