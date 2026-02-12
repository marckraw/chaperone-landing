"use client";

import { motion } from "framer-motion";
import { CopyCommand } from "@/components/ui/CopyCommand";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { INSTALL_COMMAND } from "@/lib/constants";
import type { PlatformAsset } from "@/lib/github";

interface InstallationProps {
  assets: PlatformAsset[];
  releasesUrl: string;
}

export function Installation({ assets, releasesUrl }: InstallationProps) {
  return (
    <section id="installation" className="px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Install</h2>
          <p className="text-text-secondary text-lg">
            One command. No dependencies. No runtime.
          </p>
        </motion.div>

        {/* Quick Install */}
        <AnimatedSection className="mb-12">
          <div className="rounded-xl border border-cyan/30 bg-bg-card p-8 glow-cyan">
            <h3 className="text-lg font-semibold mb-1">Quick Install</h3>
            <p className="text-text-muted text-sm mb-4">
              Detects your platform and installs the right binary.
            </p>
            <CopyCommand command={INSTALL_COMMAND} />
          </div>
        </AnimatedSection>

        {/* Platform Downloads */}
        <AnimatedSection delay={0.1} className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Platform Downloads</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {assets.map((asset) => (
              <a
                key={asset.arch}
                href={asset.downloadUrl || releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-bg-card p-4 hover:border-cyan/30 transition-colors group"
              >
                <div className="text-sm font-medium mb-1 group-hover:text-cyan transition-colors">
                  {asset.name}
                </div>
                <div className="text-xs font-mono text-text-muted">
                  {asset.binary}
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* From Source */}
        <AnimatedSection delay={0.2}>
          <h3 className="text-lg font-semibold mb-4">From Source</h3>
          <div className="space-y-3">
            <CopyCommand command="git clone https://github.com/marckraw/chaperone-cli.git" />
            <CopyCommand command="cd chaperone-cli && bun install" />
            <CopyCommand command="bun run src/cli.ts" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
