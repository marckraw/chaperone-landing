"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Terminal } from "@/components/ui/Terminal";
import { EXAMPLE_CONFIG } from "@/lib/constants";

interface CodeExampleProps {
  version: string;
}

export function CodeExample({ version }: CodeExampleProps) {
  return (
    <section className="px-6 py-32 bg-bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See it in action
          </h2>
          <p className="text-text-secondary text-lg">
            Define rules. Run checks. Get results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <CodeBlock code={EXAMPLE_CONFIG} language=".chaperone.json" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Terminal version={version} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
