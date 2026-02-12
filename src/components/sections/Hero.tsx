"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Terminal } from "@/components/ui/Terminal";
import { GITHUB_URL } from "@/lib/constants";

interface HeroProps {
  version: string;
  releasesUrl: string;
}

export function Hero({ version, releasesUrl }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="text-cyan font-mono text-sm tracking-wide">
              DETERMINISTIC CODE ENFORCER
            </span>
            <a
              href={releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-text-muted bg-bg-tertiary px-2 py-0.5 rounded hover:text-cyan transition-colors"
            >
              v{version}
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-glow-cyan"
          >
            Don&apos;t let your AI
            <br />
            ship unsupervised.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Chaperone is a deterministic code enforcer that catches what TypeScript
            and ESLint miss — file structure, naming conventions, import boundaries,
            and 16+ custom rule types.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="#installation">Install Now</Button>
            <Button
              variant="secondary"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Terminal version={version} />
        </motion.div>
      </div>
    </section>
  );
}
